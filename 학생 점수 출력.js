let student_score = [];
let class_score = [];
let total_socre = [];

for(let i = 0; i<7; i++){
  class_score = []; // 배열 초기화 
  for(let j=0; j<30; j++){
    student_score = []; // 배열 초기화를 안하면 150개의 배열이 생성 됨.
    for(let k =0; k<5; k++){
      student_score.push(Math.floor(Math.random()*100+1));  
    }
    class_score.push(student_score);
  }
  total_socre.push(class_score);
}

console.log(class_score);
let total_average = [];
let c_average = [];
let s_average = 0;
let s_sum = 0;
let c_sum = 0;
let student_one = 0;
let firststudent = 0;

for(let i of total_socre){
 for(let j of i){
    s_sum = j.reduce((a,b)=> a+b);
    s_average = s_sum / 5;
    c_average.push(s_average);
    if(firststudent < s_average){
      firststudent = s_average;
    }
 }
 firststudent = 0;
 console.log(c_average);
 total_average.push(c_average.reduce((a,b)=> a+b/30));
 c_average = [];
}
console.log(total_average);
console.log(total_average.reduce((a,b)=> a+b/7));
