
import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/services/common.servce";
import { PanierService } from "app/services/panier.service";
import { Film } from "app/model/film";
import { FilmService } from "app/services/film.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements  OnInit {

  public listeFilmsRef2 : Film[];
   films : Film[];
  sF : Film;


  constructor(private _filmService : FilmService,
            private _commonService : CommonService) {
  }


ngOnInit(): void {

  this._filmService.rechercherFilms()
        .subscribe( listeFilm => {this.films= listeFilm;
                                 if(this.films.length >=1)
                                     this.sF = this.films[0]; }, 
                    e => console.log(e.message));



  this._commonService.listeFilmsbSubject.subscribe(
          listeFilms => this.listeFilmsRef2=listeFilms);

} 



}
