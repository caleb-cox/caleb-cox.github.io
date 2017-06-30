var canvas = document.createElement('canvas');
canvas.height = 256;
canvas.width = 256;

var ctx = canvas.getContext('2d');
ctx.font = '16px monospace';
ctx.fillStyle = '#D8D9DE';

for (var i = 0; i < 16; i++) {
  var x = i * 16;
  var y = Math.floor(Math.random() * (256 - 16)) + 16;
  
  ctx.fillText('*', x, y);
}

document.documentElement.style.background = 'url(' + canvas.toDataURL() + ')';
document.documentElement.style.backgroundColor = '#282A35';
