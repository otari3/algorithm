import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-lines',
  templateUrl: './list-lines.component.html',
  styleUrl: './list-lines.component.scss',
})
export class ListLinesComponent {
  @Input() arrows: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    width: number;
  }[] = [];
}
