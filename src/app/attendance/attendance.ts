import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { Reports } from '../reports';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-attendance',
  imports: [MatTableModule, MatCardModule,MatToolbarModule, 
    MatButtonModule,CommonModule,MatToolbar],
  templateUrl: './attendance.html',
  styleUrl: './attendance.scss',
})
export class Attendance {
  Attendancegraph:any
  Attendancedata:any
  // protected readonly title = signal('project');
constructor(private reportsService:Reports ,private cd:ChangeDetectorRef){
    
  }
  ngOnInit(){
    this.reportsService.attendancegraph().subscribe((data:any)=>{
      console.log(data);
      this.Attendancegraph=data
      this.Graphshow();
      this.cd.detectChanges();
    });
  this.reportsService.attendancedata().subscribe((att:any)=>{
    console.log(att);
      this.Attendancedata=att.data
      this.cd.detectChanges();
  });
  }
  attendanceColumns: string[] = [
  'attendanceId',
  'employeeId',
  'date',
  'checkIn',
  'checkOut',
  'lunchIn',
  'lunchOut',
  'workingHours',
  'productionHours',
  'overtimeHours',
  'breakHours',
  'late',
  'status'
];
  Graphshow() {
    
  }
exportPDF: any;
exportCSV() {
throw new Error('Method not implemented.');
}
}
