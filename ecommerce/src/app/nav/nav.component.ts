import { Component, OnInit } from '@angular/core';
import { Categorie } from "../model/categorie";
import { CategorieService} from "../services/categorie.service";
import { Film } from "app/model/film";
import { Router } from "@angular/router";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
     categories : Categorie[];
      sC : Categorie; 
      genreFilms : Film[];
      message: string = "";


 constructor(private _categorieService : CategorieService, private _router: Router){
}

public onGenre(genre:Categorie): void {
          
          let link = ['/filmsgenre', genre.id];
          this._router.navigate( link );
}




ngOnInit(): void {
   this._categorieService.rechercherListeCategories()
        .subscribe( listeCat => {this.categories = listeCat;
                                 if(this.categories.length >=1)
                                     this.sC = this.categories[0];
                                }, 
                    e => console.log(e.message));
  }
}


 

