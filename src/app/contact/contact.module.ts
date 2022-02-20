import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactModule {
}
