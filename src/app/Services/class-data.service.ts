import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassDataService {

  constructor(private http: HttpClient) { }

  getClasses() {
    return this.http.get('./src/app/mockData/MockClasses.json');
  }
  getHomework() {
    return this.http.get('./src/app/mockData/MockHw.json');
  }
  getWishList() {
    return this.http.get('./src/app/mockData/MockWishList.json');
  }
}
