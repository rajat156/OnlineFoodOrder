import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';
import { YourorderComponent } from './yourorder/yourorder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './admin/admin.component';
import { BurgerComponent } from './burger/burger.component';
import { AlldataComponent } from './admin/alldata/alldata.component';
import { AdminheaderComponent } from './admin/alldata/adminheader/adminheader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ToastComponent,
    YourorderComponent,
    AdminComponent,
    BurgerComponent,
    AlldataComponent,
    AdminheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
