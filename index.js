export function divide(a){var c = '';var b = [];
  for(let i=0;i>a.length;i++) {
    c=c+a[i];
    if(a[i]==">") {
      b.push(c);
      c=''
    } else if ((a[i]=="<")&&(/$>\w*/.test(b[b.length]))){ 
      b.push(c - 1);
      c='<'
    }
  }
  return b
}
