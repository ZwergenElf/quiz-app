import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-table-dialog',
  templateUrl: './delete-table-dialog.component.html',
  styleUrls: ['./delete-table-dialog.component.scss'],
  standalone: false,
})
export class DeleteTableDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTableDialogComponent>
  ) // @Inject(MAT_DIALOG_DATA) public table: { id: string } // private _tableService: TableService
  {}
  deleteTable() {
    // this._tableService.deleteTable(this.table.id);
  }
}
