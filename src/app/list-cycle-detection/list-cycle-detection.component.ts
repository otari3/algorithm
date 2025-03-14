import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cycle-detection',
  templateUrl: './list-cycle-detection.component.html',
  styleUrl: './list-cycle-detection.component.scss',
})
export class ListCycleDetectionComponent implements OnInit {
  nodesToVis: {
    x: number;
    y: number;
    val: number;
  }[] = [];
  arrowsToVis: { x1: number; y1: number; x2: number; y2: number }[] = [];

  nodes: number[] = [1, 2, 3, 4, 5, 6, 7];

  calcPositonOfNodes(width: number, height: number) {
    const radius = Math.min(width, height) / 2 - 50;

    const angleStep = (2 * Math.PI) / this.nodes.length;

    this.nodesToVis = this.nodes.map((_, i) => {
      const angle = -Math.PI + i * angleStep;

      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        val: this.nodes[i],
      };
    });
  }
  calPositonOfArrows(
    nodesPostions: {
      x: number;
      y: number;
      val: number;
    }[]
  ) {
    let n = nodesPostions.length;
    for (let i = 0; i < n - 1; i++) {
      let arrows = {
        x1: nodesPostions[i].x,
        y1: nodesPostions[i].y,
        x2: nodesPostions[i + 1].x,
        y2: nodesPostions[i + 1].y,
      };
      this.arrowsToVis.push(arrows);
    }

    this.arrowsToVis.push({
      x1: nodesPostions[n - 1].x,
      y1: nodesPostions[n - 1].y,
      x2: nodesPostions[0].x,
      y2: nodesPostions[0].y,
    });
  }

  ngOnInit(): void {
    this.calcPositonOfNodes(500, 500);
    this.calPositonOfArrows(this.nodesToVis);
  }
}
