import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/api/v1/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http : HttpClient,
  ) { }


  showTicket(): Observable<any> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type':'Application/json',
      'Authorization': `Bearer ${accessToken}`
    })
    return this.http.get(`${BASIC_URL}/all`, {headers});
  }

  categoryConcert(categoryName:string): Observable<any> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type':'Application/json',
      'Authorization' : `Bearer ${accessToken}`
    })
    const params = new HttpParams().set('categoryName', categoryName);
    return this.http.get(`${BASIC_URL}/categories/filter`,{headers,params})
  }

  allCategory(): Observable<any> {
    const accessToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type':'Application/json',
      'Authorization' : `Bearer ${accessToken}`
    })
    return this.http.get(`${BASIC_URL}/categories/all` ,{headers})
  }

}
