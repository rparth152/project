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
  getempdetails(){
    const url="https://localhost:7247/api/Reports/fetchemp";
    return this.http.get(url)
  }
  getCSV(){
    const url="https://localhost:7247/api/Reports/ExportCSV";
    return this.http.get(url,{responseType:'blob'})
  }
  getPDF(){
    const url="https://localhost:7247/api/Reports/ExportPDF";
    return this.http.get(url,{responseType:'blob'})
  }
}
