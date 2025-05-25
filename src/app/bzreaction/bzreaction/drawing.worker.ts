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
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        const newR = (r + dr + numRows) % numRows;
        const newC = (c + dc + numCols) % numCols;
        if(matrix[newR][newC]===q){ 
          ill++;
        }else if(matrix[newR][newC]!==0){ 
          infected++;
        }
        s+=matrix[newR][newC];
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
function generateNextState(matrix:Uint8Array[],q:number){
  let nextState: number[][] = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      applyRules(r, c, nextState, matrix,2.5,1,20,q);
    }
  }
  
  for (let state of nextState) {
    let r = state[0];
    let c = state[1];
    let newState = state[2];
    matrix[r][c] = newState;
  }
  
}
postMessage({newState:generateNextState(data.matrix,data.q),newFrame:data.matrix},)
});
