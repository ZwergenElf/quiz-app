import { Component } from '@angular/core';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.scss'],
  standalone: false,
})
export class QuestionBoardComponent {
  revealQuestion(questionId: string) {
    // const question = this.questions.find(
    //   (question) => question.id === questionId
    // );
    // if (question) {
    //   this.questionService.nextQuestion(question);
    // }
  }
}
