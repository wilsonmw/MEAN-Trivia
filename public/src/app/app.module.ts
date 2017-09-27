import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayComponent } from './play/play.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { PlayerComponent } from './player/player.component';
// import { RouterLink } from '@angular/router';
import { PlayerService } from './player.service';
import { QuestionService } from './question.service';
import { GameFilterPipe } from './game-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayComponent,
    NewQuestionComponent,
    PlayerComponent,
    GameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
