import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  bookingRequest: any;
  constructor(private Service: AdminserviceService, private snackBar: MatSnackBar, private router: Router) {
    this.Service.getAllBookingRequest().subscribe((data) => {
      this.bookingRequest = data;
    })
  }

  rejectRequest(data: any) {
    this.Service.rejectBookingRequest(data).subscribe(() => {
      this.reloadComponent();
      this.openSnackBar('Request Reject', 'close')
    })
  }

  acceptRequest(data: any) {
    this.Service.acceptBookingRequest(data).subscribe(() => {
      this.reloadComponent();
      this.openSnackBar('Request Accept', 'close')
    })
  }

  reloadComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  completeRequest(data: any) {
    this.Service.completeBookingRequest(data).subscribe(() => {
      this.reloadComponent();
      this.openSnackBar('Complete', 'close');
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000, // Optional: Specify the duration for which the snackbar will be displayed
    });
  }
}
