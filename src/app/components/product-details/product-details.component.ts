import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private router:ActivatedRoute,private productService:ProductService){}
  productId = 0;
  product : any = {}
  httpProduct:any;
  ngOnInit() {
    this.productId =Number(this.router.snapshot.paramMap.get("id")?.toString());
    this.product = this.productService.getProductsById(this.productId);
    this.getProductFromApi();
  }
  // getProduct() {
  //   // this.products.forEach(el => {
  //   //   if (el.id === this.productId) {
  //   //     this.product = el;
  //   //   }
  //   // });
  // }
  getProductFromApi() {
    this.productService.getProductsFromApiById(this.productId).subscribe((res:any)=>
      {
        this.httpProduct=res;
        console.log(this.httpProduct.images)
      })
  }
}
