import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'nest-widget-action-plan',
  templateUrl: './widget-action-plan.component.html',
  styleUrls: ['./widget-action-plan.component.scss']
})
export class WidgetActionPlanComponent {
  private _row: number = 1;
  private _col: number = 1;
  constructor() {}
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() value: string = '';
  @Input() actionText: string = '';
  @Output() actionClick = new EventEmitter();

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

  
  click = ($event) => {
    this.actionClick.emit(true);
  }
}
