import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  player;

  question = {
    content: "",
    correctAnswer: "",
    fakeAnswer1: "",
    fakeAnswer2: ""
  }

  constructor(private _playerService: PlayerService, private _questionService: QuestionService, private _router: Router) {
    this._playerService.justPlayed = false;
    this._playerService.justPlayedObserver.next(this._playerService.justPlayed);
    }

  newQuestion(){
    this._questionService.create(this.question);
    this.question = {
      content: "",
      correctAnswer: "",
      fakeAnswer1: "",
      fakeAnswer2: ""
    }
    this._router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
