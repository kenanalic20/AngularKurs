import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgClass, NgStyle, UpperCasePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, DatePipe, SlicePipe } from "@angular/common";
import { NgModel } from '@angular/forms';
import { ZadatciComponent } from './components/zadatci/zadatci.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgForOf, 
    NgClass, 
    NgStyle, 
    UpperCasePipe, 
    TitleCasePipe, 
    DecimalPipe, 
    CurrencyPipe, 
    DatePipe, 
    SlicePipe,
    ZadatciComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  imagePath : string = 'https://media.istockphoto.com/id/909655800/photo/city-of-mostar-and-neretva-river.jpg?s=612x612&w=0&k=20&c=B7ADXem5X7_pRQ5VzLRuFUvaw4fFzA9jHJwcA87G5QI=';
  isDisabled : boolean = false;
  nameColor : string = 'pink';
  descriptionWidth:number = 100;
  today : Date = new Date();
  productName : string = '';
  products : any[] = [
    {
      code: "A1-23",
      name: "Kola",
      price: 3,
      quantity: 10,
      discount: false,
      description: "Kola ",
      image : "https://www.coca-cola.com/content/dam/onexp/ba/bs/products/coca-cola/cc500.png",
    },
    {
      code: "A2-24",
      name: "Milka",
      price: 4.2,
      quantity: 23,
      discount: true,
      description: "Milka je super cokolada itd itd",
      image : "https://d17zv3ray5yxvp.cloudfront.net/variants/2KDRhdspdSW3ZQkCf6G5zxj5/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07"
    },
    {
      code: "A3-25",
      name: "Kinder",
      price: 12.2,
      quantity: 2,
      discount: true,
      description: "Kinder je super cokolada itd itd",
      image : "https://d17zv3ray5yxvp.cloudfront.net/variants/dAba6tW1MiHGAxFaWZkZ1dAj/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07"
    }
  ]
  disableButton(obj:any) {
    obj.discount = false;
  }
  // onInput(event:any) {
  //   let typed =event.target as HTMLInputElement
  //   this.productName = typed.value
  // }
  onInput(search:any) {
    this.productName = search;
  }
  // onKeyUp(event: any) {
  //   console.log(event.key)
  // }
  onKeyUp() {
    console.log("enter pozvan")
  }
  onMouseEnter(event: any) {
    console.log('Method not implemented.');
  }
  onDblClick(event: any) {
    console.log('Dupli klik')
  }
  onRightClick(event: any) {
    console.log('Desni klik')
  }
}
