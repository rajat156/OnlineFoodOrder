import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8085/getAllFood';
  urlPostRecord='http://localhost:8085/saveRecord';
  urlSearchRecord='http://localhost:8085/searchFood';
  urlgetYourOrder='http://localhost:8085/getRecord';
  getFoodByItem(data:String){
    return this.http.get(this.url+'/'+data);
  }
  itemData:any=[];
  addItemOfCustomer(itemId:any,customerId:any){
    this.itemData={'customerId':customerId,'itemId':itemId};
    return this.http.post(this.urlPostRecord,this.itemData);
  }

  searchItem(data:any){
    return this.http.get(this.urlSearchRecord+'/'+data);
  }

  getYourOrder(data:any){
    return this.http.get(this.urlgetYourOrder+'/'+data);
  }

  getClientRecord(data:any){
    return this.http.get('http://localhost:8085/getClientRecord/'+data);
  }
  deleteItem(data:any){
    return this.http.get('http://localhost:8085/deleteClientRecord/'+data);
  }
}
