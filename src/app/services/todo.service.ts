import { Injectable } from '@angular/core';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  removeTodoByTitle(todoTitle: string) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.title === todoTitle),
      1
    );
  }
}
