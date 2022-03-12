import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminRoutingModule} from './admin-routing.module';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AdminPermission} from '../../assets/permission/adminPermission';



@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    TextBoxModule,
    ReactiveFormsModule
  ],
  providers: [AdminPermission]
})
export class AdminModule { }
