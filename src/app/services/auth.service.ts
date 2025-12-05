import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private username:string = '';
 private user:any = {}
  constructor() { }
  setUsername(username:string) {
    this.username = username;
  }
  getUsername() {
    return this.username;
  }
  setUser(user:any) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}
