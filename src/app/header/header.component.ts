import { Component, inject } from '@angular/core';
import { AllinfoService } from '../shared/allinfo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  infoService = inject(AllinfoService);
}
