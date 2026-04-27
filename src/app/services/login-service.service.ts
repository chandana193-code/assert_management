import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiUrl ="http://localhost:3000/user";
  constructor(private http: HttpClient) { }

  getlogin():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  
  
}
