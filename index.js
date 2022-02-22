export function divide(a){
  var b = a.split(">");
  var d = ''
  var c = Array()
  b.forEach((h) => {
    if (h.includes("<")) {
      d = h+'>'
    } else {
      d = String(h)
    }
    c.push(d)
  });
  return c
}
