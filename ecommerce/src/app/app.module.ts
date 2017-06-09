import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {FilmService} from './services/film.service';

import { AppRoutingModule } from "./app-routing.module";
import { DetailService } from "app/services/detail.service";
import { HeaderComponent } from "app/header/header.component";
import { NavComponent } from "app/nav/nav.component";
import { FilmComponent } from "app/film/film.component";
import { DetailComponent } from "app/film/detail.component";
import { PanierComponent } from "app/panier/panier.component";
import { OtherComponent } from "app/other.component";
import { PanierService } from "app/services/panier.service";
import { CommonService } from "app/services/common.servce";
import { CategorieService } from "app/services/categorie.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FilmComponent,
    DetailComponent,
    PanierComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FilmService,
            DetailService, PanierService , CommonService, CategorieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

