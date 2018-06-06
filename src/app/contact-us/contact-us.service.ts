import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) {
  }
    getUser(): Observable<any> {
      return this.http.get(`https://my.api.mockaroo.com/user.json?key=259f1a90`);
  }
}
