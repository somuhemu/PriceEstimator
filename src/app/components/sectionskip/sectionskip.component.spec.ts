import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionskipComponent } from './sectionskip.component';

describe('SectionskipComponent', () => {
  let component: SectionskipComponent;
  let fixture: ComponentFixture<SectionskipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionskipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionskipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
