import { Component, OnInit } from '@angular/core';
import { HelperFucntionsService } from '../../shared/helper-fucntions.service';

@Component({
  selector: 'app-bzreaction',
  templateUrl: './bzreaction.component.html',
  styleUrl: './bzreaction.component.scss'
})
export class BzreactionComponent implements OnInit{
constructor(private helperfn: HelperFucntionsService) {}
colorPallet: Record<number, string> = {
  0: '#FF0000',  1: '#FF7F00',  2: '#FFFF00',  3: '#7FFF00',  4: '#00FF00',
  5: '#00FF7F',  6: '#00FFFF',  7: '#007FFF',  8: '#0000FF',  9: '#7F00FF',
 10: '#FF00FF', 11: '#FF007F', 12: '#FF4040', 13: '#FF8040', 14: '#FFD700',
 15: '#BFFF00', 16: '#40FF00', 17: '#00FF40', 18: '#00FFBF', 19: '#40FFFF',
 20: '#4080FF', 21: '#0040FF', 22: '#8000FF', 23: '#BF00FF', 24: '#FF00BF',
 25: '#FF1493', 26: '#FF69B4', 27: '#FFA07A', 28: '#FA8072', 29: '#FF8C00',
 30: '#F0E68C', 31: '#ADFF2F', 32: '#32CD32', 33: '#00FA9A', 34: '#00CED1',
 35: '#1E90FF', 36: '#4169E1', 37: '#6A5ACD', 38: '#8A2BE2', 39: '#9932CC',
 40: '#C71585', 41: '#DB7093', 42: '#FFB6C1', 43: '#FFC0CB', 44: '#FFA500',
 45: '#FFDAB9', 46: '#EEE8AA', 47: '#98FB98', 48: '#90EE90', 49: '#66CDAA',
 50: '#48D1CC', 51: '#00BFFF', 52: '#87CEFA', 53: '#4682B4', 54: '#5F9EA0',
 55: '#7B68EE', 56: '#BA55D3', 57: '#9370DB', 58: '#DA70D6', 59: '#FF69B4',
 60: '#CD5C5C', 61: '#DC143C', 62: '#E9967A', 63: '#F4A460', 64: '#FFD700',
 65: '#BDB76B', 66: '#9ACD32', 67: '#3CB371', 68: '#20B2AA', 69: '#5F9EA0',
 70: '#1E90FF', 71: '#6495ED', 72: '#7B68EE', 73: '#8A2BE2', 74: '#9400D3',
 75: '#FF1493', 76: '#FF6347', 77: '#FF4500', 78: '#FFA07A', 79: '#FF8C69',
 80: '#DAA520', 81: '#9ACD32', 82: '#00FA9A', 83: '#20B2AA', 84: '#87CEEB',
 85: '#4682B4', 86: '#6A5ACD', 87: '#9932CC', 88: '#DDA0DD', 89: '#D87093',
 90: '#C71585', 91: '#FF1493', 92: '#E9967A', 93: '#F08080', 94: '#F5DEB3',
 95: '#E6E6FA', 96: '#D8BFD8', 97: '#FFE4E1', 98: '#FFEFD5', 99: '#FFDAB9'
};

  matrix:number[][] = [];
  generateMatrix(){ 
    for(let r = 0;r<80;r++){ 
      let row = []
      for(let c=0;c<150;c++){ 
        row.push(0);
      }
      this.genrateRandomPatterns(row);
      this.matrix.push(row);
    }
  }
  genrateRandomPatterns(row:number[]){  
    let count = Math.floor(Math.random()*150);
    while(count>=0){  
      let c = Math.floor(Math.random()*150);
      let randomState = Math.floor(Math.random()*100)
      row[c] = randomState;
      count--;
    }
  }
  applyRules(r:number,c:number,state:number[][],matrix:number[][],g:number,infected:number){ 
     let directons = [[1, 0],[-1, 0],[0, 1],[0, -1],[1, 1],[1, -1],[-1, 1],[-1, -1]];
     let infectedAndIll = []
     let allNb = []
        if(matrix[r][c]===infected
        ){ 
          state.push([r,c,0])
          return;
        }

     for(let dir of directons){ 
        let dr = dir[0];
        let dc = dir[1];
        if(Math.min(r+dr,c+dc)<0 || r+dr === matrix.length || c+dc===matrix[0].length){ 
          continue;
        }
        if(matrix[r+dr][c+dc]>0 && matrix[r+dr][c+dc]<=infected){  
          infectedAndIll.push(matrix[r+dr][c+dc]);
        }
        allNb.push(matrix[r+dr][c+dc]);
     }
     
     if(matrix[r][c]>0&&matrix[r][c]<infected){  
        if(infectedAndIll.length==0){    
           state.push([r, c, Math.max(0, matrix[r][c] - 1)]);
           return;
        }
      let sum = 0;
      for(let n of allNb){  
        sum+=n;
      }
      let nextState = Math.floor(sum/allNb.length+g);
      if(nextState>infected){  
        state.push([r,c,infected]);
      }else{  
        state.push([r,c,nextState])
      }
     }else if(matrix[r][c]===0){  
        let sum = 0;
        for(let n of infectedAndIll){ 
          sum+=n;
        }
        if(infectedAndIll.length!==0){  
          let nextState = Math.floor(sum/infectedAndIll.length);
            state.push([r,c,nextState])
        }
     }
  }
generateNextState() {
    let nextState: number[][] = [];
  for (let r = 0; r < this.matrix.length; r++) {
    for (let c = 0; c < this.matrix[0].length; c++) {
      this.applyRules(r, c, nextState, this.matrix,1,99);
    }
  }
  
  for (let state of nextState) {
    let r = state[0];
    let c = state[1];
    let newState = state[2];
    this.matrix[r][c] = newState;
  }
}
  getColor(r:number,c:number){  
    return this.matrix[r][c];
  }
  ngOnInit(): void {
      this.generateMatrix();
      setInterval(()=>{ 
        this.generateNextState()
      },20)
  }
}
