import { NgModule } from '@angular/core';
// import { FilmComponent } from "app/Film.component";
// import { ItemComponent } from "app/item.component";
import { Routes, RouterModule, Router, ActivatedRoute  } from '@angular/router';
import { FilmComponent } from "app/film/film.component";
import { DetailComponent } from "app/film/detail.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: FilmComponent},
    {path: 'detail/:idFilm', component: DetailComponent}
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