import { Component} from '@angular/core';
import { Film } from "../model/film";
import { FilmService } from "../services/film.service";
import { DetailService } from "app/services/detail.service";
import { Router } from "@angular/router";
import { CommonService } from "app/services/common.servce";
import { Panier } from "app/model/panier";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  title = 'Film';
  films :Film[];
  sF : Film;
  paniers : Panier[];
  panier : Panier;



/// pour panier
  public listeFilmsRef2 : Film[];
   sP : Film;

i : number =0;


  selectedID : number;
  constructor(private _filmService : FilmService, private _detailService : DetailService, private _router : Router,private _commonService : CommonService){
  }

  ngOnInit(): void {
    this._filmService.rechercherFilms()
    .subscribe(listeFil => {this.films= listeFil;
                            if(this.films.length >=1)
                               this.sF = this.films[0] 
                            },
                 e=> console.log(e.message));
        console.log("...update....");
    
    // panieer
    this._commonService.listeFilmsbSubject.subscribe(
          listeFilms => {this.listeFilmsRef2=listeFilms;
          });
          
        this._commonService.listePanierbSubject.subscribe(
          listePaniers => {this.paniers=listePaniers;
            });

 }


//panier
public onAddPanier(f:Film) : void{
  this.i++;
  this._detailService.rechercherFilmId(f.id)
    .subscribe(selectedFil => {this.sF= selectedFil; 
      this.panier =new Panier(this.sF,1, this.sF.prix);
    this.paniers.push(this.panier);
  this.listeFilmsRef2.push(this.sF);


//    localStorage.setItem("listePaniers",JSON.stringify(this.paniers))
// let ListPANs : string= localStorage.getItem("listePaniers") ;
//      //  console.log("à l'ajour "+JSON.parse(ListPANs).films);
//        console.log("à l'ajour "+ListPANs.lastIndexOf("Baby Boss"));
//       console.log("ajouter dans le panier i"+this.i);
    //  arr.map(function(row) { return stringle(row); });
  });
     


}

}

