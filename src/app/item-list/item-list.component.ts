import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../todo-item';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() itemList: TodoItem[] = [];

  constructor(){};
  ngOnInit():void{};
saveItem(adderText:string) {
this.itemList.push({
  dateCreated: new Date(),
  isCompleted: false,
  itemDescription: adderText,

})
}

}
