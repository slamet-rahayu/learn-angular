import { IProducts } from './types/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const products = [
  {
    id: 1,
    name: 'Mouse',
    price: 1000,
    img: 'https://dorangadget.com/wp-content/uploads/2021/04/04.-mouse-gaming-jete-msx1-400x400.jpg',
  },
  {
    id: 2,
    name: 'Keyboard',
    price: 1000,
    img: 'https://static.bmdstatic.com/gk/production/f9efba765ac10b2e3992d3d513150726.jpg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  profile() {}

  getProducts(): IProducts[] {
    return products;
  }
}
