import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './types';

@Injectable({
  providedIn: 'root',
})
export class QuestionDataService {
  constructor(private _http: HttpClient) {}

  getQuestions() {
    return this._http.get<Question>('http://localhost:3333/api');
  }

  // createQuestion(question: Question): void {}
}
