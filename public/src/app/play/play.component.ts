import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  answerRandomizer;
  player;
  score = 0;
  questions = [];
  threeToPlay=[];
  answers = {
    q1: "",
    q2: "",
    q3: ""
  }
  game = {
    name: this.player,
    score: this.score,
    percentage: (this.score/3)*100
  }


  constructor(private _router: Router, private _questionService: QuestionService, private _playerService: PlayerService) { 
    this._questionService.questionObserver.subscribe(questions =>{
      this.questions = questions;
    })
    this.randomizeQuestions(this.questions);
    this._playerService.playerObserver.subscribe(player =>{
      this.player = player;
    })
    this.answerRandomizer = Math.floor(Math.random()*6);
  }

  randomizeQuestions(questionArray){
    var rand1 = Math.floor(Math.random()*(questionArray.length));
    this.threeToPlay.push(this.questions[rand1]);
    this.questions.splice(rand1, 1);
    var rand2 = Math.floor(Math.random()*(questionArray.length));
    this.threeToPlay.push(this.questions[rand2]);
    this.questions.splice(rand2,1);
    var rand3 = Math.floor(Math.random()*(questionArray.length));
    this.threeToPlay.push(this.questions[rand3]);
    this.questions.splice(rand3,1);
  }

  submitGame(){
    if(this.answers.q1 == this.threeToPlay[0].correctAnswer){
      this.score += 1;
    };
    if(this.answers.q2 == this.threeToPlay[1].correctAnswer){
      this.score += 1;
    };
    if(this.answers.q3 == this.threeToPlay[2].correctAnswer){
      this.score += 1;
    };
    this.game.name = this.player;
    this.game.score = this.score;
    this.game.percentage = (this.score/3)*100;
    this._playerService.submitGame(this.game);
    this._router.navigate(['/dashboard']);

  }
  ngOnInit() {
  }

}
