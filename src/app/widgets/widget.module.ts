import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { WidgetHeaderComponent } from './widget-header.component';
import { WidgetSmallComponent } from './widget-small.component';


@NgModule({
  declarations: [
    WidgetHeaderComponent,
    WidgetSmallComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    WidgetSmallComponent,
  ]
})
export class WidgetModule { }
