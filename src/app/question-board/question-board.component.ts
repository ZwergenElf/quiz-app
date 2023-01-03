import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Category, Question } from '../types';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.scss'],
})
export class QuestionBoardComponent {
  questions: Array<Question> = [
    {
      id: 1,
      category: 'LoL Champions',
      answer: 'Illaoi',
      questionText: 'Illaoi?',
      points: 200,
    },
    {
      id: 2,
      category: 'LoL Champions',
      answer: 'Illaoi',
      questionText: 'Not Illaoi?',
      points: 400,
    },
  ];

  categories: Array<Category> = ['LoL Champions'];

  constructor(private questionService: QuestionService) {}

  revealQuestion(questionId: number) {
    const question = this.questions.find(
      (question) => question.id === questionId
    );

    if (question) {
      this.questionService.nextQuestion(question);
    }
  }
}
