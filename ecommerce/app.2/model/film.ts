//sera transfere zu format JSON
export class Film {
    id : number;
    titre : string;
    resume : string;
    langue : string;
    duree : string;
//    idGenre : number;
//    idRealisateur : number;
    publics : string;
    origine : string;
    format : string;
    affiche : string;
    quantite : number;
    prix : number;


    constructor(id : number = 0,
                titre : string = "?",
                resume : string ="?",
                 langue : string="?",
                duree : string="?",
                publics : string="?",
                origine : string="?",
                format : string="?",
                affiche : string="?",
                quantite : number=0,
                    prix : number=0){
                    this.id = id;
                    this.titre = titre;
                    this.resume = resume;
                    this.langue = langue;
                    this.duree = duree;
                    this.origine = origine;
                    this.publics = publics;
                    this.quantite = quantite;
                    this.format =format;
                    this.affiche =affiche;
                    this.prix= prix;

                }
}