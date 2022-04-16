import { Component, OnInit } from '@angular/core';
import { TIsoWeekDay } from 'src/app/shared/interfaces-types/program.types';

@Component({
  selector: 'app-program-week-view',
  templateUrl: './program-week-view.component.html',
  styleUrls: ['./program-week-view.component.scss']
})
export class ProgramWeekViewComponent implements OnInit {
  weekDays: TIsoWeekDay[] = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit(): void {
  }

}
