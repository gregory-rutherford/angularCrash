import { Component, OnInit } from '@angular/core';
import {ToDo} from "../../Models/ToDo";
  import { from } from 'rxjs';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos:ToDo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "eat sand",
        completed: false
      },
      {
        id: 2,
        title: "get more sand",
        completed: true
      },
      {
        id: 3,
        title: "eat sand",
        completed: false
      }
    ];
  }

}
