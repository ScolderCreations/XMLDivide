export function divide(a){
  var b = [];
  var c = a.split(">")
  var d = ''
  b.forEach((h) => {
    if (/(^/w<.)||(^<.)/.test(h)) {
      d = h+'>'
    } else {
      d = String(h)
    }
    b.push(d)
  }
  return b
}
