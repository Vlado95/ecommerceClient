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
import { Headers,Http,Response} from "@angular/http";


@Injectable()
export class PanierService{
public listePaniers : Panier[];
public total : number = 0;
//public quantite : number =0;
public lignePanier : Panier;
public ligneFilm : Film;
public prixTotal :number;


filmIn: boolean= true;



private _headers = new Headers({'Content-Type': 'application/json'});

public commande : Commande;
//public lignecomandes: Map< number, Panier >;

 public pourcentagePromo :BehaviorSubject<number>
             = new BehaviorSubject(0);  


 public listeFilmsbSubject :BehaviorSubject<Film[]>
             = new BehaviorSubject([]);  

    public listePanierbSubject :BehaviorSubject<Panier[]>
             = new BehaviorSubject([]);  


    public commandeSubject :BehaviorSubject<Commande>
             = new BehaviorSubject(new Commande()); 

    
 

 public addItem(film : Film) : void {
  //  localStorage.removeItem('lcmd');
     // this.listePaniers  = JSON.parse(localStorage.getItem('lcmd'));

     if(this.listePaniers && this.listePaniers.length >=1 ){

       this.listePaniers.forEach(lc=>{ 
               if(lc.film.id == film.id){
                lc.quantite  += 1;
                this.pourcentagePromo.subscribe(pourcentage=>{
                film.prix=this.getPromotion(film,pourcentage);
                lc.prix = lc.quantite*film.prix;}
                )
                
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

    public getTva(pourcentage : number){
        let tva = (this.getTotal(this.listePaniers)*pourcentage)/100;
        return tva;
    }


    public getPromotion(film : Film, pourcentage :number){
        let prixReduit = (film.prix*(100-pourcentage))/100
        return prixReduit;
    }

	public  deleteItem(idFilm:number) : void {
		//this.lignecomandes.delete(idFilm);
	}


  public videPanie(){
      this.listePanierbSubject.subscribe(lignePaniers=>localStorage.removeItem('lcmd'))
    }





    public enregistreCommande (commande : Commande) : Observable<Commande> {
        let urlWs : string = "http://localhost:8080/ECommerce/services/rest/commandes/";
        console.log("donnees envoyer  "+JSON.stringify(commande))
        return this._http.post(urlWs, JSON.stringify(commande), {headers: this._headers}).map(response => response.json())
                        .catch(e => Observable.throw('error: '+ e));  
    }


   constructor(private _http : Http){ 

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
                this.commande.client=JSON.parse(localStorage.getItem("clientConnecte"));
                this.commande.reference = JSON.stringify(this.commande.client.id+"/FILM");
                this.commande.adresseLivraison = this.commande.client.adresse;
              }
            this.commande.montantTotal = this.getTotal(this.listePaniers)+this.commande.fraisPort
            +this.getTva(2.5);
            this.commandeSubject.next(this.commande);
            // this.listePaniers.forEach(panier=>{
            //     panier.commande=this.commande;
            // }

            // )
            localStorage.setItem("cmd",JSON.stringify(this.commande));

        })

          

                                            
}

}