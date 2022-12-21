export interface TodoItem {
completed(): unknown;
    itemDescription:string,
    isCompleted:boolean,
    dateCreated: Date,
    dateCompleted?:Date,
}
