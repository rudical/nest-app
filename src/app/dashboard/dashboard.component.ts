import { Component, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { WidgetService } from '../widgets/widget.service';
import { Widget } from '../widgets/widget';
import { Observable } from 'rxjs';

@Component({
  selector: 'nest-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public isHandset = false;
  public removeDashboardMargins = false;
  /** Based on the screen size, switch from standard to one column per row */
  public widgets: Observable<Widget[]> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
    map(({ matches }) => {
      this.isHandset = matches;
      this.removeDashboardMargins = matches;
      this.widgetService.updateHandheldWidgets(matches);
      return this.widgetService.getWidgets();
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private widgetService: WidgetService,
  ) {}

  ngAfterViewInit () {

  }

  click = (event: MouseEvent, widget: Widget) => {
    alert('Widget button works!');
    console.log('Widget action button clicked', widget);
  }
}
