import { Component} from '@angular/core';
import { Film } from "../model/film";
import { FilmService } from "../services/film.service";
import { DetailService } from "app/services/detail.service";
import { Router } from "@angular/router";
import { CommonService } from "app/services/common.servce";
import { Panier } from "app/model/panier";
import { PanierService } from "app/services/panier.service";

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

total :number = 0;
quantiLig : number;

/// pour panier
  public listeFilmsRef2 : Film[];
   sP : Film;

i : number =0;


  selectedID : number;
  constructor(private _filmService : FilmService, private _detailService : DetailService, private _router : Router,private _panierService : PanierService){
  
}

  public onDetail(f:Film): void{
          let link = ['/detail', f.id];
          this._router.navigate( link );
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
    // this._panierService.listeFilmsbSubject.subscribe(
    //       listeFilms => {this.listeFilmsRef2=listeFilms;
    //       });
          
    //     this._panierService.listePanierbSubject.subscribe(
    //       listePaniers => {this.paniers=listePaniers;
    //         });

 }

 






//panier
public onAddPanier(f:Film) : void{
  this._panierService.addItem(f)
console.log("ajouter"+f.titre)
  // this.i++;
  // this._detailService.rechercherFilmId(f.id)
  //   .subscribe(selectedFil => {this.sF= selectedFil; 
  //     this.panier =new Panier(this.sF,1, this.sF.prix);
  //   this.paniers.push(this.panier);
    
  //this.listeFilmsRef2.push(this.sF);
  // this._commonService.storyInPanier(this.paniers,this.sF);
  // this._commonService.storyInPanier2(this.paniers);
 //this.total =  this._commonService.storyInPanier2(this.paniers)
//localStorage.setItem("total",JSON.stringify(this.total))
// localStorage.setItem("nbA",JSON.stringify( this.i))
// localStorage.setItem("listePanierstest",JSON.stringify(this.paniers))

   //localStorage.setItem("listePanierEnSock",JSON.stringify(this.paniers))
// let ListPANs : string= localStorage.getItem("listePaniers") ;
//      //  console.log("à l'ajour "+JSON.parse(ListPANs).films);
//        console.log("à l'ajour "+ListPANs.lastIndexOf("Baby Boss"));
//       console.log("ajouter dans le panier i"+this.i);
    //  arr.map(function(row) { return stringle(row); });
  // });
     


}

}

