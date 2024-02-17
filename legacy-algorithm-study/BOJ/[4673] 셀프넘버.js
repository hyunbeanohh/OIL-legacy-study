function selfNum(a){
  let mok  = parseInt(a/10,10)
  let div = parseInt(a%10,10)
 
  a = mok+ div + a
  return a
}
let arr = new Array(10000)
arr.fill(false)

for(let i = 0 ; i<10000; i++){
    arr[selfNum(i)] = true
  }


for(let i = 0; i<10000; i++){
  if(!arr[i]){
    console.log(i)
  }
}
