import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterHelperService} from '../assets/service/router-helper.service';
import {SharedModule} from './shared/shared.module';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule

  ],
  providers: [RouterHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
