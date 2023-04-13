import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { tap, Observable } from 'rxjs';
import { QuestionService } from '../services/question/question.service';
import { TableService } from '../services/table/table.service';
import {
  CreateTableFormComponent,
  TableConfig,
} from './create-table-form/create-table-form.component';
import { QuizTable } from '@prisma/client';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss'],
})
export class QuizEditorComponent implements OnInit {
  canCreateQuestion = false;
  tableConfig: TableConfig | null = null;
  createQuestionForm!: FormGroup;
  tables$ = new Observable<QuizTable[]>();
  selectedTable!: QuizTable;

  constructor(
    public dialog: MatDialog,
    private _questionService: QuestionService,
    private _tableService: TableService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tables$ = this._tableService.getTables();
    this._questionService.tableCreate$
      .pipe(
        tap((config) => {
          // this.createQuestionForm = this._formBuilder.group({});
          // this.cols = [];
          // this.rows = [];
          // if (config) {
          //   for (let i = 0; i < config.cols; i++) {
          //     this.cols.push({
          //       category: '',
          //     });
          //     this._addControl(this.cols[i].id, this._noDigits());
          //   }
          //   for (let i = 0; i < config.rows; i++) {
          //     this.rows.push({
          //       points: 0,
          //     });
          //     this._addControl(this.rows[i].id);
          //   }
          // }
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
    this.dialog.open(CreateTableFormComponent, {
      minHeight: '10em',
      width: '20em',
    });
  }

  private _addControl(name: string, customValidator?: ValidatorFn) {
    let newControl: FormControl;
    if (customValidator) {
      newControl = new FormControl(null, [
        Validators.required,
        customValidator,
      ]);
    } else {
      newControl = new FormControl(null, [Validators.required]);
    }

    this.createQuestionForm.addControl(name, newControl);
  }

  getPointsControlAt(index: number): AbstractControl<number> {
    return this.createQuestionForm.get(
      'points' + index
    ) as AbstractControl<number>;
  }

  getCategoryControlAt(index: number): AbstractControl<string> {
    return this.createQuestionForm.get(
      'category' + index
    ) as AbstractControl<string>;
  }

  // createQuestion(): void {}

  private _noDigits(): ValidatorFn {
    return (
      control: AbstractControl<string | null>
    ): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const hasDigits = /\d/.test(control.value);
      return !hasDigits ? null : { hasDigits: true };
    };
  }
}
