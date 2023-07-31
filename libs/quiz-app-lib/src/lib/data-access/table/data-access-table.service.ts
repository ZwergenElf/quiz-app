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
