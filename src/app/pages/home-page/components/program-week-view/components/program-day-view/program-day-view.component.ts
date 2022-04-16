import { Component, Input, OnInit } from '@angular/core';
import { isoToWeekDays, TWeekDay } from 'src/app/shared/interfaces-types/program.types';

@Component({
  selector: 'app-program-day-view',
  templateUrl: './program-day-view.component.html',
  styleUrls: ['./program-day-view.component.scss']
})
export class ProgramDayViewComponent implements OnInit {
  @Input() isoWeekDay: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  indexToWeekDay(i: number): TWeekDay {
    return isoToWeekDays[i-1];
  }

}
