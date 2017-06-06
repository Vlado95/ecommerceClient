import { NgModule } from '@angular/core';
import { FilmComponent } from "../film/film.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    FilmComponent
  ],
  imports: [
    FormsModule,BrowserModule 
  ],
  exports: [
    FilmComponent
  ]
})
export class FilmModule { }
