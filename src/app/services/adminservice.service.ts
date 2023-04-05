import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  addAdminUrl:string='http://localhost:8087/saveAdmin';

  adminData:any=[];
  saveAdmin(email:any,password:any){
   this.adminData= {'email':email,'password':password};
    this.http.post(this.addAdminUrl,this.adminData);
  }

  getAdmin(data:any){
    return this.http.post('http://localhost:8087/checkAdmin',data);
  }
}
