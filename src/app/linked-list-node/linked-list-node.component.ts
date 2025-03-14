import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linked-list-node',
  templateUrl: './linked-list-node.component.html',
  styleUrl: './linked-list-node.component.scss',
})
export class LinkedListNodeComponent {
  @Input() node: {
    x: number;
    y: number;
    val: number;
  } = {
    x: 0,
    y: 0,
    val: 0,
  };

  @Input() arrow: { x1: number; y1: number; x2: number; y2: number } = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  };
}
