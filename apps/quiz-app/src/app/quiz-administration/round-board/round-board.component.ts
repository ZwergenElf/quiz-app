import { Component, OnInit } from '@angular/core';
import { QuizField } from '@prisma/client';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-round-board',
  templateUrl: './round-board.component.html',
  styleUrls: ['./round-board.component.scss'],
})
export class RoundBoardComponent implements OnInit {
  question?: QuizField;

  constructor(private _questionService: QuestionService) {}

  ngOnInit(): void {
    this._questionService.question$.subscribe(
      (question) => (this.question = question)
    );
  }
}
