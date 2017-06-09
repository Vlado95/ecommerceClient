import { Component, OnInit } from '@angular/core';
import { Categorie } from "../model/categorie";
import { CategorieService} from "../services/categorie.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
     categories : Categorie[];
      sC : Categorie; 


 constructor(private _categorieService : CategorieService){
  }

ngOnInit(): void {
   this._categorieService.rechercherListeCategories()
        .subscribe( listeCat => {this.categories = listeCat;
                                 if(this.categories.length >=1)
                                     this.sC = this.categories[0]; 
                                }, 
                    e => console.log(e.message));
  }
}


 

