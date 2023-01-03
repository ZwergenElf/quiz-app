import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAdministrationComponent } from './quiz-administration.component';

describe('QuizAdministrationComponent', () => {
  let component: QuizAdministrationComponent;
  let fixture: ComponentFixture<QuizAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
