import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-gameoflife',
  templateUrl: './gameoflife.component.html',
  styleUrl: './gameoflife.component.scss',
})
export class GameoflifeComponent implements OnInit,OnDestroy {
  matrix: number[][] = [];
  current!:Subscription;
  isPlaying:boolean = false;
  canDraw:boolean = false;
  mouseIsDown:boolean = false;
  canErase:boolean = false;

  generetMatrix() {
    for (let i = 0; i < 50; i++) {
      let row = [];
      for (let j = 0; j < 118; j++) {
        row.push(0);
      }
      this.matrix.push(row);
    }
  }
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  generetRandomPatterns(r: number, matrix: number[][]) {
    let count = this.getRandomInt(118);
    while (count >= 0) {
      let c = this.getRandomInt(118);
      matrix[r][c] = 1;
      count--;
    }
  }
  applyGameOfLifeRules(r: number, c: number, matrix: number[][],aliveSet:number[][],deadSet:number[][]) {
    let directons = [[1, 0],[-1, 0],[0, 1],[0, -1],[1, 1],[1, -1],[-1, 1],[-1, -1]];
    let neighbours = 0;
    for(let dir of directons){  
      let nr = dir[0];
      let nc = dir[1];
      if(Math.min(r+nr,c+nc)<0 || r+nr == matrix.length || c+nc==matrix[0].length){ 
        continue;
      }else if(matrix[r+nr][c+nc] == 1){  
        neighbours++;
      }
    }
    if(matrix[r][c]==1){  
      if(neighbours<2 || neighbours>3){ 
        deadSet.push([r,c]);
      }
    }else if(neighbours==3){  
      aliveSet.push([r,c]);
    }
  }

  generetBoard(){ 
    let aliveSet:number[][] = [];
    let deadSet:number[][] = [];
    for(let r = 0;r<this.matrix.length;r++){  
      for(let c = 0;c<this.matrix[0].length;c++){ 
        this.applyGameOfLifeRules(r,c,this.matrix,aliveSet,deadSet);
      }
    }
    for(let i = 0;i<aliveSet.length;i++){ 
       let r = aliveSet[i][0];
       let c = aliveSet[i][1];
       this.matrix[r][c] = 1;
    }
     for(let i = 0;i<deadSet.length;i++){ 
       let r = deadSet[i][0];
       let c = deadSet[i][1];
       this.matrix[r][c] = 0;
    }
  }

  clear(){  
    for(let r = 0;r<this.matrix.length;r++){  
      for(let c = 0;c<this.matrix[0].length;c++){ 
        this.matrix[r][c] = 0;
      }
    }
  }

  generetRandomMatrix(){  
    for(let r=0;r<this.matrix.length;r++){  
      this.generetRandomPatterns(r,this.matrix);
    }
  }

  onRandom(){ 
    this.clear();
    this.generetRandomMatrix();
    this.isPlaying = false;
    if(this.current){  
      this.current.unsubscribe()
   }
  }
  
  onPlay(){ 
    if(this.isPlaying){ 
      this.onPause()
      return;
    }
    this.current = interval(75).subscribe(()=>{  
      this.generetBoard()
    })
    this.isPlaying = true;
    this.canDraw = false;
    this.canErase = false;
  }
  onMouseDown(r:number,c:number){  
    if(this.canDraw){  
      this.matrix[r][c] =1;
      this.mouseIsDown = true;
    }else if(this.canErase){  
      this.matrix[r][c] =0;
      this.mouseIsDown = true;
    }
  }
  onMouseUp(){  
    this.mouseIsDown = false;
  }
  onHover(r:number,c:number){  
    if(this.mouseIsDown && this.canDraw){ 
       this.matrix[r][c] = 1;
    }else if(this.mouseIsDown && this.canErase){  
      this.matrix[r][c] = 0;
    }
  }
  onClear(){  
    if(this.current){ 
      this.current.unsubscribe()
    }
    this.isPlaying = false;
    this.clear()
  }
  onPause(){  
      this.current.unsubscribe();
      this.isPlaying = false;
  }
  onDraw(){ 
    if(this.isPlaying){ 
      this.onPause();
    }
    this.canDraw = true;
    this.canErase = false;
  }
  onErase(){ 
    if(this.isPlaying){ 
      this.onPause()
    }
    this.canDraw = false;
    this.mouseIsDown = false;
    this.canErase = true;
  }

  ngOnInit(): void {
    this.generetMatrix();
  }
  ngOnDestroy(): void {
      if(this.current){ 
        this.current.unsubscribe();
      }
  }
}
