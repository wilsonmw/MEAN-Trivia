import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { PlayerService } from './player.service';

@Injectable()
export class QuestionService {
  player;
  question = {};
  questions = [];
  questionObserver = new BehaviorSubject(this.questions);

  constructor(private _http: Http, private _route: ActivatedRoute, private _router: Router, private _playerService: PlayerService) {
    this.player = this._playerService.player;
   }

  create(question){
    this._http.post('/question', question).subscribe(
      (response)=>{
        response.json();
      },
      (err)=>{
        console.log("There was an error creating the question at the service.ts level.")
      }
    );
  }

  getQuestions(){
    this._http.get('/question').subscribe(
      (response)=>{
        this.questions = response.json();
        this.questionObserver.next(this.questions);
        this._router.navigate(['/playGame']);
      },
      (err)=>{
        console.log("There was an error getting an array of questions at the service.ts level.");
      }
    );
  }


}
