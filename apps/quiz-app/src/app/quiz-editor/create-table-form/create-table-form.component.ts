import { Component } from '@angular/core';
import { QuestionService } from '../../services/question/question.service';

export type TableConfig = {
  cols: number;
  rows: number;
};

@Component({
  selector: 'app-create-table-form',
  templateUrl: './create-table-form.component.html',
  styleUrls: ['./create-table-form.component.scss'],
})
export class CreateTableFormComponent {
  tableConfig: TableConfig = { cols: 1, rows: 1 };
  rows = 1;
  cols = 1;

  constructor(private _questionService: QuestionService) {}

  submitTable() {
    this._questionService.createTable(this.tableConfig);
  }
}
