import { Component, Input } from '@angular/core';
import { Nodes } from '../shared/types';

@Component({
  selector: 'app-linked-list-node',
  templateUrl: './linked-list-node.component.html',
  styleUrl: './linked-list-node.component.scss',
})
export class LinkedListNodeComponent {
  @Input() node: Nodes = {
    x: 0,
    y: 0,
    val: 0,
    width: 0,
    height: 0,
    nodePx: 0,
  };
}
