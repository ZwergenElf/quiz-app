import { Injectable } from '@angular/core';
import { Question } from '../../../../../libs/quiz-app-lib/src/lib/data-access/questions/types';
import { BehaviorSubject, Subject } from 'rxjs';
import { TableConfig } from '../quiz-editor/create-table-form/create-table-form.component';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private _question$ = new Subject<Question>();
  question$ = this._question$.asObservable();

  private _tableCreate$ = new BehaviorSubject<TableConfig | null>(null);
  tableCreate$ = this._tableCreate$.asObservable();

  constructor() {}

  nextQuestion(question: Question) {
    this._question$.next(question);
  }

  createTable(table: TableConfig) {
    this._tableCreate$.next(table);
  }

  deleteTable() {
    this._tableCreate$.next(null);
  }
}
