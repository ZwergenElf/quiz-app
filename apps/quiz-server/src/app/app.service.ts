import { Injectable } from '@nestjs/common';
import { Question } from 'quiz-app-lib';

@Injectable()
export class AppService {
  getData(): Question {
    return { id: '0', questionText: 'Es funktioniert!', answer: 'Richtig' };
  }
}
