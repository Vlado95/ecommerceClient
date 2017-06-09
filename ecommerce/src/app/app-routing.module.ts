import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute  } from '@angular/router';
import { FilmComponent } from "app/film/film.component";
import { DetailComponent } from "app/film/detail.component";
import { PanierComponent } from "app/panier/panier.component";
import { OtherComponent } from "app/other.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
    {path: 'list', component: FilmComponent},
    {path: 'detail/:idFilm', component: DetailComponent},
   // {path: 'panier', component: OtherComponent}
    {path: 'panier', component: PanierComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})



export class AppRoutingModule {

}