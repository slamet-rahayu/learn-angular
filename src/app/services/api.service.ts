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

  getProducts(): Observable<TProducts> {
    return this.http.get<TProducts>(`${this.apiUrl}/products`);
  }
}
