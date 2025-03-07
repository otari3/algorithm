import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() data: { title: string; img: string; moreinfo: string; url: string } =
    {
      title: '',
      img: '',
      moreinfo: '',
      url: '',
    };
}
