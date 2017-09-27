import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(games: Array<any>, value: string): any {
    if(!games) return [];
    if(!value){
      return games;
    }
    var filteredGames = [];
    for(let blah of games){
      console.log('hey: ', blah)
      if(blah.name && (blah.name.toLowerCase().includes(value.toLowerCase()) || blah.score == value || `${blah.percentage}`.includes(value))){
        filteredGames.push(blah);
      }
    }
    return filteredGames;
  }

}
