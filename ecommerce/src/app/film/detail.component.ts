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



 public detailFilm() : void {
     this.idFilm = this._route.snapshot.params['idFilm'];
   this._detailService.rechercherFilmId(this.idFilm)
   .subscribe(filmDetail => {this.sF = filmDetail}
  );
 }


 public onUpdateFilm() : void {
   this._detailService.rechercherFilmId(this.sF)
   .subscribe(filmMisAjour =>console.log("film mis a jour  " +filmMisAjour.titre+ " "+filmMisAjour.resume));
 }
  constructor(private _detailService : DetailService,
private _route: ActivatedRoute){
  }

  ngOnInit(): void {
//this.idFilm = this._route.snapshot.params['idFilm'];
// this._route.params.forEach((params: Params) => {
// this.idFilm = Number(params['idFilm']); 
this.detailFilm();
// });

     }
}
