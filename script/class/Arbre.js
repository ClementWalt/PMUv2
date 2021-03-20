class Arbre{

    constructor(){

        this.racine= new Noeud();

    }

    getRacine(){

        return this.racine;

    }

    

    AjouterResultat(Resultat, pari){

        var r = this.racine;
        

        while(r.filsG != null || r.filsD != null){

            if(r.getGauche() != null){

                r = r.getGauche();

            }

            else{
                r = r.getDroit();
            }

            
        }

        if(Resultat == false){

            r.setGauche(new Noeud(pari));

        }
        else{

            r.setDroit(new Noeud(pari));

        }



    }

    getLongueurArbre(){

        var r = this.racine;
        var longueur = 0;
            
        while(r.filsD != null || r.filsG != null){

            if(r.filsG != null){

                r = r.getGauche();
                longueur++;

            }

            else{
                r = r.getDroit();
                longueur++;
            }

        }

        return longueur;


    }

    Affichage(){

        var r = this.racine;
            
        while(r.filsD != null || r.filsG != null){

            if(r.filsG != null){

                r = r.getGauche();
                console.log("perdu");

            }

            else{
                r = r.getDroit();
                console.log("gagné");
            }

        }


    }

    calculRatio(){
        
        var r = this.racine;
        var defaite = 1;
        var gagne = 1;
            
        while(r.filsD != null || r.filsG != null){

            if(r.filsG != null){

                r = r.getGauche();
                defaite++;

            }

            else{
                r = r.getDroit();
                gagne++;
            }

        }

        return (gagne/defaite).toFixed(2);


    }

    
}