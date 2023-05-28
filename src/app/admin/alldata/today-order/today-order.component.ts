import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-today-order',
  templateUrl: './today-order.component.html',
  styleUrls: ['./today-order.component.css']
})
export class TodayOrderComponent {

  todayOrder: any;
  displayStyle: string = 'none';
  foodUrl: any;
  foodName: any;
  foodPrice: any;
  displayIcon = faEye;
  constructor(private Service: AdminserviceService, private snackBar: MatSnackBar, private router: Router) {
    this.Service.getTodayOrder().subscribe((data) => {
      this.todayOrder = data;
    })
  }

  markOrder(data: any) {
    this.Service.markOrderComplete(data).subscribe(() => {
      this.openSnackBar('Change !', 'Close');
      this.reloadComponent();
    })
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000, // Optional: Specify the duration for which the snackbar will be displayed
    });
  }
  closePopup() {
    this.foodName = '';
    this.foodPrice = '';
    this.foodUrl = '';
    this.displayStyle = 'none';
  }

  openPopup(foodUrl: any, foodName: any, foodPrice: any) {
    this.foodName = foodName;
    this.foodUrl = foodUrl;
    this.foodPrice = foodPrice;
    this.displayStyle = 'block';
  }
}
