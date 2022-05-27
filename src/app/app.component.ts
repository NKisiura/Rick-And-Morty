import {Component} from '@angular/core';
import {TimeService} from "./global/services/time.service";
import {LocalStorageService} from "./global/services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private timeService: TimeService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.setAppTheme();
  }

  private setAppTheme(): void {
    const getThemeResponse = this.localStorageService.get('theme');

    if (getThemeResponse) {
      const isDarkTheme = getThemeResponse === 'dark';
      if (isDarkTheme) document.documentElement.classList.add('dark');
    } else {
      this.setAppThemeByUserLocalTime();
    }
  }

  private setAppThemeByUserLocalTime(): void {
    const isDarkTheme = this.timeService.getUserLocalTimeOfDay() === 'night';
    if (isDarkTheme) document.documentElement.classList.add('dark');
    this.localStorageService.set('theme', isDarkTheme ? 'dark' : 'light');
  }
}
