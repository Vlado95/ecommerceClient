import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Panier } from "app/model/panier";
import { Film } from "app/model/film";

@Injectable()
export class CommonService{
public listePaniers : Panier[];
public total : number = 0;
 

    public onClientConnecte :BehaviorSubject<boolean>
             = new BehaviorSubject(false);

    
    public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);  
    
 

    public listePanierbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);  

     


   constructor(){
     let client = localStorage.getItem("clientConnecte");
       if(client){
       this.onClientConnecte.next(true);
       console.log("clientOK in common Construteur client connecte: "+JSON.parse(localStorage.getItem("clientOk")))
       }
     
     this.onClientConnecte.subscribe(clientOK=>{localStorage.setItem("clientOk", JSON.stringify(clientOK))
     console.log("clientOK in common Construteur: "+JSON.parse(localStorage.getItem("clientOk")))

    
  },
     );
    //    let filmAsStringInLocalStorage = localStorage.getItem("listeFilms");
    //    if(filmAsStringInLocalStorage){
    //       console.log("onOffAsStringInLocalStorage:"+filmAsStringInLocalStorage);
    //      // this.listeFilmsbSubject.next(filmAsStringInLocalStorage)
    //    }
        // this.listeFilmsbSubject.subscribe(b=>localStorage.setItem("listeFilms",b.toString()));
        // this.listePanierbSubject.subscribe(b=>localStorage.setItem("listePaniers",JSON.stringify(b)));                                            

}
}