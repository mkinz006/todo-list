import { Component } from '@angular/core';
import { TodoItem } from './todo-item';

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
      dateCreated: new Date(2022,12,1)
    },
    {
      itemDescription: "Clean room",
      isCompleted: true,
      dateCreated: new Date(2022,12,1),
      dateCompleted: new Date(2022,12,3)
    }
  ];
}
