import { Component, OnInit, Input } from '@angular/core';
import { ITodoListItem } from '../../widgets/widget';
@Component({
  selector: 'nest-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: ITodoListItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
