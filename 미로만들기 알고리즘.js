

function make_map(row,colum,charloc,block){
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
  return map;
}

make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);