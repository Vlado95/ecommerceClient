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
   
   //nouveau
  //  public onOffRef2 : boolean ;
  //  public messageRef2 : string;
   public listeFilmsRef2 : Film[];
  //  public listePaniersRef2 : Panier[];
//  paniers : Panier[];
//   sP : Panier;
 sP : Film; 


  films :Film[];
  sF : Film; 
  title = 'app works!';

  // constructor(private _filmService : FilmService, private _panierService : PanierService,
  //           private _commonService : CommonService, private _detailService : DetailService){
  //   // _filmService est injecté ici via angular
  // }

constructor(private _filmService : FilmService, 
            private _commonService : CommonService, private _detailService : DetailService){
    // _filmService est injecté ici via angular
  }


  ngOnInit(): void {
  //nouveau
  //  this._commonService.onOffbSubject.subscribe(
  //         onOff => this.onOffRef2=onOff);
  
  // this._commonService.messagebSubject.subscribe(
  //         msg => { console.log("subscribe called with msg="+msg); this.messageRef2=msg; });

  this._commonService.listeFilmsbSubject.subscribe(
          listeFilms => this.listeFilmsRef2=listeFilms);

  // this._commonService.listeAuteursbSubject.subscribe(
  //         listePaniers => this.listePaniersRef2=listePaniers);                  

  //  this._panierService.rechercherListePaniers()
  //       .subscribe( listePanier => {this.paniers = listePanier;
  //                                if(this.paniers.length >=1)
  //                                    this.sP = this.paniers[0]; }, 
  //                   e => console.log(e.message));







    this._filmService.rechercherFilms()
    .subscribe(listeFil => {this.films= listeFil;
                            if(this.films.length >=1)
                               this.sF = this.films[0] },
                 e=> console.log(e.message));
        console.log("...update....");
     }






// public onSwitchOnOff() : void{
//   this.onOffRef2 = !this.onOffRef2; 
//   this._commonService.onOffbSubject.next(this.onOffRef2);//indispensable
// }

// public onChangeMsg() : void{
//   this.messageRef2+="#";
//   this._commonService.messagebSubject.next(this.messageRef2);//indispensable
// }


public onAddPanier(f:any) : void{

  this._detailService.rechercherFilmId(f)
    .subscribe(selectedFil => {this.sF= selectedFil });
  this.listeFilmsRef2.push(this.sF
  //   {
  //   "id":1,
  //   "titre":"Baby Boss",
  //   "publics":"jeunes",
  //   "prix":19.5,
  //   "origine":"francaise",
  //   "duree":"1h20",
  //   "format":"dvd",
  //   "langue":"francais",
  //   "quantite":17,
  //   "resume":"Lorem ipsum dolor sit amet, ",
  //   "affiche":"film1"
  // }
  );
}


// public onAddPanier() : void{
//   this.listePaniersRef2.push({ "id" : 1 , "nom" : "nn" , "prenom" : "pp"});
// }


// public onAddPanier() : void{
//   this.listePaniersRef2.push({ "id" : 1 , "nom" : "nn" , "prenom" : "pp"});
// }

}


