import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BurgerComponent } from './burger/burger.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { YourorderComponent } from './yourorder/yourorder.component';
import { FormsModule } from '@angular/forms'
import { AlldataComponent } from './admin/alldata/alldata.component';
import { OrderComponent } from './order/order.component';
import { DeesertsComponent } from './deeserts/deeserts.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { TodayOrderComponent } from './admin/alldata/today-order/today-order.component';
import { AddItemComponent } from './admin/alldata/add-item/add-item.component';
import { TodayOfferComponent } from './admin/alldata/today-offer/today-offer.component';
import { BookingComponent } from './admin/alldata/booking/booking.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: "home", pathMatch: "full"
  },
  {
    path: 'order/:id',
    component: OrderComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'yourOrder/:id',
    component: YourorderComponent
  },
  {
    path: 'burger/:id',
    component: BurgerComponent
  },
  {
    path: 'abcjkabckj_akbcak',
    component: AlldataComponent
  },
  { path: 'desserts/:id', component: DeesertsComponent },
  { path: 'pizza/:id', component: PizzaComponent },
  { path: 'sandwich/:id', component: SandwichComponent },
  { path: 'todayDeals/:id', component: TodayDealsComponent },
  { path: 'admin/todayOrder', component: TodayOrderComponent },
  { path: 'admin/additem', component: AddItemComponent },
  { path: 'admin/todayOffer', component: TodayOfferComponent },
  { path: 'admin/booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), FormsModule],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
