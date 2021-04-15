import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';



@Injectable({

  providedIn: 'root'

})

export class ContactUsService {



  constructor(private _http: HttpClient) { }


  addMessage(message) {

    return this._http.post(`${environment.baseUrl1}/contact-us`, message);

  }




}
