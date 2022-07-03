import { Component, OnInit } from '@angular/core';

import { Todo } from '../../../models/todo.model';

import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  handleRemoveTodo(title: string): void {
    this.todoService.removeTodoByTitle(title);
  }
}
