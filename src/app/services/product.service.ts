import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http=inject(HttpClient);
  apiUrl = 'https://dummyjson.com/products/'
  //'https://dummyjson.com/products/category/
  getProductsFromApi() {
    return this.http.get(this.apiUrl);
  }
  getProductsFromApiById(id:number) {
    return this.http.get(this.apiUrl+id);

  }
  getProductsByCategory(category:string) {
    return this.http.get(this.apiUrl+'category/'+ category)
  }
  getProducts() {
    return [
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
  }
  

  
  getProductsById(id:number) {
    return this.getProducts().find((el)=>el.id==id);
  }
}
