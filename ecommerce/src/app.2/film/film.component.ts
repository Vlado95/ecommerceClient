import { Component } from '@angular/core';
import { Film } from "../model/film";
import { FilmService } from "../services/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  title = 'Film';
  films :Film[];
  sF : Film; // film selectioné via liste déroulante
  //filmMisAjour : film; //film mis à jour

  public onSelectionChange(event:any) : void{
        //envent.???
        let
         selecteId = event.target.value;
         for (let f of this.films){
           if(f.id == selecteId){
             this.sF = f; 
             break;
           }
         }
  }

 /**
  * onUpdatefilm
  */
 public onUpdateFilm() : void {
   this._filmService.majFilm(this.sF)
   .subscribe(filmMisAjour =>console.log("film mis a jour  " +filmMisAjour.titre+ " "+filmMisAjour.resume));
 }
  constructor(private _filmService : FilmService){
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
