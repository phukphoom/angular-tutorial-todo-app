import { Injectable } from '@angular/core';

import { TodoInfo } from '../models/todo';

@Injectable()
export class TodoService {
  todos: TodoInfo[] = [];

  constructor() {}

  addTodo(todo: TodoInfo) {
    this.todos.push(todo);
  }

  getTodos(): TodoInfo[] {
    return this.todos;
  }

  removeTodoByTitle(todoTitle: string) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.title === todoTitle),
      1
    );
  }
}
