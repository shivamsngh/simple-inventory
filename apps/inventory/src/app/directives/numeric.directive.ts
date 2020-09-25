import {  AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function isNumeric() {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isNumber = !Number.isNaN(+control.value);
    return isNumber ? null : {isNumeric:true};
  };
}