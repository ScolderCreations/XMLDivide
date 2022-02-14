export function divide(a){
  var b = a.split(">");
  var d = ''
  b.forEach((h) => {
    if ((/^\s*<.*/.test(h)) && (!/$>\s*/.test(h))) {
      d = h+'>'
    } else {
      d = String(h)
    }
    b.push(d)
  });
  return b
}
