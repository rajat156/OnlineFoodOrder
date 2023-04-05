import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrderBillingGUI';
   
    flag=true;
    customerId='';
    getCustomerId(){
      console.log('hello')
      this.flag=false;
      return "hello";
    }
}
