import { Component } from '@angular/core';
import {TimeService} from "./global/services/time.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.setAppThemeByUserLocalTime();
  }

  private setAppThemeByUserLocalTime() {
    const userTimeOfDay = this.timeService.getUserLocalTimeOfDay();
    const isDarkTheme = userTimeOfDay === 'night';
    if (isDarkTheme) document.documentElement.classList.add('dark');
  }
}
