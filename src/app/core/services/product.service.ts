import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = ' https://bad4b8e5.ngrok.io/api/categories';

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url, httpOptions);
  }
}
