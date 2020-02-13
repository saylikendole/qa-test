import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ItemService implements ErrorHandler {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<object> {
    return this.http.get(`${API_ENDPOINT}/items`);
  }

  getItemById(id: string): Observable<object> {
    return this.http.get(`${API_ENDPOINT}/items/${id}`);
  }

  handleError(error: Error) {
    console.error('Woops: ', error);
 }
}
