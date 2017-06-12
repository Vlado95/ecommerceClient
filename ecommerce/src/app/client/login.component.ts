import { Component, OnInit } from '@angular/core'; 
import { Client } from "app/model/client";
 import { Router } from '@angular/router';
 import { ClientService } from "app/services/client.service";
 import { CommonService } from "app/services/common.servce";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
})

export class AuthentificationComponent {
    client : Client;
      message : string ="";

    constructor(private _clientService : ClientService, private _router: Router,private _commonService : CommonService){

    }

    ngOnInit(): void { 
      this.client = new Client();
      //this.errorMsg = "";
    }

    onConnect(): void {
  
      this._clientService.authentification(this.client).subscribe(
      clientConnecte => { 
        if(clientConnecte){
          this._commonService.onClientConnecte.next(true);
          localStorage.setItem("clientConnecte",JSON.stringify(clientConnecte));
         /// this._commonService.onOffbSubject.next(true);
          console.log("client ok on connection: "+JSON.parse(localStorage.getItem("clientOk")))
          let link = ['/list'];
          this._router.navigate( link );
          console.log("user est :"+clientConnecte.nom)
        }},
        e => { console.log(e.message); 
          this.message="Email  ou mot de passe incorrect";
      }
    )
      }
         

}