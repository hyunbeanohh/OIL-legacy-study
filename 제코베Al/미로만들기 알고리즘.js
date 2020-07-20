console.log('이동 전 지도');

function make_map(row,colum,charloc,block,moving){
  let map = [];


  for(let i =0 ; i<colum+2; i++){
    map.push(Array(row+2).fill(0));
  }

  for(let i in map){
    for(let j in map[0]){
      if(i == 0 || j == map[0].length-1 || j == 0 || i == map.length -1){
        map[i][j] = 2;
      }
    }
  }
  map[charloc[0]+1][charloc[1]+1] = 1;
  
  for(let i of block){
     if( map[i[0]+1][i[1]+1] !== 1){
      map[i[0]+1][i[1]+1] = 2;
     }else{
      map[i[0]+1][i[1]+1] = 1;
     }
  }
  for(let i of map){
    console.log(i);
  }

  let movingchar = [charloc[0]+1,charloc[1]+1];

  let x = movingchar[1];
  let y = movingchar[0];

  for(let i of moving){
    if(i === 2 && map[y+1][x] !== 2){
      y += 1;
    }
    else if(i === 4 && map[y][x+1] !== 2){
      x += 1;
    }
  }

  map[y][x] =1;

console.log('이동 후 지도');
  for(let i of map){
    console.log(i);
  }

  return map;
}

make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]],[2,2,2,4,4,4]);





