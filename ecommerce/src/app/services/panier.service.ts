import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 
import { Headers, Http , Response } from "@angular/http";
import { Panier } from "app/model/panier";

@Injectable()
export class PanierService{
    private _headers = new Headers({'Content-Type': 'application/json'}); 

    // public majAuteur(a : Auteur) : Observable<Auteur>{
    //     let urlWS : string =
    //    "http://localhost:8080/wsSpringCxfWeb/services/rest/auteurs/" + a.id; 
    //    return this._http.put(urlWS, JSON.stringify(a) , {headers: this._headers})
    //                    .map(response=> response.json())
    //                    .catch(e => Observable.throw('error:'+e));
    // }
    /*constructor(private _http : Http){
      //  _http injecté ici servira à appeler des WS REST
    }*/

    

    // public rechercherListePaniers() : Observable<Panier[]>{
    //   return Observable.of(this.listePaniers);


         public rechercherListeFilms() : Observable<Panier[]>{
      return Observable.of(this.listePaniers);
      
      
      
      //simulation sans WS
     /* let urlWS : string =
       "http://localhost:8080/wsSpringCxfWeb/services/rest/auteurs/all"; 
      return this._http.get(urlWS).map(response=> response.json())
                       .catch(e => Observable.throw('error:'+e));
  */  
  }
     private listePaniers : Panier[] ; //jeux de données (simulation)
  
    constructor(private _http : Http){
        this.listePaniers = [
          { "id" : 1 , "nom" : "therieur" , "prenom" : "alain"},
          { "id" : 2 , "nom" : "air" , "prenom" : "axelle"}
        ];
    }

}