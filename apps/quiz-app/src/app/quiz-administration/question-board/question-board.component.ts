import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Category, Question, QuestionDataService } from 'quiz-app-lib';
import { Observable } from 'rxjs';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.scss'],
})
export class QuestionBoardComponent implements OnInit {
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

  testString = new Observable<Question>();

  categories: Array<Category> = ['LoL Champions'];

  constructor(
    private questionService: QuestionService,
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {
    this.testString = this.questionDataService.getQuestions();
  }

  revealQuestion(questionId: string) {
    const question = this.questions.find(
      (question) => question.id === questionId
    );

    if (question) {
      this.questionService.nextQuestion(question);
    }
  }
}
