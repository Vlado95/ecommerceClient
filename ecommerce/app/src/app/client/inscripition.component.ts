import { Component, OnInit } from '@angular/core'; 
import { Client } from "app/model/client";
 import { Router } from '@angular/router';
 import { ClientService } from "app/services/client.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html', 
  styleUrls: ['./inscription.component.css'] 
})

export class InscriptionComponent {

    client : Client;
    message : String ="";

    constructor(private _clientService : ClientService, private _router: Router){

    }

    ngOnInit(): void { 
      this.client = new Client();
      //this.errorMsg = "";
    }

    onSubmit(): void {
       this._clientService.inscription(this.client).subscribe(
        usr => {this._router.navigate(['/list']);  },
                 e => { console.log(e.message); 
                 this.message = "Inscription Echoué"
                 });
     }

         

}