import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  teamRegister(userForm) {
    return this.http.post<any>('/user/register', userForm);
  }

  singleRegister(userForm) {
    return this.http.post<any>('/user/register', userForm);
  }

  loginUser(loginForm) {
    return this.http.post<any>('/user/login', loginForm);
  }

  addMember(member) {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.post<any>('/user/member', member, {
      headers: {Authorization: 'Bearer ' + token}
    });
  }


  approve(value) {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.post<any>('/user/approve', {value}, {
      headers: {Authorization: 'Bearer ' + token}
    });
  }

  loginAdmin(adminForm) {
    return this.http.post<any>('/admin/login', adminForm);
  }

  getData(): Observable<any> {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.get<any>('/admin/data', {
      headers: {Authorization: 'bearer ' + token}
    }).pipe(
      map((pending) => {
        return pending;
      })
    );
  }

  getDetails(data) {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.post<any>('/admin/details', {data}, {
      headers: {Authorization: 'Bearer ' + token}
    });
  }

  addCaptain(value) {
    return this.http.post<any>('/user/add-captain', {value});
  }

  libraryData(sub) {
    const url = 'https://www.kiet.edu/erp-apis/index.php/verify/libid/' + sub;
    return this.http.get(url)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getID(id): Observable<any> {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.get<any>('/user/keys?id=' + id, {
      headers: {Authorization: 'bearer ' + token}
    }).pipe(
      map((pending) => {
        return pending;
      })
    );
  }

  goPaytm(val) {
    document.location.href = 'http://sportsfest.kiet.edu/user/paytm_data?amount=' + JSON.stringify(val);
  }

  paytmResponse() {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.post<any>('/user/paytm_response', {
      headers: {Authorization: 'Bearer ' + token}
    });
  }

  refreshData() {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.post<any>('/user/refresh-event', {}, {
      headers: {Authorization: 'Bearer ' + token}
    });
  }

  captainLIst() {
    const url = '/admin/captainList';
    return this.http.get(url)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }


}
