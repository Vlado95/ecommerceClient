import { Film } from "app/model/film";
import { Commande } from "app/model/commande";

export class Panier {
  public film: Film;
  public quantite : number;
  public prix : number;
  public commande : Commande;

  constructor( film: Film ,
   quantite : number =0,
   prix : number =0) {
     this.film=film;
     this.prix = prix;
     this.quantite = quantite;
  }
}