import { TestBed } from '@angular/core/testing';
import { DataAccessTableService } from './data-access-table.service';

describe('DataAccessTableService', () => {
  let service: DataAccessTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
