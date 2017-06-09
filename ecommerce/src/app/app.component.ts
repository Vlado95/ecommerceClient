import { Component, OnInit } from '@angular/core';
import { Film } from "./model/film";
import { FilmService } from "./services/film.service";
import { Panier } from "app/model/panier";
import { PanierService } from "app/services/panier.service";
import { CommonService } from "app/services/common.servce";
import { DetailService } from "app/services/detail.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  films :Film[];
  sF : Film; 
  title = 'app works!';

constructor(private _filmService : FilmService, 
            private _commonService : CommonService, private _detailService : DetailService){
    // _filmService est injecté ici via angular
  }


  ngOnInit(): void {

    this._filmService.rechercherFilms()
    .subscribe(listeFil => {this.films= listeFil;
                            if(this.films.length >=1)
                               this.sF = this.films[0] },
                 e=> console.log(e.message));
        console.log("...update....");
     }

}


