class Noeud{

    constructor(contenu, filsG, filsD){

        this.filsG = filsG;
        this.filsD = filsD;
        this.contenu = contenu;

    }

    getGauche(){
        return this.filsG;
    }

    getDroit(){
        return this.filsD;
    }

    getContenu(){
        return this.contenu;
    }

    setGauche(gauche){

        this.filsG = gauche;

    }

    setDroit(droit){

        this.filsD = droit;

    }

    setContenu(contenu){
        this.contenu = contenu;
    }


}