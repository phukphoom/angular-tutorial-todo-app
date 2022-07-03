import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Todo } from '../../../models/todo.model';

import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-adder',
  templateUrl: './todo-adder.component.html',
  styleUrls: ['./todo-adder.component.css'],
})
export class TodoAdderComponent implements OnInit {
  form = this.formBuilder.group({
    title: '',
    description: '',
  });

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  handleAddTodo(): void {
    this.todoService.addTodo(this.form.value as Todo);
  }
}
