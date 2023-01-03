import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { tap } from 'rxjs';
import { QuestionService } from '../services/question.service';
import {
  CreateTableFormComponent,
  TableConfig,
} from './create-table-form/create-table-form.component';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss'],
})
export class QuizEditorComponent {
  tableConfig: TableConfig | null = null;
  rows: number[] = [];
  cols: number[] = [];

  constructor(
    public dialog: MatDialog,
    private _questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this._questionService.tableCreate$
      .pipe(
        tap((config) => {
          if (config) {
            this.cols = Array(config.cols).fill(0);
            this.rows = Array(config.rows).fill(0);
          }
        })
      )
      .subscribe((config) => {
        this.tableConfig = config;
      });
  }

  deleteTable() {
    this._questionService.deleteTable();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTableFormComponent, {
      minHeight: '10em',
      width: '20em',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
