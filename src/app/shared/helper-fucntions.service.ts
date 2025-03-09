import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperFucntionsService {
  constructor() {}

  delay(milisecond: number) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('');
      }, milisecond);
    });
  }
}
