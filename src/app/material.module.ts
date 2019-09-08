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
  ]
})
export class MaterialModule { }
