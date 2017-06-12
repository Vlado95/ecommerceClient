import { Component , OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommonService } from "app/services/common.servce";
import { Film } from "app/model/film";

@Component({
  selector: 'other-component',
  templateUrl: './other.component.html'
})
export class OtherComponent implements OnInit {
    public onOffRef1 : boolean ;
    public messageRef1 : string;
    public listeAuteursRef1 : Panier[];
    public listeFilmsRef1 : Film[];

constructor(private _commonService : CommonService){
    
}

ngOnInit(): void {
    //   this._commonService.listeFilmsbSubject.subscribe(
    //       listeFilms => this.listeFilmsRef1=listeFilms);     
        
   }


}