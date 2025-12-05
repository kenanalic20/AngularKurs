import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // router = inject(Router);//novi nacin za injectanje servisa
  constructor(private router:Router, private productService:ProductService) {}
  products : any[] = []  

  ngOnInit(){
   this.products = this.productService.getProducts();
  }

  onClick(id:number) {
    this.router.navigate([`product-details/${id}`])
  }
}
