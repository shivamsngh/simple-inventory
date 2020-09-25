import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '@robobai/api-interfaces';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct$ = new Subject<IProduct>();
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
  getMatchedProducts(searchTerm): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/api/product/search?term=${searchTerm}`)
  }

  /**
   * Creates a new product resource at server
   * @param {Product} product
   * @returns {Observable<Product>}
   * @memberof ProductService
   */
  createNewProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`/api/product`, product);
  }

  /**
   * Updates a product
   *
   * @param {Product} product
   * @returns {Observable<any>}
   * @memberof ProductService
   */
  updateProduct(product: IProduct): Observable<any> {
    return this.http.put<any>(`/api/product`, product);
  }

  /**
   * Get recent products added to system
   * P.S It only provides latest ten records
   * @returns {Observable<Product[]>}
   * @memberof ProductService
   */
  getRecentProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/api/product?filter=recent`);
  }
}
