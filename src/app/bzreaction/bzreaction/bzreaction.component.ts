import { Component, OnInit } from '@angular/core';
import { HelperFucntionsService } from '../../shared/helper-fucntions.service';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-bzreaction',
  templateUrl: './bzreaction.component.html',
  styleUrl: './bzreaction.component.scss'
})
export class BzreactionComponent implements OnInit{
constructor(private helperfn: HelperFucntionsService) {}

colorPalette: Record<number, string> = {
  0: '#f23d3d',
  1: '#f2423d',
  2: '#f2473d',
  3: '#f24d3d',
  4: '#f2523d',
  5: '#f2583d',
  6: '#f25d3d',
  7: '#f2633d',
  8: '#f2683d',
  9: '#f26e3d',
  10: '#f2733d',
  11: '#f2793d',
  12: '#f27e3d',
  13: '#f2833d',
  14: '#f2893d',
  15: '#f28e3d',
  16: '#f2943d',
  17: '#f2993d',
  18: '#f29f3d',
  19: '#f2a43d',
  20: '#f2aa3d',
  21: '#f2af3d',
  22: '#f2b43d',
  23: '#f2ba3d',
  24: '#f2bf3d',
  25: '#f2c53d',
  26: '#f2ca3d',
  27: '#f2d03d',
  28: '#f2d53d',
  29: '#f2db3d',
  30: '#f2e03d',
  31: '#f2e63d',
  32: '#f2eb3d',
  33: '#f2f03d',
  34: '#eff23d',
  35: '#e9f23d',
  36: '#e4f23d',
  37: '#def23d',
  38: '#d9f23d',
  39: '#d3f23d',
  40: '#cef23d',
  41: '#c8f23d',
  42: '#c3f23d',
  43: '#bef23d',
  44: '#b8f23d',
  45: '#b3f23d',
  46: '#adf23d',
  47: '#a8f23d',
  48: '#a2f23d',
  49: '#9df23d',
  50: '#97f23d',
  51: '#92f23d',
  52: '#8df23d',
  53: '#87f23d',
  54: '#82f23d',
  55: '#7cf23d',
  56: '#77f23d',
  57: '#71f23d',
  58: '#6cf23d',
  59: '#66f23d',
  60: '#61f23d',
  61: '#5bf23d',
  62: '#56f23d',
  63: '#51f23d',
  64: '#4bf23d',
  65: '#46f23d',
  66: '#40f23d',
  67: '#3df23e',
  68: '#3df244',
  69: '#3df249',
  70: '#3df24f',
  71: '#3df254',
  72: '#3df25a',
  73: '#3df25f',
  74: '#3df265',
  75: '#3df26a',
  76: '#3df26f',
  77: '#3df275',
  78: '#3df27a',
  79: '#3df280',
  80: '#3df285',
  81: '#3df28b',
  82: '#3df290',
  83: '#3df296',
  84: '#3df29b',
  85: '#3df2a0',
  86: '#3df2a6',
  87: '#3df2ab',
  88: '#3df2b1',
  89: '#3df2b6',
  90: '#3df2bc',
  91: '#3df2c1',
  92: '#3df2c7',
  93: '#3df2cc',
  94: '#3df2d2',
  95: '#3df2d7',
  96: '#3df2dc',
  97: '#3df2e2',
  98: '#3df2e7',
  99: '#3df2ed',
  100: '#3df2f2',
  101: '#3dedf2',
  102: '#3de7f2',
  103: '#3de2f2',
  104: '#3ddcf2',
  105: '#3dd7f2',
  106: '#3dd2f2',
  107: '#3dccf2',
  108: '#3dc7f2',
  109: '#3dc1f2',
  110: '#3dbcf2',
  111: '#3db6f2',
  112: '#3db1f2',
  113: '#3dabf2',
  114: '#3da6f2',
  115: '#3da0f2',
  116: '#3d9bf2',
  117: '#3d96f2',
  118: '#3d90f2',
  119: '#3d8bf2',
  120: '#3d85f2',
  121: '#3d80f2',
  122: '#3d7af2',
  123: '#3d75f2',
  124: '#3d6ff2',
  125: '#3d6af2',
  126: '#3d65f2',
  127: '#3d5ff2',
  128: '#3d5af2',
  129: '#3d54f2',
  130: '#3d4ff2',
  131: '#3d49f2',
  132: '#3d44f2',
  133: '#3d3ef2',
  134: '#403df2',
  135: '#463df2',
  136: '#4b3df2',
  137: '#513df2',
  138: '#563df2',
  139: '#5b3df2',
  140: '#613df2',
  141: '#663df2',
  142: '#6c3df2',
  143: '#713df2',
  144: '#773df2',
  145: '#7c3df2',
  146: '#823df2',
  147: '#873df2',
  148: '#8d3df2',
  149: '#923df2',
  150: '#973df2',
  151: '#9d3df2',
  152: '#a23df2',
  153: '#a83df2',
  154: '#ad3df2',
  155: '#b33df2',
  156: '#b83df2',
  157: '#be3df2',
  158: '#c33df2',
  159: '#c83df2',
  160: '#ce3df2',
  161: '#d33df2',
  162: '#d93df2',
  163: '#de3df2',
  164: '#e43df2',
  165: '#e93df2',
  166: '#ef3df2',
  167: '#f23df0',
  168: '#f23deb',
  169: '#f23de6',
  170: '#f23de0',
  171: '#f23ddb',
  172: '#f23dd5',
  173: '#f23dd0',
  174: '#f23dca',
  175: '#f23dc5',
  176: '#f23dbf',
  177: '#f23dba',
  178: '#f23db4',
  179: '#f23daf',
  180: '#f23daa',
  181: '#f23da4',
  182: '#f23d9f',
  183: '#f23d99',
  184: '#f23d94',
  185: '#f23d8e',
  186: '#f23d89',
  187: '#f23d83',
  188: '#f23d7e',
  189: '#f23d79',
  190: '#f23d73',
  191: '#f23d6e',
  192: '#f23d68',
  193: '#f23d63',
  194: '#f23d5d',
  195: '#f23d58',
  196: '#f23d52',
  197: '#f23d4d',
  198: '#f23d47',
  199: '#f23d42',
};

  matrix:number[][] = [];
  gridSize:number = 512; 
  generateMatrix(){ 
    for(let r = 0;r<512;r++){ 
      let row = []
      for(let c=0;c<512;c++){ 
        row.push(0);
      }
      this.genrateRandomPatterns(row,512);
      this.matrix.push(row);
    }
  }
  genrateRandomPatterns(row:number[],g:number){  
    let count = Math.floor(Math.random()*g);
    while(count>=0){  
      let c = Math.floor(Math.random()*g);
      let randomState = Math.floor(Math.random()*199)
      let flip =  Math.floor(Math.random()*2);
      row[c] = randomState;
      count--;
    }
  }
  applyRules(r:number,c:number,state:number[][],matrix:number[][],k1:number,k2:number,g:number,q:number){ 
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
generateNextState() {
    let nextState: number[][] = [];
  for (let r = 0; r < this.matrix.length; r++) {
    for (let c = 0; c < this.matrix[0].length; c++) {
      this.applyRules(r, c, nextState, this.matrix,2,3,70,198);
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
  }
}
