import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `                         
   <input [value]="title"              
       (keyup.enter)="changeTitle(inputElement)"
       #inputElement class="todo-input">

<button class="btn btn-red" (click)="changeTitle(inputElement)">
  Save
</button>
  `,  
  styleUrls: ['./input.component.css']  
})    
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = '';           

  constructor() { }                     

  ngOnInit() {
  }

changeTitle(inputElement): void {
  this.submit.emit(inputElement.value);
}
}