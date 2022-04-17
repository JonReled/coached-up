import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ICoachNotification, ICoachOnlineStatus } from 'src/app/shared/interfaces-types/coach-overview.types';

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.scss']
})
export class CoachOverviewComponent implements OnInit {
  coachName: string = 'Arnold';
  coachOnlineStatus: ICoachOnlineStatus = {
    isOnline: true,
    lastSeen: 1650200415000,
  };
  pfpUrl: string = '../../../../../assets/arnold.png';
  notifications: ICoachNotification[] = [
    {
      type: 'thumb_up',
      message: 'Reviewed your video',
      timestamp: 1650200415000,
    },
    {
      type: 'message',
      message: 'Sent you a message',
      timestamp: 1650182415000,
    },
    {
      type: 'edit',
      message: 'Edited your program',
      timestamp: 1650027615000,
    },
    {
      type: 'thumb_down',
      message: 'Reviewed your video',
      timestamp: 1647525615000,
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
