import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { Reports } from '../reports';
import { Chart } from 'chart.js/auto';
import { saveAs } from 'file-saver';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-emp-status',
  imports: [MatTableModule, MatCardModule,MatToolbarModule, 
    MatButtonModule, ],
  templateUrl: './emp-status.html',
  styleUrl: './emp-status.scss',
})
export class EmpStatus {
  Estatus:any
  Empdata:any
  active:any
  inactive:any
  total:any
  // protected readonly title = signal('project');
constructor(private reportsService:Reports ,private cd:ChangeDetectorRef){
    
  }
  ngOnInit(){
    this.reportsService.getgraphdata().subscribe((data:any)=>{
      console.log(data);
      this.Estatus=data
      this.Graphshow();
      this.active =  this.Estatus.data.sactive;
      this.inactive =  this.Estatus.data.sinactive; 
      this.total =  this.Estatus.data.ecount; 
      this.cd.detectChanges();
    });
  this.reportsService.getempdetails().subscribe((emp:any)=>{
    console.log(emp);
      this.Empdata=emp.data
      this.cd.detectChanges();
  });
  }
 exportCSV(){
    // saveAs(csv, 'EmpdataCSV.csv');
    this.reportsService.getCSV().subscribe((csv:any)=>{
  saveAs(csv, 'EmpdataCSV.csv');
   });
 }
 exportPDF(){
   this.reportsService.getPDF().subscribe((pdf:any)=>{
    saveAs(pdf, 'EmpdataPDF.pdf');
   })
 }
 displayedColumns: string[] = [
  'employeeId',
  'firstName',
  'lastName',
  'email',
  'gender',
  'status',
  'joiningDate'
];
  Graphshow(){
  const active =  this.Estatus.data.sactive;
  const inactive =  this.Estatus.data.sinactive; 
  const total =  this.Estatus.data.ecount; 
  const ctx = document.getElementById('employeeChart') as HTMLCanvasElement;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Active', 'Inactive', 'Total'],
      datasets: [{
        label: 'Employee Stats',
        data: [active, inactive, total],

        backgroundColor: [
          'lightgreen',
          'lightred',
          'lightblue'
        ],
        borderColor: [
          'darkgreen',
          'darkred',
          'darkblue'
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
  }

  
}
