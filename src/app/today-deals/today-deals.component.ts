import { Component, Input } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { ActivatedRoute } from '@angular/router';
import { } from '@fortawesome/free-regular-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-today-deals',
  templateUrl: './today-deals.component.html',
  styleUrls: ['./today-deals.component.css']
})
export class TodayDealsComponent {



  item: any;
  isToast: boolean = false;
  @Input() customerData: any = '';
  constructor(private snackBar: MatSnackBar, private itemservice: ItemserviceService, private route: ActivatedRoute) {
    this.customerData = this.route.snapshot.paramMap.get('id');
    this.itemservice.getFoodByItem('TODAYMEALS').subscribe((item) => {
      this.item = item;
    })
  }

  addItemOfCustomer(itemId: any, customerId: any) {
    this.itemservice.addItemOfCustomer(itemId, customerId).subscribe((item) => {
      this._toasts.forEach(f => {
        f.isShow = true;
      })
    });
    setInterval(() => {
      this._toasts.forEach(f => {
        f.isShow = false;
      })
    }, 1800)
  }

  _toasts: Array<any> = [
    { title: 'Alert', message: 'Successfully Added..', date: new Date(), isShow: false }
  ]
  get toasts() {
    return this._toasts.filter(f => f.isShow);
  }
  reset() {
    this._toasts.forEach(f => {
      f.isShow = true;
    })
  }
}
