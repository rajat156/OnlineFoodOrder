import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseApiUrl } from '../core/constant';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  addAdminUrl: string = baseApiUrl + 'saveAdmin';
  baseUrl: string = baseApiUrl;

  adminData: any = [];
  saveAdmin(email: any, password: any) {
    this.adminData = { 'email': email, 'password': password };
    this.http.post(this.addAdminUrl, this.adminData);
  }

  getAdmin(data: any) {
    return this.http.post(this.baseUrl + 'checkAdmin', data);
  }

  getTodayOrder() {
    return this.http.get(this.baseUrl + 'todayOrder');
  }

  saveFood(data: any) {
    return this.http.post(this.baseUrl + 'saveFood', data);
  }

  getAllFood() {
    return this.http.get(this.baseUrl + 'getAllFoodForAdmin');
  }

  deleteItem(data: any) {
    return this.http.delete(this.baseUrl + 'deleteFoodFromTable/' + data);
  }

  markOrderComplete(data: any) {
    return this.http.put(this.baseUrl + 'markOrderComplete', data);
  }

  getTodayOffer() {
    return this.http.get(this.baseUrl + 'getAllTodayOffer');
  }

  bookingRequestSubmit(data: any) {
    return this.http.post(this.baseUrl + 'submitBookingRequest', data)
  }


  getAllBookingRequest() {
    return this.http.get(this.baseUrl + 'getAllBookingRequest');
  }

  rejectBookingRequest(data: any) {
    return this.http.get(this.baseUrl + 'rejectBookingRequest/' + data)
  }
  acceptBookingRequest(data: any) {
    return this.http.get(this.baseUrl + 'acceptBookingRequest/' + data);
  }
  completeBookingRequest(data: any) {
    return this.http.get(this.baseUrl + 'completeBookingRequest/' + data);
  }
}
