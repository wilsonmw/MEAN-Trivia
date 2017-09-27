import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  player;
  questions = [];
  games = [];
  search = "";
  justPlayed;
  game;

  constructor(private _questionService: QuestionService, private _playerService: PlayerService) {
    this._playerService.getGames();
    this._playerService.gameObserver.subscribe(games =>{
      this.games = games;
      console.log(this.games);
    })
    this._playerService.justPlayedObserver.subscribe(justPlayed =>{
      this.justPlayed = justPlayed;
    })
    this.game = this._playerService.game;
    
    if(this._playerService.player != ""){
      this.player = this._playerService.player;
    };
   }

   playGame(){
    this._questionService.getQuestions();
   }
   
   

  ngOnInit() {
    
  }

}
