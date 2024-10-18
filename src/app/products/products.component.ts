import { Component, HostListener } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: IProduct[] = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      stock: 94,
      quantity: 0, // نبدأ بكمية 0
      thumbnail: 'https://picsum.photos/200/300?random=1'
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'An apple mobile which is nothing like apple',
      price: 899,
      stock: 34,
      quantity: 0,
      thumbnail: 'https://picsum.photos/200/300?random=2'
    },
    // باقي المنتجات بنفس التنسيق
  ];

  totalPrice: number = 0;
  orderMessage: string = ''; // تعريف متغير orderMessage

  increaseQuantity(product: IProduct) {
    if (product.stock > product.quantity) {
      product.quantity++;
    }
  }

  decreaseQuantity(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  buyProduct(product: IProduct) {
    if (product.quantity > 0 && product.stock >= product.quantity) {
      this.totalPrice += product.price * product.quantity;
      product.stock -= product.quantity;

      this.orderMessage = `You have ordered ${product.quantity} ${product.title}(s) for a total of ${product.price * product.quantity}$.`;

      product.quantity = 0; // reset quantity after purchase
    }
  }

  @HostListener('mouseover', ['$event.target'])
  onMouseOver(card: HTMLElement) {
    card.style.boxShadow = '0px 0px 15px rgba(0,0,0,0.5)';
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut(card: HTMLElement) {
    card.style.boxShadow = '0px 0px 5px rgba(0,0,0,0.1)';
  }
}
