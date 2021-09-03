import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentofquestionsComponent } from './parentofquestions.component';

describe('ParentofquestionsComponent', () => {
  let component: ParentofquestionsComponent;
  let fixture: ComponentFixture<ParentofquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentofquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentofquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
