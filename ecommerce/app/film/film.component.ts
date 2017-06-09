import { Component} from '@angular/core';
import { Film } from "../model/film";
import { FilmService } from "../services/film.service";
import { DetailService } from "app/services/detail.service";
import { Router } from "@angular/router";
import { CommonService } from "app/services/common.servce";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  title = 'Film';
  films :Film[];
  sF : Film; 


/// pour panier
  public listeFilmsRef2 : Film[];
   sP : Film;




  selectedID : number;
  constructor(private _filmService : FilmService, private _detailService : DetailService, private _router : Router,private _commonService : CommonService){
  }

  ngOnInit(): void {
    this._filmService.rechercherFilms()
    .subscribe(listeFil => {this.films= listeFil;
                            if(this.films.length >=1)
                               this.sF = this.films[0] },
                 e=> console.log(e.message));
        console.log("...update....");
    
    // panieer
    this._commonService.listeFilmsbSubject.subscribe(
          listeFilms => this.listeFilmsRef2=listeFilms);

 }


//panier
public onAddPanier(f:Film) : void{

  this._detailService.rechercherFilmId(f.id)
    .subscribe(selectedFil => {this.sF= selectedFil });
  this.listeFilmsRef2.push(this.sF
  );

}
}