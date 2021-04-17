
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  getProducts(params?) {
    return this._http.get(`${environment.baseUrl2}`, { params });
  }

  getProductById(id) {
    return this._http.get(`${environment.baseUrl2}/${id}`);
  }

}
