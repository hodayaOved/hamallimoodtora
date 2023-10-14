import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bavli } from './Bavli';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  GetAnserById(): Observable<Bavli[]> {
    return this.http.get<Bavli[]>("https://www.sefaria.org/api/shape/Talmud/Bavli");
  }

  GetId(): Observable<any> {
    return this.http.get<any>("https://hamallimoodtora-default-rtdb.firebaseio.com/shas.json");
  }
}
