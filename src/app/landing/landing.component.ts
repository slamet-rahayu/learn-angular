import { IProducts } from '../auth/types/product';
import { Component, OnInit } from '@angular/core';
import { faArrowRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../services/api.service';
import { TProducts } from '../types/products';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = 'learn-angular';
  increment: number = 1;
  products: TProducts = {} as TProducts;

  faArrowRight = faArrowRight;
  faCartPlus = faCartPlus;
  faHeart = faHeart;

  constructor(
    private authService: AuthService,
    private productService: ApiService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onClick() {
    this.increment += 1;
  }

  inputChange(e: any) {
    console.log(e.key.pressed);
  }

  allProducts(): IProducts[] {
    return this.authService.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: res => {
        console.log(res);
        this.products = res;
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
