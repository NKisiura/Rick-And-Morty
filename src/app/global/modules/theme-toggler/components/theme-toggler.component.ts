import {Component} from "@angular/core";
import {faCloudMoon} from "@fortawesome/free-solid-svg-icons/faCloudMoon";
import {faCloudSun} from "@fortawesome/free-solid-svg-icons/faCloudSun";

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html'
})
export class ThemeTogglerComponent {
  public themeIconDay = faCloudSun;
  public themeIconNight = faCloudMoon;

  public toggleAppTheme() {
    document.documentElement.classList.toggle('dark');
  }
}
