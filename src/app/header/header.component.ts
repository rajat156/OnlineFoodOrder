import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {ItemserviceService} from '../itemservice.service'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  cartIcon = faCartArrowDown;
  customerData:any;
  foodByItem:any;
  tableDisplay=false;
  isToast:boolean=false;
  yourOrder:boolean=false;
  constructor(private route:ActivatedRoute,private itemservice:ItemserviceService){
    this.customerData=this.route.snapshot.paramMap.get('id');
  }
  foodItem(itemName:String){
    this.tableDisplay=true;
    this.yourOrder=false;
    this.itemservice.getFoodByItem(itemName).subscribe((item)=>{
      this.foodByItem=item;
    })
  }

  searchItem(data:any){
    this.tableDisplay=true;
    if(data!=null){
    this.itemservice.searchItem(data).subscribe((item)=>{
      console.log(item);
      this.foodByItem=item;
    })}
  }

 
 
  addItemOfCustomer(itemId:any,customerId:any){
    this.itemservice.addItemOfCustomer(itemId,customerId).subscribe((item)=>{
      this._toasts.forEach(f =>{
        f.isShow = true;
      })
    });
    
  }

  // Alert on add item

  _toasts:Array<any>=[
    {title:'Alert', message:'Successfully Added..', date:new Date(), isShow:false}
  ]
  get toasts(){
    return this._toasts.filter(f => f.isShow);
  }
  reset(){
    this._toasts.forEach(f =>{
      f.isShow = true;
    })
  }
}
