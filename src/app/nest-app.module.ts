import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';


import { WidgetHeaderComponent } from './widgets/widget-header.component';
import { Widget1Component } from './widgets/widget-1.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetHeaderComponent,
    Widget1Component,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class NestAppModule { }
