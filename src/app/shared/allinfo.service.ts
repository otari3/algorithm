import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllinfoService {
  cardInfo: { title: string; img: string; moreinfo: string; url: string }[] = [
    {
      title: 'Binery Search',
      img: '../../assets/BinarySearch.png',
      moreinfo:
        'Binary search is an efficient algorithm for finding a target value in a sorted array. It works by repeatedly dividing the search range in half:',
      url: 'binerysearch',
    },
    {
      title: 'linked list cycle detection ',
      img: '../../assets/BinarySearch.png',
      moreinfo:
        'Binary search is an efficient algorithm for finding a target value in a sorted array. It works by repeatedly dividing the search range in half:',
      url: 'listcycle',
    },
    {
      title: 'test',
      img: '../../assets/BinarySearch.png',
      moreinfo:
        'Binary search is an efficient algorithm for finding a target value in a sorted array. It works by repeatedly dividing the search range in half:',
      url: 'test',
    },
    {
      title: 'game of life',
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Conways_game_of_life_breeder.png',
      moreinfo:
        'Binary search is an efficient algorithm for finding a target value in a sorted array. It works by repeatedly dividing the search range in half:',
      url: 'gameoflife',
    },
  ];
  constructor() {}
}
