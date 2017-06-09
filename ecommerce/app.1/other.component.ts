import { Component , OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommonService } from "app/services/common.servce";

@Component({
  selector: 'other-component',
  template: `<h3> ok - {{onOffRef1}} -- {{messageRef1}} <br/>
   <p  *ngFor="let a of listeAuteursRef1" >{{a.id}} {{a.nom}} {{a.prenom}}</p>`
})
export class OtherComponent implements OnInit {
    public onOffRef1 : boolean ;
    public messageRef1 : string;
    public listeAuteursRef1 : Panier[];

constructor(private _commonService : CommonService){
    
}

ngOnInit(): void {
      this._commonService.onOffbSubject.subscribe(
          onOff => this.onOffRef1=onOff);

       this._commonService.messagebSubject.subscribe(
          msg => { console.log("subscribe called with msg="+msg); this.messageRef1=msg; });

      this._commonService.listeAuteursbSubject.subscribe(
          listeAuteurs => this.listeAuteursRef1=listeAuteurs);        
    }


}