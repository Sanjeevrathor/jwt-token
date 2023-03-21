import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
   { path: '', component: DashboardComponent,
    children:[
      {path:'',component:UserListComponent},
      {path:'user-list',component:UserListComponent},
      {path:'emp-create', component:EmployeeCreateComponent},
      {path:'emp-edit/:id', component:EmployeeEditComponent},
      {path:'emp-view/:id', component:EmployeeViewComponent}
    ]
  }

  // {
  //   path: '', children: [
  //     { path: 'user-list', component: UserListComponent },
      
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
