import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';
import { YourorderComponent } from './yourorder/yourorder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './admin/admin.component';
import { BurgerComponent } from './burger/burger.component';
import { AlldataComponent } from './admin/alldata/alldata.component';
import { AdminheaderComponent } from './admin/alldata/adminheader/adminheader.component';
import { OrderComponent } from './order/order.component';
import { DeesertsComponent } from './deeserts/deeserts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PizzaComponent } from './pizza/pizza.component';
import { FooterComponent } from './footer/footer.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { TodayOrderComponent } from './admin/alldata/today-order/today-order.component';
import { AddItemComponent } from './admin/alldata/add-item/add-item.component';
import { TodayOfferComponent } from './admin/alldata/today-offer/today-offer.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BookingComponent } from './admin/alldata/booking/booking.component';
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
    AdminheaderComponent,
    OrderComponent,
    DeesertsComponent,
    PizzaComponent,
    FooterComponent,
    SandwichComponent,
    TodayDealsComponent,
    TodayOrderComponent,
    AddItemComponent,
    TodayOfferComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
