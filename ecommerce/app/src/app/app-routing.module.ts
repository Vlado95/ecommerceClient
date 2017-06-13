import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute  } from '@angular/router';
import { FilmComponent } from "app/film/film.component";
import { DetailComponent } from "app/film/detail.component";
import { PanierComponent } from "app/panier/panier.component";
import { OtherComponent } from "app/other.component";
import { InscriptionComponent } from "app/client/inscripition.component";
import { AuthentificationComponent } from "app/client/login.component";
import { FilmsGenreComponent } from "app/film/filmsGenre.component";
import { FilmsTitreComponent } from "app/film/filmsTitre.component";
import { FilmsActeurComponent } from "app/film/filmsActeur.component";
import { PaiementComponent } from "app/paiement/paiement.component";
import { FooterComponent } from "app/footer/footer.component";
import { AccueilComponent } from "app/header/accueil.component";


export const appRoutes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'list', component: FilmComponent},
    {path: 'login', component: AuthentificationComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'filmsgenre/:idGenre', component: FilmsGenreComponent},
    {path: 'filmstitle/:title', component: FilmsTitreComponent},
    {path: 'filmsacteur/:actlike', component: FilmsActeurComponent},
    {path: 'detail/:idFilm', component: DetailComponent},
    {path: 'panier', component: PanierComponent},
    {path: 'paiement', component: PaiementComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'accueil', component: AccueilComponent},
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