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
updateDatabase = async() => {
console.log("Placeholder for updating DB")
}
saveItem(adderText:string) {
this.updateDatabase();
this.itemList.push({
  dateCreated: new Date(),
  isCompleted: false,
  itemDescription: adderText,

})
}


}
