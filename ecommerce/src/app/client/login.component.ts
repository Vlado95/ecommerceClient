import { Component, OnInit } from '@angular/core'; 
import { Client } from "app/model/client";
 import { Router } from '@angular/router';
 import { ClientService } from "app/services/client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
})

export class AuthentificationComponent {

    client : Client;
      message : string ="";

    constructor(private _clientService : ClientService, private _router: Router){

    }

    ngOnInit(): void { 
      this.client = new Client();
      //this.errorMsg = "";
    }

    onConnect(): void {
          
      this._clientService.authentification(this.client).subscribe(
      clientConnecte => { 
        if(clientConnecte){
          localStorage.setItem("clientConnecte",JSON.stringify(clientConnecte));
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