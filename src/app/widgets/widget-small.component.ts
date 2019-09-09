import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSmallPayoad } from './widget';

@Component({
  selector: 'nest-widget-small',
  templateUrl: './widget-small.component.html',
  styleUrls: ['./widget-small.component.scss']
})
export class WidgetSmallComponent {
  constructor() {}
  @Input() title = '';
  @Input() description = '';
  @Input() actionText = '';
  @Input() payload: IWidgetSmallPayoad;
  @Output() actionClick = new EventEmitter();

  click = (event: MouseEvent) => {
    this.actionClick.emit(event);
  }
}
