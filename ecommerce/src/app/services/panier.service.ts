import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Panier } from "app/model/panier";
import { Film } from "app/model/film";
import 'rxjs/add/observable/of'; // // Observable class extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Commande } from "app/model/commande";

@Injectable()
export class PanierService{
public listePaniers : Panier[];
public total : number = 0;
//public quantite : number =0;
public lignePanier : Panier;
public ligneFilm : Film;
public prixTotal :number;

filmIn: boolean= true;

public commande : Commande;
//public lignecomandes: Map< number, Panier >;

 
 public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);  

    public listePanierbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);  


    // public commandeSubject :BehaviorSubject<Commande>
    //          = new BehaviorSubject(new Commande()); 
   /*
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
}*/

 

 public addItem(film : Film) : void {
  //  localStorage.removeItem('lcmd');
     // this.listePaniers  = JSON.parse(localStorage.getItem('lcmd'));

     if(this.listePaniers && this.listePaniers.length >=1 ){

       this.listePaniers.forEach(lc=>{ 
               if(lc.film.id == film.id){
                lc.quantite  += 1;
                lc.prix = lc.quantite*film.prix;
                this.filmIn=false;
                //this.listePaniers[this.listePaniers.indexOf(lc)]=lc;
                 console.log("index du panier ajouter"+  this.listePaniers.indexOf(lc))
              console.log("jproduit no exixtantt"+ lc.quantite+"; price"+ lc.prix)
              this.listePanierbSubject.next(this.listePaniers);
           }
			
        })


        if(this.filmIn!=false){
            let p = new Panier(film,1,film.prix);
                  this.listePaniers.push(p);
                  console.log("quantite de panier au premier ajout"+ p.quantite)
                  this.listePanierbSubject.next(this.listePaniers);
              
        }

		}else{

        this.listePaniers  =  new Array<Panier>();
        let p =new Panier(film,1,film.prix)
            this.listePaniers.push(p);
            this.listePanierbSubject.next(this.listePaniers);
            console.log("je suis passe panier no trouve"+film.titre);
            console.log("quant le pnier est vide"+ p.quantite+"; price"+ p.prix)
        }

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
            total+= panier.prix;

        })
		return total;
	}

	public  deleteItem(idFilm:number) : void {
		//this.lignecomandes.delete(idFilm);
	}


  public videPanie(){
      this.listePanierbSubject.subscribe(lignePaniers=>localStorage.removeItem('lcmd'))
    }
//this.onClientConnecte.subscribe(clientOK=>{localStorage.setItem("clientOk", JSON.stringify(clientOK))

   constructor(){ 
       let panierReluDansStorage  ;
       try{
       panierReluDansStorage =  JSON.parse(localStorage.getItem('lcmd'));
    }
    catch(e){ console.log("erreur relecture panier dans storage:" +e);
    }
       if(panierReluDansStorage){
         this.listePanierbSubject.next(panierReluDansStorage) ;   
       }

       

       //this.listePanierbSubject.next(this.listePaniers)  ; [] par defaut
       this.listePanierbSubject.subscribe(paniers=>{
           localStorage.setItem('lcmd',JSON.stringify(paniers));
           this.listePaniers =paniers;
           this.commande = new Commande();
           this.commande.ligneCommandes= this.listePaniers;
           if(localStorage.getItem("clientConnecte")){
            this.commande.client=JSON.parse(localStorage.getItem("clientConnecte"))
            this.commande.reference = JSON.stringify(this.commande.client.id+"/FILM")
         }
         this.commande.montantTotal = this.getTotal(this.listePaniers);

        })                                            
}

}