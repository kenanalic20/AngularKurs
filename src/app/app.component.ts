import { Component } from '@angular/core';
import { Route, RouterOutlet, RouterLink } from '@angular/router';
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
}
