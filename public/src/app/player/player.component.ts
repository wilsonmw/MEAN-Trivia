import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player = {name: ""};

  constructor(private _playerService: PlayerService) {
    this._playerService.justPlayed = false;
    this.getName();
    this._playerService.savePlayer(this.player.name);
   }

  getName(){
    this.player.name = prompt("Please enter your name:");
    if(this.player.name == null || this.player.name == ""){
      this.getName();
    } else {
      return this.player.name;
    }
  }
  ngOnInit() {
  }

}
