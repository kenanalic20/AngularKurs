import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryListService } from '../../services/category-list.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // router = inject(Router);//novi nacin za injectanje servisa
  constructor(private router:Router, private productService:ProductService, private productCategoryListService:CategoryListService) {}
  products : any[] = []  
  httpProducts:any;
  categoryList:any;
  selectedCategory:any;
  ngOnInit(){
   this.products = this.productService.getProducts();
   this.productService.getProductsFromApi().subscribe((res:any)=>{
    this.httpProducts = res.products;
    console.log(this.httpProducts)
   });
   this.getCategoryList();
  }
  getCategoryList() {
    this.productCategoryListService.getCategpryList().subscribe((res)=>{
      this.categoryList=res
    })
  }
  selectCategory() {
    this.productService.getProductsByCategory(this.selectedCategory).subscribe((res:any)=>{
      this.httpProducts=res.products
    });
  }
  onClick(id:number) {
    this.router.navigate([`product-details/${id}`])
  }
}
