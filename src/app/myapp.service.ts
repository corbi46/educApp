import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class MyappService {
  URL_API = "http://localhost:4000/";

  users: user[];
  newUser: user={
    name: '',
    password: '',
    email: ''
  };

  constructor(private http: HttpClient) { 

  }

  getUsers(){
    console.log(this.http.get(this.URL_API));
    return this.http.get<user[]>(this.URL_API+'users');
  }

  createUser(user: user){
    return this.http.post(this.URL_API+'user', user);
  }
}
