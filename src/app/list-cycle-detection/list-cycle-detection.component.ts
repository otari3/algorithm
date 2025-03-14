import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cycle-detection',
  templateUrl: './list-cycle-detection.component.html',
  styleUrl: './list-cycle-detection.component.scss',
})
export class ListCycleDetectionComponent implements OnInit {
  nodesToVis: { x: number; y: number; val: number }[] = [];

  nodes: number[] = [1, 2, 3, 4, 5, 6, 7];

  ngOnInit(): void {
    const width = 500;
    const height = 500;
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
}
