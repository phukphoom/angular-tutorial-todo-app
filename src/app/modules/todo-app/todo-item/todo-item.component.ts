import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() removeClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
