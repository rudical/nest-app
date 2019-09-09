import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'nest-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() expandable: boolean = false;
  @Output() expand: EventEmitter<boolean> = new EventEmitter<boolean>();
  private _expanded: boolean = true;
  public expandIcon: 'expand_less'|'expand_more' = 'expand_less';
  ngOnInit () {
    this.expand.emit(this._expanded);
  }
  toggleExpand = ($event) => {
    if (!this._expanded) {
      this.expandIcon = 'expand_less';
    } else {
      this.expandIcon = 'expand_more';
    }
    this._expanded = !this._expanded;
    this.expand.emit(this._expanded);
  }
}
