import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDayViewComponent } from './program-day-view.component';

describe('ProgramDayViewComponent', () => {
  let component: ProgramDayViewComponent;
  let fixture: ComponentFixture<ProgramDayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramDayViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
