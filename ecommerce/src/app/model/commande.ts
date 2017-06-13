
import { Client } from "app/model/client";
import { Panier } from "app/model/panier";

export class Commande {
    id : number;
    status : string = "en cour de traitement";
    fraisPort : number =2.50;
    montantTotal : number;
    delaisLivraison : number=6;
    adresseLivraison : string="";
    ligneCommandes : Panier[];
    reference : string;
    client : Client;


    constructor(
              /*  id : number = 0,
                status : string= "?",
                fraisPort : number =2.50,
                 montantTotal : number=0,
                delaisLivraison : number=6,
                ligneCommandes: Panier[],
                client : Client,*/
               ){
                   /* this.id = id;
                    this.status = status;
                    this.fraisPort= fraisPort;
                    this.montantTotal  = montantTotal ;
                    this.delaisLivraison = delaisLivraison;
                    this.ligneCommandes = ligneCommandes;
                    this.client = client;*/

                }
}