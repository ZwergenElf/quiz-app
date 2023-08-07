import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTableDialogComponent } from './delete-table-dialog.component';

describe('DeleteTableDialogComponent', () => {
  let component: DeleteTableDialogComponent;
  let fixture: ComponentFixture<DeleteTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTableDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
