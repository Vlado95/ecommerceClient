import { Component , OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommonService } from "app/services/common.servce";
import { Film } from "app/model/film";
import { PanierService } from "app/services/panier.service";
import { Router } from "@angular/router";
import { Commande } from "app/model/commande";


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
    public commandePan : Commande;

constructor(private _panierService : PanierService, private _router : Router){
    
}


public onVidePanier() : void{
  this._panierService.videPanie()
}
public onPaye(): void{
          let link = ['/commande'];
          this._router.navigate( link );
  }

ngOnInit(): void {
  this._panierService.listePanierbSubject.subscribe(listesPaniers=>{
    this.paniers2=listesPaniers;
   this.total=this._panierService.getTotal(this.paniers2);
  }
    )


  this._panierService.commandeSubject.subscribe(commande=>{
    this.commandePan=commande;

  })
  }
 

}