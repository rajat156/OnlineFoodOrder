import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemserviceService } from '../itemservice.service';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { AdminserviceService } from '../services/adminservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  nearbyStoreIcon = faBuilding;
  todayDealIcon = faPercentage;
  cartIcon = faCartArrowDown;
  customerData: any;
  foodByItem: any;
  tableDisplay = false;
  isToast: boolean = false;
  yourOrder: boolean = false;
  displayStyle = 'none';
  booking = false;
  constructor(private route: ActivatedRoute, private itemservice: ItemserviceService,private adminService:AdminserviceService) {
    this.customerData = this.route.snapshot.paramMap.get('id');
  }
  foodItem(itemName: String) {
    this.tableDisplay = true;
    this.yourOrder = false;
    this.itemservice.getFoodByItem(itemName).subscribe((item) => {
      this.foodByItem = item;
    })
  }

  searchItem(data: any) {
    this.tableDisplay = true;
    if (data != null) {
      this.itemservice.searchItem(data).subscribe((item) => {
        console.log(item);
        this.foodByItem = item;
      })
    }
  }



  addItemOfCustomer(itemId: any, customerId: any) {
    this.itemservice.addItemOfCustomer(itemId, customerId).subscribe((item) => {
      this._toasts.forEach(f => {
        f.isShow = true;
      })
    });

  }

  // Alert on add item

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

  closePopup() {
    this.displayStyle = 'none';
  }

  openPopup() {
    console.log('hello')
    this.displayStyle = 'block';
  }


  bookingRequest(data: any) {
    
    console.log(data)
    this.adminService.bookingRequestSubmit(data).subscribe(()=>{
      this.booking = true;
    });
  }
}
