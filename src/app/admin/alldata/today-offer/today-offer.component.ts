import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
@Component({
  selector: 'app-today-offer',
  templateUrl: './today-offer.component.html',
  styleUrls: ['./today-offer.component.css']
})
export class TodayOfferComponent {


  item: any;
  displayStyle: string = 'none';
  constructor(private route: Router, private adminService: AdminserviceService, private snackBar: MatSnackBar) {
    if (!localStorage.getItem('akbkacbkbkb')) {
      this.route.navigateByUrl('/admin')
      return;
    }
    this.adminService.getTodayOffer().subscribe((item) => {
      this.item = item;
    })
  }

  addItem(data: any) {
    this.adminService.saveFood(data).subscribe(() => {
      this.openSnackBar('Item Save Successful', 'Close');
    })
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000, // Optional: Specify the duration for which the snackbar will be displayed
    });
  }

  deleteItem(data: any) {
    this.adminService.deleteItem(data).subscribe(() => {
      this.openSnackBar('Item Deleted', 'Close');
    })
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  openPopup() {
    this.displayStyle = 'block';
  }
}
