import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BurgerComponent } from './burger/burger.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { YourorderComponent } from './yourorder/yourorder.component';
import {FormsModule}  from '@angular/forms'
import { AlldataComponent } from './admin/alldata/alldata.component';
import { OrderComponent } from './order/order.component';
import { DeesertsComponent } from './deeserts/deeserts.component';
const routes: Routes = [
  {
    path:'home',
  component:HomeComponent
},
{
  path:'',redirectTo:"home",pathMatch:"full"
},
{
  path:'order/:id',
  component:OrderComponent
},
{
  path:'admin',
  component:AdminComponent
},
{
  path:'yourOrder/:id',
  component:YourorderComponent
},
{
  path:'burger/:id',
  component:BurgerComponent
},
{
  path:'abcjkabckj_akbcak',
  component:AlldataComponent
},
{path:'desserts/:id',component:DeesertsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
