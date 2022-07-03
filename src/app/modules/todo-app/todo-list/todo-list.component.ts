import { Component, OnInit } from '@angular/core';

import { TodoInfo } from '../../../models/todo';

import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: TodoInfo[] = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  handleRemoveTodo(title: string): void {
    this.todoService.removeTodoByTitle(title);
    this.todos = this.todoService.getTodos();
  }
}
