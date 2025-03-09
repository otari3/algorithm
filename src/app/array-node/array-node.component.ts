import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-array-node',
  templateUrl: './array-node.component.html',
  styleUrl: './array-node.component.scss',
})
export class ArrayNodeComponent {
  @Input() data: { element: number; color: string } = {
    element: -1,
    color: '',
  };
}
