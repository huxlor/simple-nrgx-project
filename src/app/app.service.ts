import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from './core/models/tickets.models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}

  public getTickets(): Observable<Tickets> {
    return this._http.get<Tickets>(`assets/tickets.json`);
  }
}
