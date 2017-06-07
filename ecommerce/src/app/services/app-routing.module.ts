import { NgModule } from '@angular/core';
// import { FilmComponent } from "app/Film.component";
// import { ItemComponent } from "app/item.component";
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from "app/film/film.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: FilmComponent},
    // {path: 'form', component: ItemformComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }