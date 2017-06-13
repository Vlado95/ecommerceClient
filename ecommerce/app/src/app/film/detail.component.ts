import { Component, OnInit } from '@angular/core';
import { Film } from "../model/film";
import { DetailService } from "app/services/detail.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  sF : Film; 
  idFilm : number;

 
  constructor(private _detailService : DetailService,private _route: ActivatedRoute){
     
    }


 public detailFilm() : void {
     this.idFilm = this._route.snapshot.params['idFilm'];
   this._detailService.rechercherFilmId(this.idFilm)
   .subscribe(filmDetail => {this.sF = filmDetail}
  );
 }



  ngOnInit(): void {
        this.detailFilm()
     }

}
