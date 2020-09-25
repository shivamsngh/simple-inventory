import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/core/product.service';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { RecentComponent } from './recent/recent.component';

@NgModule({
  declarations: [ProductComponent, HomeComponent, EditComponent, RecentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers:[ProductService],
  exports: [ProductComponent]
})
export class ProductModule { }
