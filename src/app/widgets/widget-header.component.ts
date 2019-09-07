import { Component, Input } from '@angular/core';

@Component({
  selector: 'nest-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent {
  @Input() title: string = 'asd';
}
