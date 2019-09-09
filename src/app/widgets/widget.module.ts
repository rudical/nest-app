import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { WidgetService } from './widget.service';
import { WidgetHeaderComponent } from './widget-header.component';
import { WidgetSmallComponent } from './widget-small.component';
import { WidgetActionPlanComponent } from './widget-action-plan.component';


@NgModule({
  declarations: [
    WidgetHeaderComponent,
    WidgetSmallComponent,
    WidgetActionPlanComponent,
  ],
  providers: [WidgetService],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    WidgetSmallComponent,
    WidgetActionPlanComponent,
  ]
})
export class WidgetModule { }
