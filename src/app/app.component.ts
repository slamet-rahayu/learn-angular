import { IProducts } from './auth/types/product';
import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth/auth.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'learn-angular';
  increment: number = 1;
  data = [];

  faArrowRight = faArrowRight;

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
      next(value) {
        console.log({ value });
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('done');
      },
    });
  }
}
