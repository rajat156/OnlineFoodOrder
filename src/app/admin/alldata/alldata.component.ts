import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent {
  constructor(private route: Router) {
    if (!localStorage.getItem('akbkacbkbkb')) {
      this.route.navigateByUrl('/admin')
    }
    
  }
}
