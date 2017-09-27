import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayComponent } from './play/play.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
    {path: '', component: PlayerComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'createNew', component: NewQuestionComponent},
    {path: 'logout', component: PlayerComponent},
    {path: 'playGame', component: PlayComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

