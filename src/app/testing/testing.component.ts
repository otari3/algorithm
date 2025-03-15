import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Arrows, Nodes } from '../shared/types';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent implements OnInit, AfterViewInit {
  testNodes: number[] = [1, 2, 3, 4, 5, 6, 7];
  width: number = 600;
  height: number = 100;
  nodes: Nodes[] = [];
  arrows: Arrows[] = [];

  ngOnInit(): void {
    let N = this.testNodes.length;
    let W = this.width;

    for (let i = 0; i < N; i++) {
      let node: Nodes = {
        x: (i / (N - 1)) * W,
        y: 0,
        val: this.testNodes[i],
        width: 0,
        height: this.height,
        nodePx: 15,
      };
      this.nodes.push(node);
    }
    for (let i = 0; i < N - 1; i++) {
      let arrow: Arrows = {
        x1: this.nodes[i].x,
        y1: this.nodes[i].y,
        x2: this.nodes[i + 1].x,
        y2: 0,
        width: 0,
        height: this.height,
      };
      this.arrows.push(arrow);
    }
  }
  ngAfterViewInit(): void {
    const myDiv = document.querySelector('#myDiv');
    const myNode = document.querySelector('#node4');
    console.log(myDiv?.getBoundingClientRect());
    console.log(myNode?.getBoundingClientRect());
    const lastX: number =
      (myDiv?.getBoundingClientRect().x ?? 0) -
      (myNode?.getBoundingClientRect().x ?? 0);
    let lastArrow: Arrows = {
      x1: this.nodes[this.nodes.length - 1].x,
      y1: this.nodes[this.nodes.length - 1].y,
      x2: 700,
      y2: 0,
      width: 0,
      height: this.height,
    };
    this.arrows.push(lastArrow);
  }
}
