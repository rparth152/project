import { Component } from '@angular/core';
import { Reports } from '../reports';
import { Chart } from 'chart.js/auto';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-leaves',
  imports: [],
  templateUrl: './leaves.html',
  styleUrl: './leaves.scss',
})
export class Leaves {
    constructor(private reportsService:Reports){
      
    }
    ngOnInit(){
      this.reportsService.leavegraph().subscribe((data:any)=>{
        console.log(data);
        this.LeaveGraph(data);
      
      });
    }
    LeaveGraph(data:any){
      const active =  data.data.active;
      const pending =  data.data.pending; 
      const rejected =  data.data.rejected; 
      const ctx = document.getElementById('leaveChart') as HTMLCanvasElement;
}}
