import { Injectable } from '@angular/core';
import { QuizTable } from '@prisma/client';
import { Observable } from 'rxjs';
import { DataAccessTableService } from '@quiz-app/data-access';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private quizTableDataService: DataAccessTableService) {}

  getTables(): Observable<QuizTable[]> {
    return this.quizTableDataService.getTables();
  }
}
