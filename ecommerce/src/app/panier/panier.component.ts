import { Component , OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommonService } from "app/services/common.servce";
import { Film } from "app/model/film";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
    public onOffRef1 : boolean ;
    public messageRef1 : string;
    public listeFilmsRef1 : Film[];

    public  paniers2 : Panier[];
    public panier2 : Panier;

constructor(private _commonService : CommonService){
    
}

ngOnInit(): void {
      this._commonService.listeFilmsbSubject.subscribe(
          listeFilms => {this.listeFilmsRef1=listeFilms;
          });
      // this._commonService.listePanierbSubject.subscribe(
      //   listPaniers => {this.paniers2 = listPaniers;
      //   } )     
        
    }


// var res = {};
// res = Object.keys([
//     { "name": "Apple", "total": 16, "applicable": 21 },
//     { "name": "Cherry", "total": 12, "applicable": 27 },
//     { "name": "Plum", "total": 14, "applicable": 21 },
//     { "name": "Apple", "total": 16, "applicable": 21 },
//     { "name": "Cherry", "total": 12, "applicable": 27 },
//     { "name": "Plum", "total": 14, "applicable": 21 },
//     { "name": "Banana", "total": 14, "applicable": 21 },
// ].reduce(function (res, item) {
//   if (res[item.name]) {
//     res[item.name].total += item.total;
//     res[item.name].applicable += item.applicable;
//   }
//   else {
//     res[item.name] = item;
//   }
//   return res; 
// }, res)).map(function(key) {
//   return res[key];
// });
// console.log(res);





}