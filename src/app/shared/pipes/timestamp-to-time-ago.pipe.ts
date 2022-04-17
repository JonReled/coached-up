import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestampToTimeAgo'
})
export class TimestampToTimeAgoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return moment(value).fromNow();
  }

}
