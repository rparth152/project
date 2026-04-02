import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Chart } from 'chart.js';
import { Reports } from '../reports';

@Component({
  selector: 'app-proj',
  imports: [MatCard ,MatTableModule, MatCardModule,MatToolbarModule, 
    MatButtonModule,CommonModule],
  templateUrl: './proj.html',
  styleUrl: './proj.scss',
})
export class Proj {
constructor(private reportsService:Reports,private cd:ChangeDetectorRef){
      
    }
    Projdata:any;
  active:any
  inactive:any
    ngOnInit(){
      this.reportsService.projgraph().subscribe((data:any)=>{
        console.log(data);
        this.ProjGraph(data);
        this.active =  data.data.projActive;
        this.inactive =  data.data.projInactive;

        this.cd.detectChanges();
      });
        this.reportsService.projtable().subscribe((proj:any)=>{
    console.log(proj);
      this.Projdata=proj.data
      this.cd.detectChanges();
  });
    }
    exportPDF() {
throw new Error('Method not implemented.');
}
exportCSV() {
throw new Error('Method not implemented.');
}
projectColumns: string[] = [
  'projectId',
  'projectName',
  'deadline',
  'priority',
  'status'
];
    ProjGraph(data:any){
      const active =  data.data.projActive;
  
      const inactive =  data.data.projInactive;
      const ctx = document.getElementById('ProjChart') as HTMLCanvasElement;

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

