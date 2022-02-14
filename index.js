export function divide(a){
  var b = a.split(">");
  var d = ''
  b.forEach((h) => {
    if (h.startsWith("<")) {
      d = h+'>'
    } else {
      d = String(h)
    }
    b.push(d)
  });
  return b
}
