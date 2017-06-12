import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Panier } from "app/model/panier";
import { Film } from "app/model/film";
import 'rxjs/add/observable/of'; // // Observable class extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PanierService{
public listePaniers : Panier[];
public total : number = 0;
//public quantite : number =0;
public lignePanier : Panier;
public ligneFilm : Film;

filmIn: boolean= true;
public lignecomandes: Map< number, Panier >;

public 
    public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);  

    public listePanierbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);  

   
public storyInPanier(paniers:Panier[],film:Film) {
  for (var i = 0; i < paniers.length; i++) {
    if (paniers[i].film.id === film.id) {
      console.log("film ok"+paniers[i].film.titre+",et"+film.titre)
      return true;
    }else{
        console.log("ce film n'est pas dans le panier " + film.titre)
    }

  }
}

public  storyInPanier2(filmsPanier:Panier[]){
  for (var i = 0; i < filmsPanier.length; i++) {
      this.total = this.total+filmsPanier[i].film.prix;
       console.log("les films dans le panier " + filmsPanier[i].film.titre +"; prix d un film: "+filmsPanier[i].prix+" film; total = "+this.total);

  }
  return this.total;
}

 

 public addItem(film : Film) : void {
    // localStorage.removeItem('lcmd');
      this.listePaniers  = JSON.parse(localStorage.getItem('lcmd'));

     if( this.listePaniers ==null){
        this.listePaniers  =  new Array<Panier>();
            this.listePaniers.push(new Panier(film,1,film.prix));
            console.log("je suis passe panier no trouve"+film.titre)
		}
           this.listePaniers.forEach(lc=>{ 
               if(lc.film.id == film.id){
                lc.quantite  += 1;
                lc.prix = lc.quantite*film.prix;
                this.filmIn=false;
              console.log("jproduit no exixtantt"+ lc.quantite+"; price"+ lc.prix)
           }
			
        })
        
        if(this.filmIn==false){
                  this.listePaniers.push(new Panier(film,1,film.prix));
                  console.log("je suis passe panier trouve quantite du produit"+ film.titre)
              
        }

    localStorage.setItem('lcmd', JSON.stringify(this.listePaniers));
    console.log("je viens de sovegarde le panier trouve"+JSON.stringify(this.listePaniers))
	}


    public getItems(paniers : Panier[]) {
        console.log("la valeur de ce panier est: "+paniers.values() )
		return paniers.values();
	}

	public getSize(paniers :Panier[]) :number{
		return paniers.length;
	}

	public getTotal(paniers :Panier[]) {
		let total = 0;
        paniers.forEach(panier =>{
            total+= panier.prix*panier.quantite

        })
		return this.total;
	}

	public  deleteItem(idFilm:number) : void {
		this.lignecomandes.delete(idFilm);
	}


   constructor(){                                               
}

}