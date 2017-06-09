import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Headers,Http,Response } from "@angular/http";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Categorie } from "../model/categorie";


@Injectable()
export class CategorieService{
     
    private _headers = new Headers({'Content-Type': 'application/json'});
    private listeCategories : Categorie[]; 
    constructor(private _http : Http){
      //  _http injecté ici servira à appeler des WS REST
      
    }
    public rechercherListeCategories() : Observable<Categorie[]>{
      // return Observable.of(this.listeAuteurs);//simulation sans WS
      let urlWS : string =
       "http://localhost:8080/ECommerce/services/rest/genres/all"; 
      return this._http.get(urlWS).map(response=> response.json())
                       .catch(e => Observable.throw('error:'+e));
    }
   

}

