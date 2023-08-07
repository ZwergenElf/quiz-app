import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TableService } from 'quiz-front-lib/data-access';

@Component({
  selector: 'app-delete-table-dialog',
  templateUrl: './delete-table-dialog.component.html',
  styleUrls: ['./delete-table-dialog.component.scss'],
})
export class DeleteTableDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public table: { id: string },
    public dialogRef: MatDialogRef<DeleteTableDialogComponent>,
    private _tableService: TableService
  ) {}
  deleteTable() {
    this._tableService.deleteTable(this.table.id);
  }
}
