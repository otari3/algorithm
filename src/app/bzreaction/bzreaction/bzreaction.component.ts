import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { HelperFucntionsService } from '../../shared/helper-fucntions.service';
import { RouteConfigLoadEnd } from '@angular/router';
import * as PIXI from 'pixi.js'
import { ɵnormalizeQueryParams } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-bzreaction',
  templateUrl: './bzreaction.component.html',
  styleUrl: './bzreaction.component.scss'
})
export class BzreactionComponent implements OnInit,AfterViewInit,OnDestroy{
constructor(private helperfn: HelperFucntionsService) {}

colorPalette: Record<number, string> = {
  0: "#e62e2e",
  1: "#e6332e",
  2: "#e6392e",
  3: "#e63e2e",
  4: "#e6442e",
  5: "#e6492e",
  6: "#e64f2e",
  7: "#e6542e",
  8: "#e65a2e",
  9: "#e65f2e",
  10: "#e6652e",
  11: "#e66a2e",
  12: "#e6702e",
  13: "#e6762e",
  14: "#e67b2e",
  15: "#e6812e",
  16: "#e6862e",
  17: "#e68c2e",
  18: "#e6912e",
  19: "#e6972e",
  20: "#e69c2e",
  21: "#e6a22e",
  22: "#e6a72e",
  23: "#e6ad2e",
  24: "#e6b22e",
  25: "#e6b82e",
  26: "#e6bd2e",
  27: "#e6c32e",
  28: "#e6c82e",
  29: "#e6ce2e",
  30: "#e6d32e",
  31: "#e6d92e",
  32: "#e6de2e",
  33: "#e6e42e",
  34: "#e2e62e",
  35: "#dce62e",
  36: "#d7e62e",
  37: "#d1e62e",
  38: "#cce62e",
  39: "#c6e62e",
  40: "#c1e62e",
  41: "#bbe62e",
  42: "#b6e62e",
  43: "#b0e62e",
  44: "#abe62e",
  45: "#a5e62e",
  46: "#a0e62e",
  47: "#9ae62e",
  48: "#95e62e",
  49: "#8fe62e",
  50: "#8ae62e",
  51: "#84e62e",
  52: "#7fe62e",
  53: "#79e62e",
  54: "#74e62e",
  55: "#6ee62e",
  56: "#69e62e",
  57: "#63e62e",
  58: "#5ee62e",
  59: "#58e62e",
  60: "#53e62e",
  61: "#4de62e",
  62: "#48e62e",
  63: "#42e62e",
  64: "#3de62e",
  65: "#37e62e",
  66: "#32e62e",
  67: "#2ee630",
  68: "#2ee635",
  69: "#2ee63b",
  70: "#2ee640",
  71: "#2ee646",
  72: "#2ee64b",
  73: "#2ee651",
  74: "#2ee656",
  75: "#2ee65c",
  76: "#2ee661",
  77: "#2ee667",
  78: "#2ee66c",
  79: "#2ee672",
  80: "#2ee677",
  81: "#2ee67d",
  82: "#2ee682",
  83: "#2ee688",
  84: "#2ee68d",
  85: "#2ee693",
  86: "#2ee698",
  87: "#2ee69e",
  88: "#2ee6a3",
  89: "#2ee6a9",
  90: "#2ee6ae",
  91: "#2ee6b4",
  92: "#2ee6b9",
  93: "#2ee6bf",
  94: "#2ee6c4",
  95: "#2ee6ca",
  96: "#2ee6cf",
  97: "#2ee6d5",
  98: "#2ee6da",
  99: "#2ee6e0",
  100: "#2ee6e6",
  101: "#2ee0e6",
  102: "#2edae6",
  103: "#2ed5e6",
  104: "#2ecfe6",
  105: "#2ecae6",
  106: "#2ec4e6",
  107: "#2ebfe6",
  108: "#2eb9e6",
  109: "#2eb4e6",
  110: "#2eaee6",
  111: "#2ea9e6",
  112: "#2ea3e6",
  113: "#2e9ee6",
  114: "#2e98e6",
  115: "#2e93e6",
  116: "#2e8de6",
  117: "#2e88e6",
  118: "#2e82e6",
  119: "#2e7de6",
  120: "#2e77e6",
  121: "#2e72e6",
  122: "#2e6ce6",
  123: "#2e67e6",
  124: "#2e61e6",
  125: "#2e5ce6",
  126: "#2e56e6",
  127: "#2e51e6",
  128: "#2e4be6",
  129: "#2e46e6",
  130: "#2e40e6",
  131: "#2e3be6",
  132: "#2e35e6",
  133: "#2e30e6",
  134: "#322ee6",
  135: "#372ee6",
  136: "#3d2ee6",
  137: "#422ee6",
  138: "#482ee6",
  139: "#4d2ee6",
  140: "#532ee6",
  141: "#582ee6",
  142: "#5e2ee6",
  143: "#632ee6",
  144: "#692ee6",
  145: "#6e2ee6",
  146: "#742ee6",
  147: "#792ee6",
  148: "#7f2ee6",
  149: "#842ee6",
  150: "#8a2ee6",
  151: "#8f2ee6",
  152: "#952ee6",
  153: "#9a2ee6",
  154: "#a02ee6",
  155: "#a52ee6",
  156: "#ab2ee6",
  157: "#b02ee6",
  158: "#b62ee6",
  159: "#bb2ee6",
  160: "#c12ee6",
  161: "#c62ee6",
  162: "#cc2ee6",
  163: "#d12ee6",
  164: "#d72ee6",
  165: "#dc2ee6",
  166: "#e22ee6",
  167: "#e62ee4",
  168: "#e62ede",
  169: "#e62ed9",
  170: "#e62ed3",
  171: "#e62ece",
  172: "#e62ec8",
  173: "#e62ec3",
  174: "#e62ebd",
  175: "#e62eb8",
  176: "#e62eb2",
  177: "#e62ead",
  178: "#e62ea7",
  179: "#e62ea2",
  180: "#e62e9c",
  181: "#e62e97",
  182: "#e62e91",
  183: "#e62e8c",
  184: "#e62e86",
  185: "#e62e81",
  186: "#e62e7b",
  187: "#e62e76",
  188: "#e62e70",
  189: "#e62e6a",
  190: "#e62e65",
  191: "#e62e5f",
  192: "#e62e5a",
  193: "#e62e54",
  194: "#e62e4f",
  195: "#e62e49",
  196: "#e62e44",
  197: "#e62e3e",
  198: "#e62e39",
  199: "#e62e33",
};

