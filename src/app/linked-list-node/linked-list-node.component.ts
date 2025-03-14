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
}
