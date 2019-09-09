import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nest-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() startYear: number;
  @Input() endYear: number;
  @Output() selectYear = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  sliderSelect = (event) => {
    this.selectYear.emit(event.value);
  }
}
