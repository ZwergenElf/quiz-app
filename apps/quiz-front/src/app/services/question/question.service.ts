import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TableConfig } from '../../quiz-editor/create-table-form/create-table-form.component';
import { QuizField } from '@prisma/client';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private _question$ = new Subject<QuizField>();
  question$ = this._question$.asObservable();

  private _tableCreate$ = new BehaviorSubject<TableConfig | null>(null);
  tableCreate$ = this._tableCreate$.asObservable();

  nextQuestion(question: QuizField) {
    this._question$.next(question);
  }

  createTable(table: TableConfig) {
    this._tableCreate$.next(table);
  }

  deleteTable() {
    this._tableCreate$.next(null);
  }
}
