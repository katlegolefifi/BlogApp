import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl = "http://localhost:3000";
constructor(private http: HttpClient) { }

  createUser(body:any){
    return this.http.post(`${this.baseUrl}/users `,body)
  }

  registerUser(body:any){
    return this.http.post(`${this.baseUrl}/register `,body)
  }

  login(body:any){
    return this.http.post(`${this.baseUrl}/login `,body)
  }

}
