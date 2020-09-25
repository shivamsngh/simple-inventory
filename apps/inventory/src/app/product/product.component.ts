import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IProduct } from '@robobai/api-interfaces';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/core/product.service';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'robobai-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$: Observable<IProduct>;
  recentProducts$: Observable<IProduct[]>;

  constructor(private productSvc: ProductService) {
    
    this.recentProducts$ = this.productSvc.updateProductList$.asObservable().pipe(
      switchMap(val => this.productSvc.getRecentProducts())
    );  
  }

  ngOnInit(): void {
  }

 
}
