import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataAccessTableService } from '@quiz-app/data-access';

@Component({
  selector: 'app-delete-table-dialog',
  templateUrl: './delete-table-dialog.component.html',
  styleUrls: ['./delete-table-dialog.component.scss'],
})
export class DeleteTableDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public table: { id: string },
    public dialogRef: MatDialogRef<DeleteTableDialogComponent>,
    private _tableService: DataAccessTableService
  ) {}
  deleteTable() {
    this._tableService.deleteTable(this.table.id);
  }
}
