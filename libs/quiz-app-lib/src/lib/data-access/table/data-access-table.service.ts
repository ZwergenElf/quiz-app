import { Injectable } from '@angular/core';
import { QuizTable } from '@prisma/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataAccessTableService {
  constructor(private _httpClient: HttpClient) {}

  public createTable(table: QuizTable) {
    return this._httpClient.post<QuizTable>(`localhost:3333/create`, table);
  }

  public getTables(): Observable<QuizTable[]> {
    return this._httpClient.get<QuizTable[]>(`localhost:3333/api/quiz-tables`);
  }
}
