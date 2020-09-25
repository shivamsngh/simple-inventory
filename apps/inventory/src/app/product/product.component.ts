import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Product } from '@robobai/api-interfaces';
import { ProductService } from '../services/core/product.service';
import { validPrice } from '../directives/price.directive'
import { isNumeric } from '../directives/numeric.directive';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { NotificationService } from '../services/core/notification.service';
import { switchMap } from 'rxjs/operators';
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

  product$: Observable<Product>;
  recentProducts$: Observable<Product[]>;

  constructor(private productSvc: ProductService) {
    
    this.recentProducts$ = this.productSvc.updateProductList$.asObservable().pipe(
      switchMap(val => this.productSvc.getRecentProducts())
    );  
  }

  ngOnInit(): void {
  }

 
}