  matrix: Uint8Array[] = [];
  rowSize:number = 528;
  colSize:number = 528;
   app = new PIXI.Application()
   currentlyWorking = false;
   playing!:number
   pixelSize = 1
   q  = 199;
   worker!:Worker;
   frames:{newState:Record<string, Uint16Array[]>,newFrame:Uint8Array[],change:number}[] = [];
   ctx!:CanvasRenderingContext2D
   canvas!:HTMLCanvasElement
   texture!:PIXI.Texture<PIXI.TextureSource<any>>
   sprite!:PIXI.Sprite;
   basetTexture!:PIXI.TextureSource<any>
  generateMatrix(){ 
    for(let r = 0;r<this.rowSize;r++){ 
      let row = new Uint8Array(this.colSize)
      this.genrateRandomPatterns(row,this.colSize);
      this.matrix.push(row);
    }
  }
  genrateRandomPatterns(row:Uint8Array,g:number){  
    let count = Math.floor(Math.random()*g);
    while(count>=0){  
      let c = Math.floor(Math.random()*g);
      let randomState = Math.floor(Math.random()*this.q)
      let flip =  Math.floor(Math.random()*2);
      row[c] = randomState;
      count--;
    }
  }


  async startApp(main:any){ 
    await this.app.init({background: '#1099bb', width: this.colSize * this.pixelSize, height: this.rowSize * this.pixelSize,})
    if(main){ 
       main.appendChild(this.app.canvas as any);
       this.drawGrid(this.app.stage);
    }
  }
  drawGrid(stage: PIXI.Container){ 
     this.canvas = document.createElement('canvas');
    this.canvas.width = this.colSize;
    this.canvas.height = this.rowSize;
    this.ctx = this.canvas.getContext('2d')!;
    const imgData = this.ctx.createImageData(this.colSize, this.rowSize);
    const data = imgData.data;
    for(let r = 0;r<this.matrix.length;r++){  
      for(let c=0;c<this.matrix[0].length;c++){ 
        const idx = (r * this.colSize + c) * 4;
        const [rVal, gVal, bVal] = this.hexToRGB(this.colorPalette[this.matrix[r][c]])
        data[idx] = rVal;
        data[idx + 1] = gVal;
        data[idx + 2] = bVal;
        data[idx + 3] = 255;
      }
    }
    this.ctx.putImageData(imgData, 0, 0);
    this.basetTexture=PIXI.TextureSource.from(this.canvas)
    this.texture = PIXI.Texture.from(this.basetTexture);
    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.scale.set(this.pixelSize)
    stage.addChild(this.sprite);     
  }
  drawChangedCells() {
    this.currentlyWorking = true;
    this.worker.postMessage({matrix:this.matrix,colorPalette:this.colorPalette,q:this.q})
      const imgData = this.ctx.createImageData(this.colSize, this.rowSize);
      const data = imgData.data;
      for(let r = 0;r<this.matrix.length;r++){  
        for(let c=0;c<this.matrix[0].length;c++){ 
          const idx = (r * this.colSize + c) * 4;
          const [rVal, gVal, bVal] = this.hexToRGB(this.colorPalette[this.matrix[r][c]])
          data[idx] = rVal;
          data[idx + 1] = gVal;
          data[idx + 2] = bVal;
          data[idx + 3] = 255;
        }
      }
       this.ctx.putImageData(imgData, 0, 0);
    
  this.basetTexture.update()
  this.currentlyWorking = false;
}
  hexToRGB(hex:String):[number, number, number]{   
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return [r,g,b];
  }
  rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}
 groupingColors(){  
  let currentColor = this.hexToRGB(this.colorPalette[0]);
  let newColorPalet:Record<number, string> = {}
  newColorPalet[0] = this.rgbToHex(currentColor[0],currentColor[1],currentColor[2]);
  for(let i = 1;i<=this.q;i++){ 
      let newColor = this.hexToRGB(this.colorPalette[i]);
      let distance = this.colorDistance(currentColor,newColor);
      if(distance<=100){  
        newColorPalet[i] = this.rgbToHex(currentColor[0],currentColor[1],currentColor[2]);
      }else{  
        newColorPalet[i] = this.rgbToHex(newColor[0],newColor[1],newColor[2]);
        currentColor = newColor;
      }
  }
  this.colorPalette = newColorPalet;
 }
 colorDistance(c1: [number, number, number], c2: [number, number, number]): number {
  return Math.sqrt(
    (c1[0] - c2[0]) ** 2 +
    (c1[1] - c2[1]) ** 2 +
    (c1[2] - c2[2]) ** 2
  );
}
  ngOnInit(): void {
      this.generateMatrix();
      this.groupingColors();
      this.worker = new Worker(new URL('./drawing.worker', import.meta.url),  { type: 'module' })
      this.worker.onmessage = (event: MessageEvent<{newState:Record<string, Uint16Array[]>,newFrame:Uint8Array[],change:number}>) => {
            if(this.frames.length<2){ 
                this.frames.push({newState:event.data.newState,newFrame:event.data.newFrame,change:event.data.change});
            }
      };
  }
  ngAfterViewInit(): void {
     const mainContainer = document.querySelector('main.size');
     if(mainContainer){
      this.startApp(mainContainer);
     }
      this.worker.postMessage({matrix:this.matrix,colorPalette:this.colorPalette,q:this.q})
          const loop = () => {
          if (!this.currentlyWorking && this.frames.length === 1) {
            let nextFrame = this.frames[0].newFrame;
            this.frames.pop();
            this.matrix = nextFrame;
            this.drawChangedCells();
      }
     this.playing = requestAnimationFrame(loop);
    };
     this.playing = requestAnimationFrame(loop);
  }
  ngOnDestroy(): void {
      if(this.playing){ 
        cancelAnimationFrame(this.playing);
      }
  }
}
