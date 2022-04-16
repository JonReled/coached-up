import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramWeekViewComponent } from './program-week-view.component';

describe('ProgramWeekViewComponent', () => {
  let component: ProgramWeekViewComponent;
  let fixture: ComponentFixture<ProgramWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramWeekViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
