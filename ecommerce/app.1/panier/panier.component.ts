import { Component } from '@angular/core';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  constructor() {
  }
}


// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-panier',
//   templateUrl: './panier.component.html',
//   styleUrls: ['./panier.component.css']
// })
// export class PanierComponent implements  OnInit {

//   public listeFilmsRef2 : Film[];


//   constructor() {
//   }


// ngOnInit(): void {
//   this._commonService.listeAuteursbSubject.subscribe(
//           listePaniers => this.listePaniersRef2=listePaniers);

// } 

// public onAddPanier() : void{
//   this.listeFilmsRef2.push({ "id" : 1 , "nom" : "nn" , "prenom" : "pp"});
// }
// }
