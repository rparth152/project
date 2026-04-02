import { ChangeDetectorRef, Component } from '@angular/core';
import { Reports } from '../reports';
import { Chart } from 'chart.js/auto';
import { saveAs } from 'file-saver';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-leaves',
  imports: [MatCard ,MatTableModule, MatCardModule,MatToolbarModule, 
    MatButtonModule,CommonModule],
  templateUrl: './leaves.html',
  styleUrl: './leaves.scss',
})
export class Leaves {
exportPDF: any;
exportCSV() {
throw new Error('Method not implemented.');
}
  Leavedata:any;
  active:any
  total:any
  inactive:any
    constructor(private reportsService:Reports,private cd:ChangeDetectorRef){
      
    }
    ngOnInit(){
      this.reportsService.leavegraph().subscribe((data:any)=>{
        console.log(data);
        this.LeaveGraph(data);
        this.active =  data.data.leaveactive;
        this.total =  data.data.leave;
        this.inactive= data.data.leaveinactive;
        this.cd.detectChanges();
      });
        this.reportsService.leavetable().subscribe((leave:any)=>{
    console.log(leave);
      this.Leavedata=leave.data
      this.cd.detectChanges();
  });
    }
leaveColumns: string[] = [
  'leaveRequestId',
  'employeeId',
  'leaveTypeId',
  'startDate',
  'endDate',
  'numberOfDays',
  'reason',
  'approvedBy',
  'status',
  'statusHistory'
];
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
