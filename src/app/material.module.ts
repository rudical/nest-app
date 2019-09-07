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

} from '@angular/material';
import { NgModule } from '@angular/core';

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
  ]
})
export class MaterialModule { }
