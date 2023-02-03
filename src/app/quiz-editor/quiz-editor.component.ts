import { Component } from '@angular/core';
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
import { map, tap, Observable, combineLatest } from 'rxjs';
import { QuestionService } from '../services/question.service';
import { TableCategory, TablePoints } from '../types';
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
  canCreateQuestion: boolean = false;
  tableConfig: TableConfig | null = null;
  cols: TableCategory[] = [];
  rows: TablePoints[] = [];
  createQuestionForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _questionService: QuestionService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._questionService.tableCreate$
      .pipe(
        tap((config) => {
          this.createQuestionForm = this._formBuilder.group({});
          this.cols = [];
          this.rows = [];
          if (config) {
            for (let i = 0; i < config.cols; i++) {
              this.cols.push({
                indexId: i,
                key: 'category' + i,
                category: '',
              });
              this._addControl(this.cols[i].key, this._noDigits());
            }
            for (let i = 0; i < config.rows; i++) {
              this.rows.push({
                indexId: i,
                key: 'points' + i,
                points: 0,
              });
              this._addControl(this.rows[i].key);
            }
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
