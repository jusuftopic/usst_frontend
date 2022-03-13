import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminPermission} from '../../assets/permission/adminPermission';
import { AuthGuradService } from 'src/assets/service/guard/auth-gurad.service';


const routes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuradService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {

}
