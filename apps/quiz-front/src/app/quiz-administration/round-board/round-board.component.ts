import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question/question.service';
import { QuizField } from 'generated/prisma/client';

@Component({
  selector: 'app-round-board',
  templateUrl: './round-board.component.html',
  styleUrls: ['./round-board.component.scss'],
  standalone: false,
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
