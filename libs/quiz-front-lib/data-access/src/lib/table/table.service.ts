import { Injectable } from '@angular/core';
import { QuizTable } from 'generated/prisma/client';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private _httpClient: HttpClient) {}

  public createTable(table: QuizTable) {
    return this._httpClient.post<QuizTable>(`localhost:3333/create`, table);
  }
  public getTables() {
    return this._httpClient.get<QuizTable[]>(
      `http://localhost:3333/api/quiz-tables`
    );
  }
  public updateTable(table: QuizTable) {
    this._httpClient.patch<void>(
      `http://localhost:3333/api/quiz-tables`,
      table
    );
  }
  public deleteTable(id: string) {
    this._httpClient.delete<void>(
      `http://localhost:3333/api/quiz-tables/${id}`
    );
  }
}
