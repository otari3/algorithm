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
  target: number = 38;
  deley: number = 620;
  arrayNodes: { element: number; color: string }[] = [];
  targetInfo: { element: number; color: string } = {
    element: this.target,
    color: '',
  };
  isStarted: boolean = false;

  async start() {
    if (this.isStarted) {
      return;
    }
    this.targetInfo.color = '';
    this.isStarted = true;
    this.arrayNodes = [];
    this.setValues();
    await this.binerySearch();
    this.isStarted = false;
  }

  setValues() {
    let smallValues = Math.floor(Math.random() * 19) + 1;
    let bigValues = 19 - smallValues;
    this.arrayNodes.push({ element: this.target, color: 'rgb(102, 102, 240)' });
    let sameValuesSkiped = 0;
    for (let i = 0; i < smallValues; i++) {
      let newNumber = Math.floor(Math.random() * this.target) + 1;
      if (newNumber === this.target) {
        sameValuesSkiped++;
        continue;
      }
      this.arrayNodes.push({ element: newNumber, color: 'rgb(102, 102, 240)' });
    }
    for (let i = 0; i < bigValues + sameValuesSkiped; i++) {
      let newNumber = Math.floor(Math.random() * 20) + this.target + 1;
      this.arrayNodes.push({ element: newNumber, color: 'rgb(102, 102, 240)' });
    }
    this.arrayNodes.sort((a, b) => a.element - b.element);
  }

  removeRight(middle: number, start: number) {
    while (start >= middle) {
      this.arrayNodes[start].color = '';
      start--;
    }
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
        this.targetInfo.color = 'green';
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
