import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Panier } from "app/model/panier";
import { Film } from "app/model/film";

@Injectable()
export class CommonService{
public listePaniers : Panier[];
 
    //predifined in browser (like console) :
    //localStorage: Storage;//.removeItem(key) , .getItem(key) .setItem(key,value) , .length 


    public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);  

    public listePanierbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);  

   constructor(){
    //    let filmAsStringInLocalStorage = localStorage.getItem("listeFilms");
    //    if(filmAsStringInLocalStorage){
    //       console.log("onOffAsStringInLocalStorage:"+filmAsStringInLocalStorage);
    //      // this.listeFilmsbSubject.next(filmAsStringInLocalStorage)
    //    }
        this.listeFilmsbSubject.subscribe(b=>localStorage.setItem("listeFilms",b.toString()));
        this.listePanierbSubject.subscribe(b=>localStorage.setItem("listePaniers",JSON.stringify(b)));

       console.log("à l'ajour "+localStorage.getItem("listePaniers"));
   }                                                
}