import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reports } from './reports';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  Estatus:any
  protected readonly title = signal('project');
  constructor(private reportsService:Reports){

  }
  ngOnInit(){
    this.reportsService.getgraphdata().subscribe((data:any)=>{
      console.log(data);
      this.Estatus=data
    })
  }
}
