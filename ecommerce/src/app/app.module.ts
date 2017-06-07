import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {FilmService} from './services/film.service';

import { FilmModule} from "./film/film.module";
import { AppRoutingModule } from "./services/app-routing.module";
import { HeaderModule } from "./header/header.module";
import { NavModule } from "./nav/nav.module";
import { DetailModule } from "app/film/detail.module";
import { DetailService } from "app/services/detail.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilmModule,
    DetailModule,
    HeaderModule,
    NavModule,
    AppRoutingModule
  ],
  providers: [FilmService,
            DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

