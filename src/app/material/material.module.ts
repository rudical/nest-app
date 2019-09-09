import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatExpansionModule, 
  MatListModule, 
  MatGridListModule, 
  MatDividerModule,
  MatIconModule,
  MatSliderModule,
  MatBadgeModule,
  MatMenuModule

} from '@angular/material';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SliderComponent } from './slider/slider.component';
import { TodoListComponent } from './todo-list/todo-list.component';
@NgModule({
imports: [
  MatButtonModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatExpansionModule, 
  MatListModule, 
  MatGridListModule, 
  MatDividerModule,
  MatIconModule,
  MatSliderModule,
  MatBadgeModule,
  MatMenuModule,
  LayoutModule,
],
exports: [
  MatButtonModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatExpansionModule, 
  MatListModule, 
  MatGridListModule, 
  MatDividerModule,
  MatIconModule,
  MatSliderModule,
  MatBadgeModule,
  MatMenuModule,
  LayoutModule,
  SliderComponent,
  TodoListComponent,
],
declarations: [SliderComponent, TodoListComponent]
})
export class MaterialModule { }
