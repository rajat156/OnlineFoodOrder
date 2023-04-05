import { Component } from '@angular/core';
import{faBowlFood} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {AdminserviceService} from '../services/adminservice.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  logo = faBowlFood;
  adminLoginImage:string='assets/images/AdminLogin.jpg';

  notMatch:string='';
  constructor(private adminservice:AdminserviceService,private route:Router){}

  AdminDetails:any=[];
  checkAdmin(item:any){
    this.adminservice.getAdmin(item).subscribe((data)=>{
      console.log('match');
      this.route.navigateByUrl('/abcjkabckj_akbcak');
    },(error)=>{
      this.notMatch='Wrong Admin details';
    
      setInterval(()=>{
        this.notMatch='';
      },5000);
    });  
  }  
}
