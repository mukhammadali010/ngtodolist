import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone:true,
  imports: [FormsModule , CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  taskName = '';
  tasks: string[]=[];

  addTask (){
    if(this.taskName.trim()){
      this.tasks.push(this.taskName.trim());
      this.taskName = '';
    }
  }

  onDelete(index:number){
   this.tasks.splice(index ,1)
    
  }
}
