import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent {
  @Input() todoItem: TodoItem = {dateCreated : new Date(),isCompleted:false,itemDescription:''}

}
