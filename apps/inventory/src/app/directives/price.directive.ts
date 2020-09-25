import { IfStmt } from '@angular/compiler';
import { FormGroup } from '@angular/forms';

export function validPrice(fg: FormGroup): { [key: string]: boolean } | null {
  const costPrice = +fg.get('costPrice').value;
  const sellingPriceCtrl = fg.get('sellingPrice');
  const sellingPrice = +sellingPriceCtrl.value;
  if (sellingPrice < costPrice) {
    sellingPriceCtrl.setErrors({ validPrice: true })
  } else {
    if (sellingPriceCtrl.errors)
      delete sellingPriceCtrl.errors.validPrice;
  }
  console.log(fg.errors);
  return;
}