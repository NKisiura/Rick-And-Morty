import {Component} from "@angular/core";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons/faCloudMoon";
import {faCloudSun} from "@fortawesome/free-solid-svg-icons/faCloudSun";
import {LocalStorageService} from "../../../../services/local-storage.service";

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html'
})
export class ThemeTogglerComponent {
  public themeIconDay = faCloudSun;
  public themeIconNight = faCloudMoon;

  constructor(private localStorageService: LocalStorageService) {}

  public toggleAppTheme() {
    document.documentElement.classList.toggle('dark');
    const currentTheme = this.localStorageService.get('theme');
    this.localStorageService.set('theme', ThemeTogglerComponent.getInverseTheme(currentTheme));
  }

  private static getInverseTheme(theme: string): string {
    switch (theme) {
      case 'light': return 'dark'
      case 'dark': return 'light'
      default: return 'dark'
    }
  }
}
