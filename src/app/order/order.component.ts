import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  customerData:any;
  constructor(private route:ActivatedRoute){
    this.customerData=this.route.snapshot.paramMap.get('id');
  }
}
