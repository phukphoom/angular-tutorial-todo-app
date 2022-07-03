import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoInfo } from 'src/app/models/todo';

import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-adder',
  templateUrl: './todo-adder.component.html',
  styleUrls: ['./todo-adder.component.css'],
})
export class TodoAdderComponent implements OnInit {
  addTodoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  handleAddTodo(): void {
    this.todoService.addTodo(this.addTodoForm.value as TodoInfo);
  }
}
