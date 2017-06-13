import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Headers,Http,Response } from "@angular/http";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Film } from "../model/film";

@Injectable()
export class FilmService {
     private _headers = new Headers({'Content-Type': 'application/json'});

     private listeFilms : Film[]; // jeux de données (simulation)

     constructor(private _http : Http){
     }
     public rechercherFilms(): Observable<Film[]>{
       // return Observable.of(this.listeFilms); // données simulées 
       let  urlWs : string = "http://localhost:8080/ECommerce/services/rest/films/all";
       return this._http.get(urlWs).map(response=> response.json()).catch(e=> Observable.throw('error: '+e));
     }

       public rechercherFilmsParTitle(title:String): Observable<Film[]>{
       let  urlWs : string = "http://localhost:8080/ECommerce/services/rest/films/titlelike/"+title;
       return this._http.get(urlWs).map(response=> response.json()).catch(e=> Observable.throw('error: '+e));
     }

      public rechercherFilmsParActeur(actKeyWork:String): Observable<Film[]>{
       let  urlWs : string = "http://localhost:8080/ECommerce/services/rest/acteurs/films/actorLike/"+actKeyWork;
       return this._http.get(urlWs).map(response=> response.json()).catch(e=> Observable.throw('error: '+e));
     }
     


}