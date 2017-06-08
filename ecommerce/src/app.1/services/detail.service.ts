import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Headers,Http,Response } from "@angular/http";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Film } from "../model/film";

@Injectable()
export class DetailService {
     private _headers = new Headers({'Content-Type': 'application/json'});

     private listeFilms : Film[]; // jeux de données (simulation)

     constructor(private _http : Http){
     }
     public rechercherFilmId(f: any): Observable<Film>{
        let urlWs :string = "http://localhost:8080/ECommerce/services/rest/films/"+ f;
       return this._http.get(urlWs).map(response=> response.json()).catch(e=> Observable.throw('error: '+e));
     }


}