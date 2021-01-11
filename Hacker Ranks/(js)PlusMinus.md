```
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let n = arr.length
    let cnt = 0
    let answer = []
    
    for(let i = 0 ; i<n; i++){
        if(arr[i]>0){
            cnt++
        }
    }
    let div = cnt / n
    let fix = div.toFixed(6)
    answer.push(fix)
    console.log(answer[0])
    cnt = 0
    
    for(let i = 0 ; i<n; i++){
        if(arr[i]<0){
            cnt++
        }
    }
    div = cnt / n
    fix = div.toFixed(6)
    answer.push(fix)
    console.log(answer[1])
    cnt = 0
    
    for(let i = 0 ; i<n; i++){
        if(arr[i]===0){
            cnt++
        }
    }
    div = cnt / n
    fix = div.toFixed(6)
    answer.push(fix)
    cnt = 0   
    console.log(answer[2])

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
```
