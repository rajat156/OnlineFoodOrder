import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AdminserviceService } from '../services/adminservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  logo = faBowlFood;
  adminLoginImage: string = 'assets/images/AdminLogin.jpg';

  notMatch: string = '';
  constructor(private snackBar: MatSnackBar, private adminservice: AdminserviceService, private route: Router) {
    if (localStorage.getItem('akbkacbkbkb')) {
      this.route.navigateByUrl('/admin/todayOrder');
    }
  }

  AdminDetails: any = [];
  checkAdmin(item: any) {
    this.adminservice.getAdmin(item).subscribe((data) => {
      localStorage.setItem('akbkacbkbkb', 'abc');
      this.route.navigateByUrl('/admin/todayOrder');
    }, (error) => {
      this.openSnackBar('Wrong Details !', 'Close');
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000, // Optional: Specify the duration for which the snackbar will be displayed
    });
  }
}
