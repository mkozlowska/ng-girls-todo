import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
   <div class="todo-item"> 
   <input type="checkbox" (click)="completeItem()"/>
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
      {{ toDoItem.title }}
    </p>
    <button (click)="removeItem()" class="btn-red">
  remove
</button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() toDoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.toDoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
