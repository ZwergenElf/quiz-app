import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../types';

@Component({
  selector: 'app-round-board',
  templateUrl: './round-board.component.html',
  styleUrls: ['./round-board.component.scss'],
})
export class RoundBoardComponent {
  question?: Question;

  constructor(private _questionService: QuestionService) {}

  ngOnInit(): void {
    this._questionService.question$.subscribe(
      (question) => (this.question = question)
    );
  }
}
