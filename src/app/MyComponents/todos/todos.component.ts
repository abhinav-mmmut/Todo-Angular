import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]
  localItem:string
  constructor() {
    this.localItem=localStorage.getItem("todos")
    if(this.localItem==null){
      this.todos=[]
    }
    else{
      this.todos=JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    console.log("onClick has been triggered!")
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
    console.log("todo deleted!")
  }
  todoAdd(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
    console.log("todo added!")
  }
  onCheckBoxClick(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
