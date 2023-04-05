import { Component } from '@angular/core';
import {faBurger} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  burgerIcon = faBurger;
  OrderFood:string = "assets/images/HomePage.png";
  OrderFoodImage:boolean=true;
  customerId:any=this.customerIdGenerate();
  customerIdGenerate(){
    return Math.floor(Math.random()*1000);
  }
}