import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {

  constructor(private route: Router) { }

  logout() {
    localStorage.removeItem('akbkacbkbkb')
    this.route.navigateByUrl('/admin');
    return;
  }
}
