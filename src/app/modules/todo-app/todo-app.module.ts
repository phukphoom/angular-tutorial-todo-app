import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAppRoutingModule } from './todo-app-routing.module';

import { TodoAppComponent } from './todo-app.component';
import { TodoAdderComponent } from './todo-adder/todo-adder.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodoService } from '../../services/todo.service';

@NgModule({
  declarations: [
    TodoAppComponent,
    TodoAdderComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TodoAppRoutingModule],
  providers: [TodoService],
})
export class TodoAppModule {}
