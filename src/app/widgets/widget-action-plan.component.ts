import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IWidgetActionPlanPayoad, ITodoListItem} from './widget';

@Component({
  selector: 'nest-widget-action-plan',
  templateUrl: './widget-action-plan.component.html',
  styleUrls: ['./widget-action-plan.component.scss']
})
export class WidgetActionPlanComponent implements OnInit {
  public displayYear = 2019;
  public todoList: ITodoListItem[] = [];
  constructor() {}
  @Input() title = '';
  @Input() description = '';
  @Input() actionText = '';
  @Input() payload: IWidgetActionPlanPayoad;
  @Output() actionClick = new EventEmitter();

  ngOnInit() {
    this.displayYear = this.payload.slider.startYear;
    this.selectYear(this.displayYear);
  }

  click = (event: MouseEvent) => {
    this.actionClick.emit(event);
  }

  selectYear = (year) => {
    this.displayYear = year;
    this.selectTodosByYear(year);
  }

  selectTodosByYear = (year) => {
    const todos = this.payload.todoList.find(a => a.year === year);
    this.todoList = (todos === undefined) ? [] : todos.todos;
  }
}
