import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
],
declarations: [
    NavbarComponent,
    SearchComponent
],
exports: [
    CommonModule,
    NavbarComponent,
    SearchComponent
]
})
export class SharedModule {}