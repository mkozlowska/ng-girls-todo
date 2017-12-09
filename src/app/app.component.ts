import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
<todo-list-manager></todo-list-manager>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  addItem(title: string): void {    
  this.todoList.push({ title });
}
}
