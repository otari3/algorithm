import { Component, OnInit } from '@angular/core';
import { Arrows, Nodes } from '../shared/types';

@Component({
  selector: 'app-list-cycle-detection',
  templateUrl: './list-cycle-detection.component.html',
  styleUrl: './list-cycle-detection.component.scss',
})
export class ListCycleDetectionComponent implements OnInit {
  width: number = 500;
  height: number = 500;
  widthFront = 600;
  heigthFront = 100;
  nodesToVis: Nodes[] = [];

  frontNodes: Nodes[] = [];

  arrowsToVis: Arrows[] = [];

  frontArrows: Arrows[] = [];

  nodes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14];

  calcPositonOfNodes(width: number, height: number) {
    const radius = Math.min(width, height) / 2 - 50;

    const circleNodes = this.nodes.slice(5, this.nodes.length);
    const angleStep = (2 * Math.PI) / circleNodes.length;

    this.nodesToVis = circleNodes.map((_, i) => {
      const angle = -Math.PI + i * angleStep;

      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        val: circleNodes[i],
        width: this.width,
        height: this.height,
        nodePx: 15,
      };
    });
  }
  calPositonOfArrows(nodesPostions: Nodes[]) {
    let n = nodesPostions.length;
    for (let i = 0; i < n - 1; i++) {
      let arrows = {
        x1: nodesPostions[i].x,
        y1: nodesPostions[i].y,
        x2: nodesPostions[i + 1].x,
        y2: nodesPostions[i + 1].y,
        width: this.width,
        height: this.height,
      };
      this.arrowsToVis.push(arrows);
    }

    this.arrowsToVis.push({
      x1: nodesPostions[n - 1].x,
      y1: nodesPostions[n - 1].y,
      x2: nodesPostions[0].x,
      y2: nodesPostions[0].y,
      width: this.width,
      height: this.height,
    });
  }

  calcFrontNodesPositon(nodes: number[]) {
    let N = nodes.length;
    let W = this.widthFront;

    for (let i = 0; i < N; i++) {
      let node: Nodes = {
        x: (i / (N - 1)) * W,
        y: 0,
        val: nodes[i],
        width: 0,
        height: this.heigthFront,
        nodePx: 15,
      };
      this.frontNodes.push(node);
    }
  }

  calcFrontArrows(nodes: Nodes[]) {
    let N = nodes.length;
    for (let i = 0; i < N - 1; i++) {
      let arrow: Arrows = {
        x1: nodes[i].x,
        y1: 0,
        x2: nodes[i + 1].x,
        y2: 0,
        width: 0,
        height: this.heigthFront,
      };
      this.frontArrows.push(arrow);
    }
    this.frontArrows.push({
      x1: nodes[N - 1].x,
      y1: nodes[N - 1].y,
      x2: 730,
      y2: 0,
      width: 0,
      height: this.heigthFront,
    });
  }

  ngOnInit(): void {
    this.calcPositonOfNodes(this.width, this.height);
    this.calPositonOfArrows(this.nodesToVis);
    this.calcFrontNodesPositon(this.nodes.slice(0, 5));
    this.calcFrontArrows(this.frontNodes);
  }
}
