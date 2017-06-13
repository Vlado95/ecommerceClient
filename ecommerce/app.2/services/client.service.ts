import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Client } from "app/model/client";
import { Headers,Http,Response } from "@angular/http";

@Injectable()
export class ClientService{
    private _headers = new Headers({'Content-Type': 'application/json'});

     

  constructor(private _http : Http){
   
   } 

    public inscription (client : Client) : Observable<Client> {
        
        let urlWs : string = "http://localhost:8080/ECommerce/services/rest/clients/";
        
        return this._http.post(urlWs, JSON.stringify(client), {headers: this._headers}).map(response => response.json())
                        .catch(e => Observable.throw('error: '+ e));  
    }


    public authentification (client : Client) : Observable<Client> {
        
        let urlWs : string = "http://localhost:8080/ECommerce/services/rest/clients/authentification/"+client.email+"/"+client.mdp;
         return this._http.get(urlWs).map(response=> response.json()).catch(e=> Observable.throw('error: '+e));  
    }
     


                                                
}