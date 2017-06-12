import { Component, OnInit } from '@angular/core';
import { Film } from "./model/film";
import { FilmService } from "./services/film.service";
import { Panier } from "app/model/panier";
import { PanierService } from "app/services/panier.service";
import { DetailService } from "app/services/detail.service";
import { CategorieService } from "app/services/categorie.service";
import { Categorie } from "app/model/categorie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  films :Film[];
  sF : Film; 
  title = 'app works!';

  categories : Categorie[];
      sC : Categorie; 


constructor(private _filmService : FilmService,
            private _categorieService : CategorieService,
            private _PanierService : PanierService, private _detailService : DetailService){
    // _filmService est injecté ici via angular
  }


  ngOnInit(): void {

  //   this._filmService.rechercherFilms()
  //   .subscribe(listeFil => {this.films= listeFil;
  //                           if(this.films.length >=1)
  //                              this.sF = this.films[0] },
  //                e=> console.log(e.message));
  //       console.log("...update....");
     
  //  this._categorieService.rechercherListeCategories()
  //       .subscribe( listeCat => {this.categories = listeCat;
  //                                if(this.categories.length >=1)
  //                                    this.sC = this.categories[0]; 
  //                               }, 
  //                   e => console.log(e.message));
  }
}




