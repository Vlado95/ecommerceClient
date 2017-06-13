import { Component, OnInit } from '@angular/core';
import { Film } from "../model/film";
import { DetailService } from "app/services/detail.service";
import { ActivatedRoute, Params } from "@angular/router";
import { CategorieService } from "app/services/categorie.service";
import { Categorie } from "app/model/categorie";

@Component({
  selector: 'app-detail',
  templateUrl: './filmsGenre.component.html',
  styleUrls: ['./filmsGenre.component.css']
})
export class FilmsGenreComponent implements OnInit {
  idGenre : number; 
  sF: Film;
  films : Film[];
 message: string = "";



 public onFilmsCat() : void {
     this.idGenre = this._route.snapshot.params['idGenre'];
   this._categorieService.rechercherFimsParCategorie(this.idGenre)
   .subscribe(filmList => {this.films = filmList;
                              if(this.films.length >=1)
                               this.sF = this.films[0];
                                else
                                this.message = "pas de films pour ce genre";
                        },
             e=> {console.log(e.message); }
  );
 }

constructor(private _categorieService : CategorieService,
   private _route: ActivatedRoute){
  
}

  ngOnInit(): void {
     this.onFilmsCat();
     }



}
