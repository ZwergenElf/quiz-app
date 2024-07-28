import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { QuestionBoardComponent } from './quiz-administration/question-board/question-board.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { QuizAdministrationComponent } from './quiz-administration/quiz-administration.component';
import { RoundBoardComponent } from './quiz-administration/round-board/round-board.component';
import { ScoreboardComponent } from './quiz-administration/scoreboard/scoreboard.component';
import { CreateTableFormComponent } from './quiz-editor/create-table-form/create-table-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeleteTableDialogComponent } from './quiz-editor/delete-table-dialog/delete-table-dialog.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    RoundBoardComponent,
    QuizEditorComponent,
    QuizAdministrationComponent,
    QuestionBoardComponent,
    CreateTableFormComponent,
    DeleteTableDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
