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
          listeFilms => {this.listeFilmsRef2=listeFilms;

            });

 }


//panier
public onAddPanier(f:Film) : void{
  this._detailService.rechercherFilmId(f.id)
    .subscribe(selectedFil => {this.sF= selectedFil; 
    // this.panier.film=selectedFil;
    // this.panier.quantite=1;
    // this.panier.prix=selectedFil.prix});
   // this.paniers.push(this.panier);
  this.listeFilmsRef2.push(this.sF);

}



//panier
// public onAddPanier(f:Film) : void{
//   this._detailService.rechercherFilmId(f.id)
//     .subscribe(selectedFil => {this.sF= selectedFil });
//   this.listeFilmsRef2.push(this.sF);

// }


}





// var myArray = [
//   { "name": "Apple", "total": 16, "applicable": 21 },
//   { "name": "Cherry", "total": 12, "applicable": 27 },
//   { "name": "Plum", "total": 14, "applicable": 21 },
//   { "name": "Apple", "total": 16, "applicable": 21 },
//   { "name": "Cherry", "total": 12, "applicable": 27 },
//   { "name": "Plum", "total": 14, "applicable": 21 },
//   { "name": "Banana", "total": 14, "applicable": 21 },
// ];

// var res = {};
  
// // add keys for loopable integers which will be summed   
// var loopables = Object.keys(myArray[0]).filter(function (key) {
//   return Number.isInteger(myArray[0][key]);
// });

// res = Object.keys(myArray.reduce(function (res, item) {
//   if (res[item.name]) {
//     loopables.forEach(function (loopableKey) {
//       res[item.name][loopableKey] += item[loopableKey];
//     });
    
//   }
//   else {
//     res[item.name] = item;
//   }
//   return res; 
// }, res)).map(function(key) {
//   return res[key];
// });
// console.log(res);





