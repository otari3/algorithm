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
  nodesToVis: Nodes[] = [];

  frontNodes: Nodes[] = [];

  arrowsToVis: Arrows[] = [];

  straightArrows: Arrows[] = [];

  nodes: number[] = [1, 2, 3, 4, 5, 6, 7, 4];

  calcPositonOfNodes(width: number, height: number) {
    const spacing = width / 4;
    let r = 0;
    for (let i = 2; i >= 0; i--) {
      let node = {
        x: -(r + 1) * spacing,
        y: 0,
        val: this.nodes[i],
        width: 0,
        height: 0,
        nodePx: 0,
      };
      this.frontNodes.push(node);
      r++;
    }

    const radius = Math.min(width, height) / 2 - 50;

    const circleNodes = this.nodes.slice(3, this.nodes.length);
    const angleStep = (2 * Math.PI) / circleNodes.length;

    this.nodesToVis = circleNodes.map((_, i) => {
      const angle = -Math.PI + i * angleStep;

      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        val: circleNodes[i],
        width: this.width,
        height: this.height,
        nodePx: 20,
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

  calcFrontArrows() {
    let n = this.frontNodes.length;
    for (let i = 0; i < this.frontNodes.length - 1; i++) {
      let arrow = {
        x1: this.frontNodes[i].x + 250,
        y1: this.frontNodes[i].y,
        x2: this.frontNodes[i + 1].x + 250,
        y2: this.frontNodes[i + 1].y,
        width: 400,
        height: 700,
      };

      this.straightArrows.push(arrow);
    }
    this.straightArrows.push({
      x1: this.frontNodes[n - 1].x + 250,
      y1: this.frontNodes[n - 1].y,
      x2: this.frontNodes[0].x + 250,
      y2: this.frontNodes[0].y,
      width: 400,
      height: 700,
    });
    console.log(this.straightArrows);
  }

  ngOnInit(): void {
    this.calcPositonOfNodes(this.width, this.height);
    this.calPositonOfArrows(this.nodesToVis);
    this.calcFrontArrows();
  }
}
