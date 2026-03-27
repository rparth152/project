import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Reports {
  constructor(private http:HttpClient){}
  getgraphdata(){
     const url="https://localhost:7247/api/Reports/empstatus";
     return this.http.get(url)
  }
}
