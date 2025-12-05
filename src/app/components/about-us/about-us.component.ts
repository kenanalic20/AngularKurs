import { Component, inject, input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf, NgClass } from "@angular/common";
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf, NgClass],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  router = inject(Router);
  productService = inject(ProductService);
  username:string = ''
  title : string = "About Us"
  changableText :string ='';
  inputText:string = '';
  textList:string[]=["Test1","Test2","Test3"]
  hideElement:boolean=false;
  users: any[] = [
    {
      id: 1,
      username: 'test1',
      email: 'test1@gmail.com',
      active :false
    },
    {
      id: 3,
      username: 'test2',
      email: 'test2@gmail.com',
      active :true
    },
    {
      id: 3,
      username: 'test3',
      email: 'test3@gmail.com',
      active :true
    }
  ]

  ngOnInit() {
  }

  showText() {
    this.hideElement = !this.hideElement
  }
  onClickUser(id: number) {
    this.router.navigate([`user-details/${id}`]);
  }
  changeText(text:string) {
    this.changableText = text;
  }
}
