import qs from 'qs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TProducts } from '../types/products';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(page: number = 1): Observable<TProducts> {
    const query = qs.stringify({
      populate: {
        image: {
          fields: ['url'],
        },
        product_category: {
          populate: '*',
        },
      },
      pagination: {
        limit: 10,
        start: page > 1 ? (page - 1) * 5 : 0,
      },
    });
    return this.http.get<TProducts>(`${this.apiUrl}/products?${query}`);
  }
}
