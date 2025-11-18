import { Component } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgStyle } from "@angular/common";

@Component({
  selector: 'app-zadatci',
  standalone: true,
  imports: [NgClass, NgStyle,NgFor,CurrencyPipe],
  templateUrl: './zadatci.component.html',
  styleUrl: './zadatci.component.css'
})
export class ZadatciComponent {

  liveInput: string = ''
  bgColor : string = 'grey';
  rowColor :string = 'red';
  products : any[] = [
    {
      code: "A1-23",
      name: "Kola",
      price: 3000,
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
      price: 1222.2,
      quantity: 2,
      discount: true,
      description: "Kinder je super cokolada itd itd",
      image : "https://d17zv3ray5yxvp.cloudfront.net/variants/dAba6tW1MiHGAxFaWZkZ1dAj/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07"
    }
  ]
  onInput(event: any) {
    this.liveInput = event.target.value
  }
  onMouseEnter() {
    this.bgColor = 'blue'
  }
  onMouseLeave() {
    this.bgColor = 'grey'

  }
}
