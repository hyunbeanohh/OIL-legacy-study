let n = parseInt(prompt('숫자를 입력해주세요'),10)
let start = 1
let room = 1
let plus = 6

if (n === 1){
  console.log(n)
}else{
  while(true){
    start += plus
    room += 1
    if(n<=plus){
      console.log(room)
      break
    }
    plus += 6
  }
}
