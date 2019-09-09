import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IWidgetSmallPayoad } from './widget';

@Component({
  selector: 'nest-widget-small',
  templateUrl: './widget-small.component.html',
  styleUrls: ['./widget-small.component.scss']
})
export class WidgetSmallComponent {
  constructor() {}
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() actionText: string = '';
  @Input() payload: IWidgetSmallPayoad;
  @Output() actionClick = new EventEmitter();

  ngOnInit () {}  
  
  click = (event: MouseEvent) => {
    this.actionClick.emit(event);
  }
}
