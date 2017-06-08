import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute  } from '@angular/router';
import { FilmComponent } from "app/film/film.component";
import { DetailComponent } from "app/film/detail.component";
import { PanierComponent } from "app/panier/panier.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
    {path: 'list', component: FilmComponent},
    {path: 'detail/:idFilm', component: DetailComponent},
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