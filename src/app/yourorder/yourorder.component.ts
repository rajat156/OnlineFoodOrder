import { Component, Input ,OnInit} from '@angular/core';
import {ItemserviceService} from '../itemservice.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-yourorder',
  templateUrl: './yourorder.component.html',
  styleUrls: ['./yourorder.component.css']
})
export class YourorderComponent  implements OnInit{

  @Input() customerData:any='';
  item:any;
  yourOrder:any;
  constructor(private itemservice:ItemserviceService,private route:ActivatedRoute){
    this.customerData=this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    
      this.itemservice.getYourOrder(this.customerData).subscribe((data)=>{
      this.item=data;
    });
    this.itemservice.getClientRecord(this.customerData).subscribe((data)=>{
      this.yourOrder=data;
    })
  }
  deleteFunction(data:any){
    this.itemservice.deleteItem(data).subscribe((data)=>{

    });
    location.reload();
  }
}
