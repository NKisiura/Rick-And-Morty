import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimeService {
  private static getUserLocalTimeInHours(): number {
    return moment().get('hours');
  }

  public getUserLocalTimeOfDay(): 'night' | 'day' {
    const userLocalTime = TimeService.getUserLocalTimeInHours();
    return userLocalTime > 19 || userLocalTime < 8 ? 'night' : 'day';
  }
}
