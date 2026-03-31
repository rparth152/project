import { Component, signal } from '@angular/core';
import { Reports } from '../reports';
import { Chart } from 'chart.js/auto';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-emp-status',
  imports: [],
  templateUrl: './emp-status.html',
  styleUrl: './emp-status.scss',
})
export class EmpStatus {
  Estatus:any
  Empdata:any
  protected readonly title = signal('project');
constructor(private reportsService:Reports){
    
  }
  ngOnInit(){
    this.reportsService.getgraphdata().subscribe((data:any)=>{
      console.log(data);
      this.Estatus=data
      this.Graphshow();
    
    });
  this.reportsService.getempdetails().subscribe((emp:any)=>{
    console.log(emp);
      this.Empdata=emp.data
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
