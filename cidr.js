// TODO: fix negative 32-bit IP addresses
'use strict';

function toIp(raw) {
  return (raw>>24 & 0xff) + '.' + (raw>>16 & 0xff) + '.' + (raw>>8 & 0xff) + '.' + (raw & 0xff);
}

function uint32ToStr(mask) {
  var ret = ''
  for (var i=0; i<4; i++) {
    var val =(mask>>(24 - 8*i)) & 0xff;
    ret += (val>>4 & 0xf).toString(16);
    ret += (val & 0xf).toString(16);
  }
  return ret;
}

function parseCidr(s) {
  var CIDR_RE = /(\d+)\.(\d+)\.(\d+)\.(\d+)\/(\d+)/
  var match = CIDR_RE.exec(s.trim());
  if (! match) {
    console.log('Invalid CIDR: ' + s);
    return false;
  }

  var ip = ((parseInt(match[1]) << 24)
      | (parseInt(match[2]) << 16)
      | (parseInt(match[3]) << 8)
      | parseInt(match[4]));
  var cidr = parseInt(match[5]);

  return {ip: ip, cidr: cidr}
}

function addEntry() {
  var idx = RANGES.length;

  var input = $('<input value="10.0.0.0/24">');
  //var values = $('<td>');
  var size = $('<td>');
  var range = $('<td>');
  var mask = $('<td>');

  var table = $('<table>');
  table.css('border', 'solid 1px');
  table.css('padding', '2px');
  table.css('width', '20em');
  table.append($('<tr>').append('<td>CIDR</td>').append(input))
  table.append($('<tr>').append('<td>Size</td>').append(size))
  table.append($('<tr>').append('<td>Range</td>').append(range))
  table.append($('<tr>').append('<td>Mask</td>').append(mask))

  function update() {
    var res = parseCidr(input.val());
    if (! res) { return; }
    var ip = res.ip;
    var cidr = res.cidr;
    var minMask = 0xffffffff << (32-cidr);

    size.html(Math.pow(2, 32-cidr));
    range.html(toIp(minMask & ip) + ' - ' + toIp((0xffffffff & (~minMask)) | ip));
    mask.html('0x' + uint32ToStr(minMask));

    RANGES[idx] = {
      ip: ip,
      ipMax: (ip + Math.pow(2, 32-cidr)),
      cidr: cidr
    }

    redraw();
  }

  $(input).on('input', update);
  update();

  $('#content').append(table);
}

function redraw() {
  var canvas = $('#canvas').get(0);
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var min = RANGES[0].ip;
  var max = RANGES[0].ipMax;

  for (var idx = 0; idx < RANGES.length; idx++) {
    var range = RANGES[idx];
    min = Math.min(min, RANGES[idx].ip);
    max = Math.max(max, RANGES[idx].ipMax);
  }

  for (var idx = 0; idx < RANGES.length; idx++) {
    var range = RANGES[idx];
    ctx.fillStyle = COLOR_RAMP[idx];
    var p = {
      x: (range.ip - min)/(max - min) * canvas.width,
      y: (idx/RANGES.length) * canvas.height,
      dx: (range.ipMax - range.ip)/(max - min)  * canvas.width,
      dy: canvas.height/RANGES.length
    };
    ctx.fillRect(p.x, p.y, p.dx, p.dy)
    ctx.strokeRect(p.x, p.y, p.dx, p.dy)
  }
}

// global
var RANGES = []
var COLOR_RAMP = [
  '#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99',
  '#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a',
  '#ffff99','#b15928']
