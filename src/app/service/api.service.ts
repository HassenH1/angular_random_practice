import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://jsonplaceholder.typicode.com/photos";
  limit: string = '?_limit=15'

  constructor(private http: HttpClient) { }

  getRequest(){
    return this.http.get(`${this.url}${this.limit}`)
  }

}
