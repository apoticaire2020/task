import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasc:Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
getTasks(){
  this.taskService.getAll().subscribe(tasc=>this.tasc=tasc)
}
}
