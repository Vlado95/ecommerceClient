import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from "../film/detail.component";
@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    FormsModule,BrowserModule 
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule { }