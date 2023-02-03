import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Category, Question } from '../../types';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.scss'],
})
export class QuestionBoardComponent {
  questions: Array<Question> = [
    {
      id: '01',
      answer: 'Illaoi',
      questionText: 'Illaoi?',
    },
    {
      id: '00',
      answer: 'Illaoi',
      questionText: 'Not Illaoi?',
    },
  ];

  categories: Array<Category> = ['LoL Champions'];

  constructor(private questionService: QuestionService) {}

  revealQuestion(questionId: string) {
    const question = this.questions.find(
      (question) => question.id === questionId
    );

    if (question) {
      this.questionService.nextQuestion(question);
    }
  }
}
