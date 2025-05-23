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
      title: 'game of life',
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Conways_game_of_life_breeder.png',
      moreinfo:
        "Conway's Game of Life is a cellular automaton where each cell in a grid changes state based on its neighbors. It evolves in steps, using simple rules to create complex patterns over time.",
      url: 'gameoflife',
    },
     {
      title: 'BZ reaction',
      img: 'https://www.researchgate.net/publication/329206646/figure/fig2/AS:697426805534724@1543290916926/A-numerical-simulation-of-BZ-reaction-using-the-Brusselator-model-at-different-time-slice.ppm',
      moreinfo:
        "Conway's Game of Life is a cellular automaton where each cell in a grid changes state based on its neighbors. It evolves in steps, using simple rules to create complex patterns over time.",
      url: 'bzreaction',
    },
  ];
  constructor() {}
}
