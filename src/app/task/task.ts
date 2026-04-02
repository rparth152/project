import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { Reports } from '../reports';
import { Chart } from 'chart.js';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task',
  imports: [MatCard ,MatTableModule, MatCardModule,MatToolbarModule, 
    MatButtonModule,CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
constructor(private reportsService:Reports,private cd:ChangeDetectorRef){
      
    }
    Taskdata:any;
  active:any
  inactive:any
    ngOnInit(){
      this.reportsService.taskgraph().subscribe((data:any)=>{
        console.log(data);
        this.TaskGraph(data);
        this.active =  data.data.taskActive;
        this.inactive =  data.data.taskInactive;

        this.cd.detectChanges();
      });
        this.reportsService.tasktable().subscribe((Task:any)=>{
    console.log(Task);
      this.Taskdata=Task.data
      this.cd.detectChanges();
  });
    }

exportCSV() {
throw new Error('Method not implemented.');
}
exportPDF() {
throw new Error('Method not implemented.');
}
taskColumns: string[] = [
  'taskId',
  'title',
  'projectName',
  'dueDate',
  'priority',
  'status'
];
TaskGraph(data:any){
      const active =  data.data.taskActive;
  
      const inactive =  data.data.taskInactive;
      const ctx = document.getElementById('TaskChart') as HTMLCanvasElement;

      new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Active', 'Inactive'],
      datasets: [{
        label: 'Project Stats',
        data: [active, inactive],

        backgroundColor: [
          'green',
          'red'
        ],
        borderColor: [
          'darkgreen',
          'darkred'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}}
