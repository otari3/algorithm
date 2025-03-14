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

  ngOnInit(): void {
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 50;

    const angleStep = (2 * Math.PI) / this.nodes.length;

    this.nodesToVis = this.nodes.map((_, i) => {
      const angle = -Math.PI + i * angleStep;
      const nextIndex = (i + 1) % this.nodes.length; // Loop back to 0 after last node

      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        val: this.nodes[i],
      };
    });

    for (let i = 0; i < this.nodesToVis.length - 1; i++) {
      let arrows = {
        x1: this.nodesToVis[i].x,
        y1: this.nodesToVis[i].y,
        x2: this.nodesToVis[i + 1].x,
        y2: this.nodesToVis[i + 1].y,
      };
      this.arrowsToVis.push(arrows);
    }
  }
}
