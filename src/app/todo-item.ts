export class TodoItem {
    itemDescription:string;
    isCompleted:boolean;
    dateCreated: Date;
    dateCompleted?:Date;
    
    constructor(json:any) {
        this.itemDescription = json.itemDescription;
        this.isCompleted = json.isCompleted;
        this.dateCreated = new Date(json.dateCreated);
        this.dateCompleted = new Date(json.dateCompleted)
        
    }
}
