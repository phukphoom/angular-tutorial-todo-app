import { Injectable } from '@angular/core';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor() {}

  addTodo(title: string, description?: string) {
    this.todos.push({
      id: new Date().getTime().toString(),
      title,
      description,
    });
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  removeTodoById(id: string) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1
    );
  }
}
