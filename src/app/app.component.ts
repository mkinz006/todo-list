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

  todoItemList:TodoItem[] = this.getData().map(x => new TodoItem(x));
  ngOnInit(){
    this.getData();
  }
  getData(){
    return SampleJson;
  }
}
