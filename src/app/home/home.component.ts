import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
    if (localStorage.getItem('customerId')) {
      this.router.navigateByUrl('/order/' + localStorage.getItem('customerId'));
      return;
    }

    this.customerId = this.customerIdGenerate();
    localStorage.setItem('customerId', this.customerId);
  }

  burgerIcon = faBurger;
  OrderFood: string = "assets/images/HomePage.png";
  OrderFoodImage: boolean = true;
  customerId: any;
  customerIdGenerate() {
    return Math.floor(Math.random() * 1000);
  }
}
