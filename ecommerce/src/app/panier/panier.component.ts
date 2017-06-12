import { Component , OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommonService } from "app/services/common.servce";
import { Film } from "app/model/film";
import { PanierService } from "app/services/panier.service";
import { Router } from "@angular/router";


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

constructor(private _panierService : PanierService, private _router : Router){
    
}

public onPaye(): void{
          let link = ['/paiement'];
          this._router.navigate( link );
  }

ngOnInit(): void {

  this.paniers2 = JSON.parse(localStorage.getItem('lcmd'));
    }


}