import { Component,Input } from '@angular/core';
import {ItemserviceService} from '../itemservice.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-deeserts',
  templateUrl: './deeserts.component.html',
  styleUrls: ['./deeserts.component.css']
})
export class DeesertsComponent {

  item:any;
  isToast:boolean=false;
  @Input() customerData:any='';
  constructor(private route:ActivatedRoute,private itemService:ItemserviceService){
    this.customerData=this.route.snapshot.paramMap.get('id');
    this.itemService.getFoodByItem('DESSERTS').subscribe((item)=>{
      this.item=item;
    })
  }

  addItemOfCustomer(itemId:any,customerId:any){
    this.itemService.addItemOfCustomer(itemId,customerId).subscribe((item)=>{
      this._toasts.forEach(f =>{
        f.isShow = true;
      })
    });
    setInterval(()=>{
      this._toasts.forEach(f =>{
        f.isShow = false;
      })
    },1800)
  }

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
