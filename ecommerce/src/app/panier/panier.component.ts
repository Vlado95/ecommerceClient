
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

public onAddPanier() : void{
  //this.listeFilmsRef2.push({ "id" : 1 , "titre" : "Baby Boss" });
  this.listeFilmsRef2.push({
    "id":1,
    "titre":"Baby Boss",
    "publics":"jeunes",
    "prix":19.5,
    "origine":"francaise",
    "duree":"1h20",
    "format":"dvd",
    "langue":"francais",
    "quantite":17,
    "resume":"Lorem ipsum dolor sit amet, "
  });

                // id : number = 0,
                // titre : string = "?",
                // resume : string ="?",
                //  langue : string="?",
                // duree : string="?",
                // publics : string="?",
                // origine : string="?",
                // format : string="?",
                // affiche : string="?",
                // quantite : number=0,
                //     prix : number=0

}


}
