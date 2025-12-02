import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private router:ActivatedRoute){}
  productId = 0;
  product : any = {}
  products =[
    {
      id:1,
      imgUrl:'https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
      name:'Test',
      price: 2.2,
      quantity: 200
    },
    {
      id:2,
      imgUrl:'https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
      name:'Test2',
      price: 4.2,
      quantity: 200
    },
    {
      id:3,
      imgUrl:'https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
      name:'Test2',
      price: 4.2,
      quantity: 200
    }
  ]
  ngOnInit() {
    this.productId =Number(this.router.snapshot.paramMap.get("id")?.toString());
    this.product = this.products.find((el)=>el.id == this.productId)
  }

  // getProduct() {
  //   // this.products.forEach(el => {
  //   //   if (el.id === this.productId) {
  //   //     this.product = el;
  //   //   }
  //   // });
  // }
  
}
