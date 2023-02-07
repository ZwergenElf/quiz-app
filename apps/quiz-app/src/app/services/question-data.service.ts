import { Injectable } from '@angular/core';
import { Question } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionDataService {
  constructor(private _http: HttpClient) {}

  getQuestions() {
    return this._http.get<string>('http://localhost:3000');
  }

  createQuestion(question: Question): void {}
}
