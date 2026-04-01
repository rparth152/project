import { ChangeDetectorRef, Component } from '@angular/core';
import { Reports } from '../reports';
import { Chart } from 'chart.js/auto';
import { saveAs } from 'file-saver';
import { MatCard } from "@angular/material/card";
@Component({
  selector: 'app-leaves',
  imports: [MatCard],
  templateUrl: './leaves.html',
  styleUrl: './leaves.scss',
})
export class Leaves {
  Leavedata:any;
    constructor(private reportsService:Reports,private cd:ChangeDetectorRef){
      
    }
    ngOnInit(){
      this.reportsService.leavegraph().subscribe((data:any)=>{
        console.log(data);
        this.LeaveGraph(data);
      
      });
        this.reportsService.getempdetails().subscribe((leave:any)=>{
    console.log(leave);
      this.Leavedata=leave.data
      this.cd.detectChanges();
  });
    }
    LeaveGraph(data:any){
      const active =  data.data.leaveactive;
  
      const Total =  data.data.leave;
      const ctx = document.getElementById('leaveChart') as HTMLCanvasElement;

      new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Active', 'Total'],
      datasets: [{
        label: 'Leave Stats',
        data: [active, Total],

        backgroundColor: [
          'blue',
          'green'
        ],
        borderColor: [
          'darkblue',
          'darkgreen'
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
