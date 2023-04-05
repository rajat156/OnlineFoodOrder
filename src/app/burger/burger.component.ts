import { Component , Input} from '@angular/core';
import {ItemserviceService} from '../itemservice.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {

  

  item:any;
  isToast:boolean=false;
  @Input() customerData:any='';
  constructor(private itemservice:ItemserviceService,private route:ActivatedRoute){
    this.customerData=this.route.snapshot.paramMap.get('id');
    this.itemservice.getFoodByItem('BURGER').subscribe((item)=>{
      this.item=item;
    })
  }

  addItemOfCustomer(itemId:any,customerId:any){
    this.itemservice.addItemOfCustomer(itemId,customerId).subscribe((item)=>{
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
