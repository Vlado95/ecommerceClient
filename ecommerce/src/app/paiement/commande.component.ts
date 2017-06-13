
import { Component } from '@angular/core';
import { PanierService } from "app/services/panier.service";
import { Router } from "@angular/router";
import { Commande } from "app/model/commande";
import { Panier } from "app/model/panier";


@Component({
  selector: 'app-paiement',
  templateUrl: './commande.component.html'
})
export class CommandeComponent {

 public commandeEnv : Commande ;
 public message : string ="";
 public panier : Panier [];

constructor(private _panierService : PanierService, private _router : Router){
    
}

public onRegister() :void {
       this._panierService.enregistreCommande(this.commandeEnv).subscribe(
        cmd => {this._router.navigate(['/list']);  },
                 e => { console.log(e.message); 
                 this.message = "Inscription Echoué"
                 });
  }

  ngOnInit(): void {




  this._panierService.commandeSubject.subscribe(commande=>{
    this.commandeEnv=commande;
  })

  //  this._panierService.listePanierbSubject.subscribe(ligneCommande=>{

  //    this.panier = ligneCommande;
     
  //  })
  }

}