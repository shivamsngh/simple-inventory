import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@robobai/api-interfaces';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct$ = new Subject<Product>();
  updateProductList$ = new BehaviorSubject(0);
  constructor(private http: HttpClient) { }

  /**
   * Gets all the matched products 
   * using a search term. Searched term 
   * can either be a product description,
   * name or ID
   * @param {*} searchTerm
   * @returns {Observable<Product[]>}
   * @memberof ProductService
   */
  getMatchedProducts(searchTerm): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/product/search?term=${searchTerm}`)
  }

  /**
   * Creates a new product resource at server
   * @param {Product} product
   * @returns {Observable<Product>}
   * @memberof ProductService
   */
  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`/api/product`, product);
  }

  /**
   * Updates a product
   *
   * @param {Product} product
   * @returns {Observable<any>}
   * @memberof ProductService
   */
  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(`/api/product`, product);
  }

  /**
   * Get recent products added to system
   * P.S It only provides latest ten records
   * @returns {Observable<Product[]>}
   * @memberof ProductService
   */
  getRecentProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/product?filter=recent`);
  }
}
