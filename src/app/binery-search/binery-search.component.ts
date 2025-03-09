import { Component } from '@angular/core';
import { HelperFucntionsService } from '../shared/helper-fucntions.service';

@Component({
  selector: 'app-binery-search',
  templateUrl: './binery-search.component.html',
  styleUrl: './binery-search.component.scss',
})
export class BinerySearchComponent {
  constructor(private helperfn: HelperFucntionsService) {}
  lightBlue: string = 'rgb(102, 102, 240)';
  target: number = 14;
  deley: number = 400;
  arrayNodes: { element: number; color: string }[] = [];
  isStarted: boolean = false;

  async start() {
    if (this.isStarted) {
      return;
    }
    this.isStarted = true;
    this.arrayNodes = [];
    for (let i = 1; i <= 20; i++) {
      this.arrayNodes.push({ element: i, color: this.lightBlue });
    }
    await this.binerySearch();
    this.isStarted = false;
  }

  removeRight(middle: number, start: number) {
    while (start >= middle) {
      this.arrayNodes[start].color = '';
      start--;
    }
    console.log(middle);
  }
  removeLeft(middle: number, start: number) {
    while (start <= middle) {
      this.arrayNodes[start].color = '';
      start++;
    }
  }
  async binerySearch() {
    let l = 0;
    let r = this.arrayNodes.length - 1;
    await this.helperfn.delay(this.deley);
    while (l <= r) {
      let middle = Math.floor((l + r) / 2);
      this.arrayNodes[middle].color = 'red';

      await this.helperfn.delay(this.deley);
      if (this.arrayNodes[middle].element === this.target) {
        this.removeRight(middle, r);
        this.removeLeft(middle, l);
        this.arrayNodes[middle].color = 'green';
        return middle;
      } else if (this.arrayNodes[middle].element > this.target) {
        this.removeRight(middle, r);
        await this.helperfn.delay(this.deley);
        r = middle - 1;
      } else {
        this.removeLeft(middle, l);
        await this.helperfn.delay(this.deley);
        l = middle + 1;
      }
    }
    return -1;
  }
}
