import { Component,OnInit } from '@angular/core';
import { TodoItem } from './todo-item';
import SampleJson from '../assets/testdata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  todoItemList:TodoItem[] = [
    {
      itemDescription: "Clean Toilet",
      isCompleted: false,
      dateCreated: new Date(2022,11,1)
    },
    {
      itemDescription: "Clean room",
      isCompleted: true,
      dateCreated: new Date(2021,11,1),
      dateCompleted: new Date(2021,11,3)
    }
  ];
  ngOnInit(){
    this.getData();
  }
  getData(){
    console.log(SampleJson);
  }
}
