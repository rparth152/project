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
  leavegraph(){
    const url="https://localhost:7247/api/Reports/LeaveGraph";
    return this.http.get(url)
  }
  leavetable(){
    const url="https://localhost:7247/api/Reports/fleaves";
    return this.http.get(url)
  }
  attendancedata(){
    const url="https://localhost:7247/api/Reports/fattendance";
    return this.http.get(url)
  }
  attendancegraph(){
    const url="https://localhost:7247/api/Reports/AttendanceGraph";
    return this.http.get(url)
  }
  projgraph(){
    const url="https://localhost:7247/api/Reports/ProjGraph";
    return this.http.get(url)
  }
  projtable(){
    const url="https://localhost:7247/api/Reports/ProjTable";
    return this.http.get(url)
  }
  taskgraph(){
    const url="https://localhost:7247/api/Reports/TaskGraph";
    return this.http.get(url)
  }
  tasktable(){
    const url="https://localhost:7247/api/Reports/TaskTable";
    return this.http.get(url)
  }
}
