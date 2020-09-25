import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '@robobai/api-interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isNumeric } from '../../directives/numeric.directive';
import { validPrice } from '../../directives/price.directive';
import { NotificationService } from '../../services/core/notification.service';
import { ProductService } from '../../services/core/product.service';

@Component({
  selector: 'robobai-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[ trigger('spin', [
    state('default', style({
      transform: 'rotate(0)',
      color:'#3f51b5'
    })),
    state('spinning', style({
      transform: 'rotate(360deg)'
    })),
    transition('spinning => default', [
      animate('0.4s')
    ]),
    transition('default => spinning', [
      animate('0.4s')
    ])
  ])]
})
export class HomeComponent implements OnInit {
  spin=true;
  product$: Observable<IProduct>;
  updateProductForm: FormGroup;
  constructor(private fb: FormBuilder, private productSvc: ProductService, private notificationSvc: NotificationService) {
    this.product$ = this.productSvc.selectedProduct$.pipe(tap(val => {
      this.updateProductForm.setValue({
        id: val.id,
        name: val.name,
        quantity: val.quantity.toString(),
        costPrice: val.costPrice.toString(),
        sellingPrice: val.sellingPrice,
      });
    }));
    this.updateProductForm = this.fb.group({
      id: [{ value: null, disabled: true }],
      name: [null, [Validators.required, Validators.minLength(2)]],
      quantity: [{ value: null, disabled: true }],
      costPrice: [{ value: null, disabled: true }],
      sellingPrice: [null, [Validators.required, isNumeric()]]
    }, { validator: validPrice });
  }

  ngOnInit(): void {
    setInterval(()=> this.spin = !this.spin, 2000)
  }

  onSubmit(): void {
    console.log(this.updateProductForm.getRawValue());
    this.productSvc.updateProduct(this.updateProductForm.getRawValue()).subscribe(
      value => {
        this.notificationSvc.present('Product updated in Inventory.', 'Dismiss');
        this.productSvc.updateProductList$.next(1);
      }
      ,
      error => this.notificationSvc.present('Product could not be updated in Inventory.', 'Retry')
    );
  }

}
