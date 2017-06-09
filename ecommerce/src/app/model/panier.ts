import { Film } from "app/model/film";

export class Panier {

  public film: Film;
  public quantite : number;
  public prix : number;

  constructor( film: Film ,
   quantite : number =0,
   prix : number =0) {
     this.film=film;
     this.prix = prix;
     this.quantite;
  }
}