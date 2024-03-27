import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  array = [1,2,3,4];

  constructor(private httpclient: HttpClient) { }

  get(){
    const url ='http://localhost:8080/employees?page=0&size=10'
    return this.httpclient.get(url);
  }
}
