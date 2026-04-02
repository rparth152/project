import { Routes } from '@angular/router';
import { EmpStatus } from './emp-status/emp-status';
import { Leaves } from './leaves/leaves';
import { Error404 } from './error404/error404';
import { Proj } from './proj/proj';
import { Task } from './task/task';
import { Attendance } from './attendance/attendance';
export const routes: Routes = [
{path:'',redirectTo:'emp-status',pathMatch:'full'},
{path:'emp-status',component:EmpStatus},
{path:'leaves',component:Leaves},
{path:'proj',component:Proj},
{path:'task',component:Task},
{path:'attendance',component:Attendance},
{path:'**',component:Error404}

];
