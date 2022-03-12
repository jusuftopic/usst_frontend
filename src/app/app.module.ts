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
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

const config =  {
  apiKey: "AIzaSyAduI4GedIcmXEwcLyMd8Sa68ppG0FW5mo",
    authDomain: "tempo-cb7a0.firebaseapp.com",
    projectId: "tempo-cb7a0",
    storageBucket: "tempo-cb7a0.appspot.com",
    messagingSenderId: "567344323553",
    appId: "1:567344323553:web:a9ff0095aa3d1e2211d0a0",
    measurementId: "G-QYCJ8S6XFL"
}

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
    MatDialogModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [RouterHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
