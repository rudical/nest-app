import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'nest-widget-small',
  templateUrl: './widget-small.component.html',
  styleUrls: ['./widget-small.component.scss']
})
export class WidgetSmallComponent {
  private _row: number = 1;
  private _col: number = 1;
  constructor() {}
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() value: string = '';
  @Input() actionText: string = '';
  // @Output() actionClick = new EventEmitter();

  ngOnInit () {

  }
  getWidgetConfig = () => {
    return {
      title: this.title,
      img: this.img,
      description: this.description,
      value: this.value,
      actionText: this.actionText,
      col: this._col,
      row: this._row
    }
  }

  
  // click = ($event) => {
  //   this.actionClick.emit(true);
  // }
}
