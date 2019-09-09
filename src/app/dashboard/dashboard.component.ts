import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'nest-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      // if (matches) {
      //   return [
      //     // { title: 'Card 3', cols: 1, rows: 2 }
      //   ];
      // }

      return [
        { title: `Annual Retirement Income`,
        img: `url('/assets/img/Financial freedom.svg')`,
        description: `Using baseline calculations for 2019`,
        value: 160287,
        actionText: `Optimize for Annual Income`,
        type: 'small',
        cols: 1, rows: 27
      },
      { title: `Estate Value`,
        img: `url('/assets/img/Saving money.svg')`,
        description: `Using baseline calculations for 2019`,
        value: 1197869,
        actionText: `Optimize for Estate Value`,
        type: 'small',
        cols: 1, rows: 27
      },
      { title: `Action Plan`,
        description: `See what you’ll do each year in to keep your retirement on track.`,
        // value: 1197869,
        actionText: `Export Action Plan`,
        type: 'action-plan',
        cols: 2, rows: 60
      },
        // { title: 'Card 3', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
