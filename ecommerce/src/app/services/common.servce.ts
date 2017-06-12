import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Panier } from "app/model/panier";
import { Film } from "app/model/film";

@Injectable()
export class CommonService{
public listePaniers : Panier[];
public total : number = 0;
 
    //predifined in browser (like console) :
    //localStorage: Storage;//.removeItem(key) , .getItem(key) .setItem(key,value) , .length 


    public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);  

    public listePanierbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);  

   
public storyInPanier(paniers:Panier[],film:Film) {
  for (var i = 0; i < paniers.length; i++) {
    if (paniers[i].film.id === film.id) {
      console.log("film ok"+paniers[i].film.titre+",et"+film.titre)
      return true;
    }else{
        console.log("ce film n'est pas dans le panier " + film.titre)
    }

  }
}

public  storyInPanier2(filmsPanier:Panier[]){
  for (var i = 0; i < filmsPanier.length; i++) {
      this.total = this.total+filmsPanier[i].film.prix;
       console.log("les films dans le panier " + filmsPanier[i].film.titre +"; prix d un film: "+filmsPanier[i].prix+" film; total = "+this.total);

  }
  return this.total;
}

     


   constructor(){
    //    let filmAsStringInLocalStorage = localStorage.getItem("listeFilms");
    //    if(filmAsStringInLocalStorage){
    //       console.log("onOffAsStringInLocalStorage:"+filmAsStringInLocalStorage);
    //      // this.listeFilmsbSubject.next(filmAsStringInLocalStorage)
    //    }
        // this.listeFilmsbSubject.subscribe(b=>localStorage.setItem("listeFilms",b.toString()));
        // this.listePanierbSubject.subscribe(b=>localStorage.setItem("listePaniers",JSON.stringify(b)));
localStorage.removeItem("listePaniers");
       console.log("à l'ajour "+localStorage.getItem("listePaniers"));
   }                                                
}