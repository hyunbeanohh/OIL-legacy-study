let alphabet = [];

for(let i=65; i<91; i++){
  alphabet.push(String.fromCharCode(i));
}
console.log(alphabet);

function randomFunc(a){
  let randomArr = [];
  while (randomArr.length !== 8){
    let random = a[Math.floor(Math.random()*a.length)];
    if(!randomArr.includes(random)){
      randomArr.push(random);
    }
  }
  let medicine = randomArr.join('');
  
  return medicine;
}

let total_medicine = [];

for(let i =0; i<100; i++){
  let meomory = randomFunc(alphabet);
  if(!total_medicine.includes(meomory)){
    total_medicine.push(meomory);
  }
}

const user_input = 'ABCDEFGH 4'.split(' ');
let result = [];

for(let i of total_medicine){
  let Setuser = new Set(user_input[0]);
  let Settotal = new Set(i);
  let intersection = new Set([...Setuser].filter(x=> Settotal.has(x)));
  if(intersection.size === parseInt(user_input[1],10)){
    result.push(i);
  }
}

console.log('result',result);
