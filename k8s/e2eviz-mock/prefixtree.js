class Node {
    constructor(label) {
        this.children = new Map();
        this.label = label;
        this.parent = null;
        this.data = null;
        
        this.li = null;
    }
    
    addChild(label, child) {
        child.parent = this;
        this.children.set(label, child);
    }
    
    // walk(parent, node)
    walk(fn) {
        fn(this);
        this.children.forEach((value) => {
            value.walk(fn);
        });
    }
    
    // fn (val, node): val
    fold(val, fn) {
        val = fn(val, this);
        this.children.forEach((node) => {
            val = node.fold(val, fn);
        });
        return val;
    }
    
    prefix() {
        var prefix = this.label;
        
        var cur = this.parent;
        while (cur && cur.label) {
            prefix = cur.label + ' ' + prefix;
            cur = cur.parent;
        }
        return prefix;
    }
    
    size() {
        return this.fold(0, (val, node) => {
            return val + (node.data ? 1 : 0);
        });
    }
    
    // optimize reduces the size and depth of the tree.
    // - removes singleton children.
    optimize() {
        this.children.forEach((value) => {
            value.optimize();
        })
        
        if (this.children.size == 1 && !this.data && this.parent) {
            var child = Array.from(this.children.values())[0];
            
            this.parent.children.delete(this.label);
            
            // Pull the child node into this node.
            this.children = child.children;
            this.children.forEach((v) => {
                v.parent = this;
            });

            this.label = this.label + ' ' + child.label;
            this.parent.children.set(this.label, this);
            this.data = child.data;
        }
    }

    asHTMLLI() {
        var label = this.label;
        if (this.size() > 1) {
            label +=  ' (items ' + this.size() + ')';
        }

        var li = ($('<li>').addClass('browser-tree-item')
            .append($('<div>')
            .html(label)
            .addClass('browser-tree-label'))
            .toggle());

        if (this.children.size > 0) {
            var view = $('<div>').addClass('browser-tree-item-view').html('[view]');
            li.append(view);
            view.click(() => {
                console.log('view', this);
                // XXX
                showReport(this.prefix());
                return false;
            });
        }

        if (this.data) {
            var data = $('<div>').addClass('browser-tree-item-data');
            li.append(data);
            data.html('[data]');

            data.click(() => {
                console.log('data', this);
                return false;
            });
        }

        li.click((event) => {
            this.children.forEach((value) => {
                value.li.toggle('fast');
            });
            return false;
        });

        this.li = li;

        if (this.children.size > 0) {
            var ul = $('<ul>').addClass('browser-tree-child-list');
            this.addChildrenLI(ul);
            li.append(ul);
        }
        return li;
    }

    addChildrenLI(ul) {
        Array.from(this.children.keys()).sort((a, b) => {
            return a.localeCompare(b);
        }).forEach((label) => {
            var v = this.children.get(label);
            ul.append(v.asHTMLLI());
        })
        return ul;
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node(null, 'root');
    }

    // fn : (Node parent, string, Node)
    walk(fn) {
        this.root.walk(fn);
    }

    add(path, data, todo) { // XXX/bowei -- todo
        var cur = this.root;
        for (var i=0; i<path.length; ++i) {
            if (cur.children.has(path[i])) {
                cur = cur.children.get(path[i]);
            } else {
                var node = new Node(path[i]);
                cur.addChild(path[i], node);
                cur = node;
            }
        }
        cur.data = data;
    }

    optimize() {
        this.root.optimize();
    }

    asHTMLUL() {
        var ul = $('<ul>');
        this.root.addChildrenLI(ul).addClass('browser-tree-top-list');
        this.root.children.forEach((v) => {
            v.li.toggle();
        })
        return ul;
    }
}

const STOP_WORDS = [
    'a',
    'be',
    'for',
    'have',
    'not',
    'should',
    'that',
    'the',
    'with',
]

// split a test description string.
function splitTestDescription(desc) {
    var l = desc.split(/\s+/);
    var cur = [];
    var ret = [];

    for (var i=0; i<l.length; ++i) {
        cur.push(l[i]);
        if (STOP_WORDS.indexOf(l[i]) < 0) {
            ret.push(cur.join(' '));
            cur = [];
        }
    }

    return ret;
}

// split a job name.
function splitJob(job) {
    return job.split(/-/);
}
