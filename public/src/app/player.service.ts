import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class PlayerService {
  player = "";
  playerObserver = new BehaviorSubject(this.player);
  games = [];
  gameObserver = new BehaviorSubject(this.games);
  justPlayed = false;
  justPlayedObserver = new BehaviorSubject(this.justPlayed);
  game;

  constructor(private _http: Http, private _route: ActivatedRoute, private _router: Router) { }

  savePlayer(player){
    if(player != null && player != ""){
      this.player = player;
      this.playerObserver.next(this.player);
      this._router.navigate(['/dashboard'])
    } else {
      this._router.navigate(['/']);
    }
  }

  submitGame(game){
    console.log(game);
    this.game = game;
    this._http.post('/game', game).subscribe(
      (response)=>{
        this.justPlayed = true;
        this.justPlayedObserver.next(this.justPlayed);
        response.json();
      },
      (err)=>{
        console.log("There was an error saving the game in the database.");
      }
    )
  }


  getGames(){
    this._http.get('/game').subscribe(
      (response)=>{
        this.games = response.json();
        this.gameObserver.next(this.games);
      },
      (err)=>{
        console.log("There was an error getting the games from the database.");
      }
    )
  }
}
