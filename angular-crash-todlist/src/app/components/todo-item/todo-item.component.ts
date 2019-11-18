import { Component, OnInit, Input } from '@angular/core';
import {ToDo} from "src/app/Models/ToDo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  constructor() { }

  ngOnInit() {
  }

}
