import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IProduct } from '@robobai/api-interfaces';
import { Observable } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/core/product.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'robobai-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('wobble', [
      state('expand', style({
        width: '45%'
      })),
      state('shrink', style({
        width: '40%'
      })),
      transition('expand => shrink', [
        animate('0.2s')
      ]),
      transition('shrink => expand', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class SearchComponent implements OnInit {

  products$: Observable<IProduct[]>;
  isFocused: boolean;
  constructor(private productDataSvc: ProductService) { }
  searchCtrl = new FormControl();

  displayWithFn = ((value: IProduct) => {
    if(!value) return '';
    return value ? value.name :value;
  });

  ngOnInit(): void {
    this.products$ = this.searchCtrl.valueChanges.pipe(
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(searchTerm => this.productDataSvc.getMatchedProducts(searchTerm))
    );
  }

  setFocus(value: boolean) {
    this.isFocused = value;
  }

  productSelected(selectedEv: MatAutocompleteSelectedEvent) {
    this.productDataSvc.selectedProduct$.next(selectedEv.option.value)
  }

}
