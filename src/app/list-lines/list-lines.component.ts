import { Component, Input } from '@angular/core';
import { Arrows } from '../shared/types';

@Component({
  selector: 'app-list-lines',
  templateUrl: './list-lines.component.html',
  styleUrl: './list-lines.component.scss',
})
export class ListLinesComponent {
  @Input() arrows: Arrows[] = [];
  @Input() width: number = 0;
  @Input() height: number = 0;
}
