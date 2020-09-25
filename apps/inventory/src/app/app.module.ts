import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';
import { NotificationService } from './services/core/notification.service'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, ProductModule, BrowserAnimationsModule,
    SharedModule, MaterialModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
