import { Injectable } from '@angular/core';
import { Question } from '../types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private _question$ = new Subject<Question>();
  question$ = this._question$.asObservable();

  constructor() {}

  nextQuestion(question: Question) {
    this._question$.next(question);
  }
}
