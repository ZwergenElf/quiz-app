import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDataService } from './questions/question.data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [QuestionDataService],
})
export class QuizAppLibModule {}
