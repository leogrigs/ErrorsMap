import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entries } from '../models/entries';

const httpOptions = {
  headers: new HttpHeaders({
    'api_key':  'blt94c797d274c9e2e2',
    'access_token': 'cs6c54b494cdfaafb8ed264ae5'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContentStackService {

  constructor(private http: HttpClient) { }


  getAllEntries(): Observable<Entries> {
    
    let url = 'https://cdn.contentstack.io/v3/content_types/error/entries?environment=dev';

    return this.http.get<Entries>(url, httpOptions);
  }

  getAllTitles() {
    
  }

}
