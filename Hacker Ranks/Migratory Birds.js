'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    const frequency = arr.reduce((acc,value)=>{
        if(acc[value]){
            acc[value]++
        }else{
            acc[value] = 1
        }
        return acc
    },{})
    const highest = Math.max(...Object.values(frequency))
    const type = Object.keys(frequency)
    let commonmost = []
    type.forEach(type=>{
        if(frequency[type]===highest){
            commonmost.push(type)
        }
    })
    return Math.min(...commonmost)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
