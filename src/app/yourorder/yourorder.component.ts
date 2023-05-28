import { Component, Input, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-yourorder',
  templateUrl: './yourorder.component.html',
  styleUrls: ['./yourorder.component.css']
})
export class YourorderComponent implements OnInit {

  @Input() customerData: any = '';
  item: any;
  yourOrder: any;
  bill: any;
  customerHistoryData: any;
  displayStyle: String = 'none';
  paymentBarcode = 'assets/images/WebsiteBarCode.jpg';
  displayStyleBar = 'none';
  constructor(private snackBar: MatSnackBar, private itemservice: ItemserviceService, private route: ActivatedRoute, private router: Router) {
    this.customerData = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {

    this.itemservice.getBill(this.customerData).subscribe((data) => {
      this.bill = data;
    })
    this.itemservice.getYourOrder(this.customerData).subscribe((data) => {
      this.item = data;
    });
    this.itemservice.getClientRecord(this.customerData).subscribe((data) => {
      this.yourOrder = data;

    })
  }
  deleteFunction(data: any) {
    this.itemservice.deleteItem(data).subscribe((data) => {

    });
    location.reload();
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

  submitOrder() {
    this.closePopupBar();
    this.itemservice.submitOrder(this.customerData).subscribe(() => {
      this.openSnackBar('Order Submit Successfully', 'close');
      this.reloadComponent();
    }, (error) => {
      this.openSnackBar('Please add item in cart', 'close');
    })
    // const snackBarRef = this.snackBar.open('Do you want to Submit Order', 'ok', {
    //   duration: 5000,
    // });
    // snackBarRef.afterDismissed().subscribe((dismissed) => {
    //   if (dismissed.dismissedByAction) {
    //     this.itemservice.submitOrder(this.customerData).subscribe(() => {
    //       this.openSnackBar('Order Submit Successfully', 'close');
    //       this.reloadComponent();
    //     }, (error) => {
    //       this.openSnackBar('Please add item in cart', 'close');
    //     })
    //   } else {
    //     this.openSnackBar('Order not Submit', 'close')
    //   }
    // });

  }

  customerHistory() {
    this.itemservice.getHistory(this.customerData).subscribe((data) => {
      this.customerHistoryData = data;
      this.displayStyle = 'block';
    })

  }
  closePopup() {
    this.displayStyle = 'none';
  }

  popupBar() {
    if (this.bill == 0) {
      this.openSnackBar('Please add item in cart', 'close');
      return;
    }
    this.displayStyleBar = 'block';
  }

  closePopupBar() {
    this.displayStyleBar = 'none';
  }
}
