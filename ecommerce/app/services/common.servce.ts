import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Panier } from "app/model/panier";
import { Film } from "app/model/film";

@Injectable()
export class CommonService{

    //predifined in browser (like console) :
    //localStorage: Storage;//.removeItem(key) , .getItem(key) .setItem(key,value) , .length 

    public onOffbSubject :BehaviorSubject<boolean>
             = new BehaviorSubject(false);

   public messagebSubject :BehaviorSubject<string>
             = new BehaviorSubject("initial-message");  

   public listeAuteursbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);   


    public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);   

   constructor(){
       let onOffAsStringInLocalStorage = localStorage.getItem("onOff");
       if(onOffAsStringInLocalStorage){
          console.log("onOffAsStringInLocalStorage:"+onOffAsStringInLocalStorage);
          this.onOffbSubject.next(onOffAsStringInLocalStorage == 'true')
       }
       this.onOffbSubject.subscribe(b=>localStorage.setItem("onOff",b.toString()))
   }                                                
}