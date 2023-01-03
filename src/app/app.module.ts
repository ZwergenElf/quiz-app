import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { QuestionBoardComponent } from './question-board/question-board.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RoundBoardComponent } from './round-board/round-board.component';

@NgModule({
  declarations: [AppComponent, QuestionBoardComponent, ScoreboardComponent, RoundBoardComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
