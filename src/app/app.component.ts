import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgForOf } from "@angular/common";
import { ProductsComponent } from "./components/products/products.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, ProductsComponent, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularKurs';
  isLoggedIn:boolean = false;
  
  constructor(private router:Router) {}
  
  onClickLogin() {
    this.isLoggedIn = true
  }
  
  login() {
    if(this.isLoggedIn) {
      this.router.navigate(['products'])
    }else {
      alert("Cant login")
    }
  }
}
