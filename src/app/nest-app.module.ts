import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { WidgetModule } from './widgets/widget.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    WidgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class NestAppModule { }
