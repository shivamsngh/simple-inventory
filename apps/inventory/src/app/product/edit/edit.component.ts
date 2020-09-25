import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { isNumeric } from '../../directives/numeric.directive';
import { validPrice } from '../../directives/price.directive';
import { NotificationService } from '../../services/core/notification.service';
import { ProductService } from '../../services/core/product.service';

@Component({
  selector: 'robobai-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  newProductForm: FormGroup;
  @ViewChild(FormGroupDirective) myForm;
  constructor(private productSvc: ProductService, private notificationSvc:NotificationService, private fb: FormBuilder) {
    this.newProductForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      quantity: [null, [Validators.required, isNumeric()]],
      costPrice: [null, [Validators.required, isNumeric()]],
      sellingPrice: [null, [Validators.required, isNumeric()]]
    }, { validator: validPrice });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.newProductForm.value);
    this.productSvc.createNewProduct(this.newProductForm.value).subscribe(
      value => {
        this.notificationSvc.present('Product added in Inventory.', 'Dismiss');
        this.productSvc.updateProductList$.next(1);
        this.myForm.resetForm();
      }
      ,
      error => this.notificationSvc.present('Product could not be added in Inventory.', 'Retry')
    );
  }

}
