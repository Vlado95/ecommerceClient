import { Component, OnInit } from '@angular/core';
import { Film } from "../model/film";
import { DetailService } from "app/services/detail.service";
import { ActivatedRoute, Params } from "@angular/router";
import { CategorieService } from "app/services/categorie.service";
import { Categorie } from "app/model/categorie";
import { FilmService } from "app/services/film.service";

@Component({
  selector: 'app-detail',
  templateUrl: './filmsTitre.component.html'
})
export class FilmsTitreComponent implements OnInit {
  title : string; 
  sF: Film;
  films : Film[];
 message: string = "";



 public onFilmsTitle() : void {
     this.title = this._route.snapshot.params['title'];
   this._filmService.rechercherFilmsParTitle(this.title)
   .subscribe(filmList => {this.films = filmList;
                              if(this.films.length >=1)
                               this.sF = this.films[0] 
                               else
                                this.message ="film no trouvé"
                        },
             e=> {console.log(e.message);}
  );
 }

constructor(private _filmService : FilmService,
   private _route: ActivatedRoute){
  
}

  ngOnInit(): void {
     this.onFilmsTitle();
     }



}
