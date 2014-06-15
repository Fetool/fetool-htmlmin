
var fs = require('fs');
var pth = require('path');

var htmlMin = module.exports = new HtmlMin;

function HtmlMin () {}

// 
HtmlMin.prototype.minify = function (source) {
  var result = '', fstat = null, content = '';
  var commentReg = /<!--[\s\S]*-->/g,
    minHtmlReg = /\s*\r\n\s*/g;
  source && (source = getAbsoulutePath(source));

  fstat = fs.statSync(source);
  if (fstat.isFile()) {
    content = fs.readFileSync(source, 'utf-8');
    result = content.replace(commentReg, '').replace(minHtmlReg, '');
  }

  return result;
};

// 
HtmlMin.prototype.beautify = function (source) {
  var result = '';

  // var htmlHeadReg = /<\s*(\S+)(\s[^>]*)?\s*>[\s\S]*<\s*\/\1\s*>/ig;
  var htmlTailReg;
  console.log(source.replace(htmlHeadReg, ''));
  // console.log('\r\n  ' + source.match(htmlHeadReg)[0] + '\r\n');
};

// 
function getAbsoulutePath (source) {
  return source && pth.normalize(process.cwd() + pth.sep + source);
}
