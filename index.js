export function divide(a){var c = '';const b = [];
  for(let i=0;i>a.length;i++) {
    c=c+a[i];
    if(a[i]==">") {
      b.push(c);
      c=''
    } else if (((a[i]=="<")&&(b[b.length].includes(">"))&&(c[1]!="<"))){
      b.push(c - 1);
      c='<'
    }
  }
  return b
}
