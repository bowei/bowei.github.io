'use strict';

class TestResult {
    constructor(runId, startTs, endTs, commit, passed, failed, other) {
        this.runId = runId;
        this.startTs = startTs;
        this.endTs = endTs;
        this.commit = commit;
        this.passed = passed;
        this.failed = failed;
        this.other = other;
    }

    status() {
        return Math.round(
            this.passed / (this.failed + this.passed + this.other)*9) | 0;
    }
}

// Aggregates several tests from the same run, job and commit hash together.
class AggregateTestResult {
    constructor(key, tests, job) {
        this.key = key;

        this.tests = tests;
        this.job = job;

        this.reports = [];
    }

    addReport(report) {
        this.reports.push(report);
        return this;
    }

    asHTMLRow() {
        var tr = $('<tr>');
        tr.append($('<td>').html(this.key));
        tr.append($('<td>').html(this.job));
        tr.append($('<td>').html('<img src="http://placehold.it/200x40"/>').addClass('timeline-graph'));

	if (this.reports.length == 0) {
		// XXX
		tr.append($('<td>').html('no tests reported'));
		return tr;
	}

        var groupFn = (r) => {
            return r.commit;
        }

        var addGroup = (td, group, rg) => {
            var groupDiv = $('<div>').addClass('timeline-cell-group');
            td.append(groupDiv);

            var div = $('<div>');
            groupDiv.append(div);

            for (var i=0; i<rg.length; ++i) {
                div.append(
                    $('<div>')
                        .html('&block;')
                        .addClass('timeline-cell-block')
                        .addClass('timeline-cell-block-'+rg[i].status()));
            }

            var div = $('<div>').html(group).addClass('timeline-cell-label');
            groupDiv.append(div);
        }

        // XXX/bowei -- sort reverse
        var group = groupFn(this.reports[0]);
        var reportGroup = [this.reports[0]];

        var td = $('<td>').addClass('timeline-td');
        tr.append(td);

        for (var i=1; i<this.reports.length; ++i) {
            var report = this.reports[i];
            if (groupFn(report) !== group) {
                addGroup(td, group, reportGroup);
                reportGroup = [];
                group = groupFn(report);
            }
            reportGroup.push(report);
        }

        if (reportGroup.length > 0) {
            addGroup(td, group, reportGroup);
        }

        return tr;
    }
}

class TestReport {
    constructor(testGroup, start, end) {
        this.testGroup = testGroup;
        this.start = start;
        this.end = end;
        this.testResults = new Map();
    }

    addTestResult(result) {
	// XXX/bowei -- clobber
        this.testResults.set(result.job, result);
    }

    asHTMLTable() {
        var table = $('<table>').addClass('results');
        table.attr('id', 'results');

        var headerTR = $('<tr>');
        ['key', 'job', 'graph', 'result'].forEach((v) => {
            headerTR.append($('<th>').html(v));
        });
        table.append(headerTR);

	    /*
        this.testResults.forEach((agg) => {
            table.append(agg.asHTMLRow());
        });
	*/

	Array.from(this.testResults.keys()).sort().forEach((key) => {
		table.append(this.testResults.get(key).asHTMLRow());
	});

        return table;
    }
}
