import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsdisplayComponent } from './questionsdisplay.component';

describe('QuestionsdisplayComponent', () => {
  let component: QuestionsdisplayComponent;
  let fixture: ComponentFixture<QuestionsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
