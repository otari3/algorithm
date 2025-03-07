import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllinfoService {
  cardInfo: { title: string; img: string; moreinfo: string; url: string }[] = [
    {
      title: 'binery search',
      img: '../../assets/BinarySearch.png',
      moreinfo: 'this is binery search',
      url: 'dummyurl',
    },
  ];
  constructor() {}
}
