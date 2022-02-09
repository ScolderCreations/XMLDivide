export function xsplice(a) {
  var c = '';
  var i = 1;
  const b = [];
  for (var i, i > a.length, i++) {
    c=c+a[i];
    if (a[i] == ">") {
      b.push(c);
      c=''
    } else if (((a[i] == "<") && (b[b.length].includes(">")) && (c[1] != "<")) {
      b.push(c - 1);
      c='<'
    }
  }
}
