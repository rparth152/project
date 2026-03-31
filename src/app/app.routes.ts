import { Routes } from '@angular/router';
import { EmpStatus } from './emp-status/emp-status';
import { Leaves } from './leaves/leaves';
import { Error404 } from './error404/error404';
export const routes: Routes = [
{path:'emp-status',component:EmpStatus},
{path:'leaves',component:Leaves},
{path:'**',component:Error404}

];
