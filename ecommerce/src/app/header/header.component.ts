import { Component, OnInit } from '@angular/core';
import { Client } from "app/model/client";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   clientOk : boolean = false;
   PrenomClient : string ="";
   client : Client;

 items:any[] = [
    {id:1,name:'Titre'},
    {id:2,name:'Acteur'},
  ];
 
  constructor(private _router: Router) {
  }

   

   onDeconnection(){
     if(localStorage.getItem("clientConnecte")){
          localStorage.removeItem("clientConnecte");
          this.clientOk == false;
          let link = ['/login'];
          this._router.navigate( link );
        }}


        public onTitle(selected:any, str:String): void {
          if(selected == 1){
          console.log("selected value: "+selected+", search value: "+str)
           let link = ['/filmstitle', str];
           this._router.navigate( link );
          }else{
             console.log("selected value: "+selected+", search value: "+str)
              let link = ['/filmsacteur', str];
              this._router.navigate( link );
          }
}

  ngOnInit(): void {
    this.client = new Client();
    if(localStorage.getItem("clientConnecte")){
      this.client=JSON.parse(localStorage.getItem("clientConnecte"));
      this.clientOk = true;
      console.log("client en header: "+this.client.prenom)

    }
  }
}
