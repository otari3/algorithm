/// <reference lib="webworker" />

addEventListener('message', (event: MessageEvent<{matrix:Uint8Array[],colorPalette:Record<number, string>,q:number}>) => {
  
  const data = event.data;
function applyRules(r:number,c:number,state:number[][],matrix:Uint8Array[],k1:number,k2:number,g:number,q:number){ 
     let directons = [[1, 0],[-1, 0],[0, 1],[0, -1],[1, 1],[1, -1],[-1, 1],[-1, -1]];
     let ill = 0;
     let infected = 0;
     let s = matrix[r][c];
      for(let dir of directons){  
        let dr = dir[0];
        let dc = dir[1];
        if(Math.min(r+dr,c+dc)<0 || r+dr===matrix.length || c+dc===matrix[0].length){ 
          continue;
        }
        if(matrix[r+dr][c+dc]===q){ 
          ill++;
        }else if(matrix[r+dr][c+dc]!==0){ 
          infected++;
        }
        s+=matrix[r+dr][c+dc];
      }
      if(matrix[r][c]===0){ 
        let k1State = Math.floor(infected/k1);
        let k2State = Math.floor(ill/k2);
        state.push([r,c,Math.min(k1State+k2State,q)]);
      }else if(matrix[r][c]===q){ 
        state.push([r,c,0]);
      }else{  
        let newState = Math.floor(s/(ill+infected+1))+g;
        state.push([r,c,Math.min(newState,q)])
      }
  }
  function addingColor(hashMap:Record<string, Uint16Array[]>,state:number,r:number,c:number,colorPalette:Record<number, string>){  
    let newColor = colorPalette[state];
    if((newColor in hashMap)){  
      hashMap[newColor].push(new Uint16Array([r,c]))
    }else{  
      hashMap[newColor] =  [new Uint16Array([r,c])];
    }
} 

function generateNextState(matrix:Uint8Array[],q:number):Record<string, Uint16Array[]> {
  let nextState: number[][] = [];
  const colorBuckets:Record<string, Uint16Array[]> = {}
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      applyRules(r, c, nextState, matrix,2,3,70,q);
    }
  }
  
  for (let state of nextState) {
    let r = state[0];
    let c = state[1];
    let newState = state[2];
    addingColor(colorBuckets,newState,r,c,event.data.colorPalette);
    matrix[r][c] = newState;
  }
  
  return colorBuckets;
}
postMessage({newState:generateNextState(data.matrix,data.q),newFrame:data.matrix},)
});
