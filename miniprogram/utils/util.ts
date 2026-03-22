export  function x(x1:string){
  let y = 0;
  for(let i = 0;i < x1.length;i++){
    if(x1[i] === '1')  y++
    else  break;
  }
  return y;
}