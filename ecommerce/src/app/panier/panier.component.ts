import { Component , OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommonService } from "app/services/common.servce";
import { Film } from "app/model/film";
import { PanierService } from "app/services/panier.service";

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
    public total : number =0;

constructor(private _panierService : PanierService){
    
}

public onVidePanier() : void{
  this._panierService.videPanie()
}

ngOnInit(): void {
  this._panierService.listePanierbSubject.subscribe(listesPaniers=>{
    this.paniers2=listesPaniers;
  //this.paniers2.forEach(lc=>{lc } )
  }
    )
console.log("panier"+ JSON.stringify( this.paniers2))
  }
  // this.paniers2 = JSON.parse(localStorage.getItem('lcmd'));
  //   }
/*


this._filmService.rechercherFilms()
    .subscribe(listeFil => {this.films= listeFil;
                            if(this.films.length >=1)
                               this.sF = this.films[0] 
                            },
                 e=> console.log(e.message));
*/

}