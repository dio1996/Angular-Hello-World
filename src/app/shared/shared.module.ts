import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Insert shared components and modules here
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FormsModule]
})
export class SharedModule { }
