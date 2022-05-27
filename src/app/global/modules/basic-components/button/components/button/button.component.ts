import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() public buttonName: string = 'button';
  @Output() public click: EventEmitter<void> = new EventEmitter<void>();
}
