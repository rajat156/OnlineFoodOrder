import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseApiUrl } from './core/constant';
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http: HttpClient) { }
  baseUrl = baseApiUrl;
  url = this.baseUrl + 'getAllFood';
  urlPostRecord = this.baseUrl + 'saveRecord';
  urlSearchRecord = this.baseUrl + 'searchFood';
  urlgetYourOrder = this.baseUrl + 'getRecord';
  getFoodByItem(data: String) {
    return this.http.get(this.url + '/' + data);
  }
  itemData: any = [];
  addItemOfCustomer(itemId: any, customerId: any) {
    this.itemData = { 'customerId': customerId, 'itemId': itemId };
    return this.http.post(this.urlPostRecord, this.itemData);
  }

  getBill(data: any) {
    return this.http.get(this.baseUrl + 'totalBill/' + data)
  }

  searchItem(data: any) {
    return this.http.get(this.urlSearchRecord + '/' + data);
  }

  getYourOrder(data: any) {
    return this.http.get(this.urlgetYourOrder + '/' + data);
  }

  getClientRecord(data: any) {
    return this.http.get(this.baseUrl + 'getClientRecord/' + data);
  }
  deleteItem(data: any) {
    return this.http.get(this.baseUrl + 'deleteClientRecord/' + data);
  }

  setEmail(data: any) {
    return this.http.post(this.baseUrl + 'setClientEmail', data);
  }

  getTodayDeals() {
    return this.http.get(this.baseUrl + 'todayDeals');
  }

  submitOrder(data: any) {
    return this.http.get(this.baseUrl + 'submitOrder/' + data);
  }

  getHistory(data: any) {
    this.http.get('https://api.ipify.org?format=json').subscribe((response: any) => {
      const ipv4Address = response.ip;
      console.log('Client IPv4 Address:', ipv4Address);
      // Do something with the IPv4 address
    });
    return this.http.get(this.baseUrl + 'customerHistory/' + data)
  }
}
