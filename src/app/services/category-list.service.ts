import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {
  http = inject(HttpClient);
  apiUrl = 'https://dummyjson.com/products/category-list'
  getCategpryList() {
    return this.http.get(this.apiUrl);
  }
}
