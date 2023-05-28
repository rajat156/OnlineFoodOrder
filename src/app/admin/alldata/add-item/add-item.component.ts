import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {

  item: any;
  displayStyle: string = 'none';
  @ViewChild('form', { static: false }) form!: NgForm;
  constructor(private route: Router, private adminService: AdminserviceService, private snackBar: MatSnackBar) {
    if (!localStorage.getItem('akbkacbkbkb')) {
      this.route.navigateByUrl('/admin')
      return;
    }
    this.adminService.getAllFood().subscribe((item) => {
      this.item = item;
    })
   
  }

  addItem(data: any) {
    if (!this.form.valid) {
      alert('Fill All Field')
      return;
    }
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
