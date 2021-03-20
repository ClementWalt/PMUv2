class Pile{

    tab;

    constructor(){

        this.tab = [];

    }


    EstVide(){

        var res;

        if(this.tab.length == 0){
            res = true;
        }
        else{
            res = false;
        }  
        return res;
    }

    Empiler(valeur){

        this.tab[this.tab.length] = valeur;


    }

    Depiler(){

        if(this.EstVide()){

            return 0;

        }

        else{

            var lastValue = this.tab[this.tab.length-1];

            var tabinter = [];

            for(let i = 0; i < this.tab.length-1; i++){

                tabinter[i] = this.tab[i];

            }

            this.tab = tabinter;


            return lastValue;

        }


    }

    Afficher(){

        for(let i = 0; i<this.tab.length; ++i){

            console.log(this.tab[i]);

        }

    }

    Alea(){

        for(let i =0; i<20; ++i){

            this.Empiler(i);


        }


    }




}

pile = new Pile;

pile.Alea();

pile.Afficher();

console.log("\n"+"\n"+pile.Depiler()+"\n"+"\n");

pile.Afficher();
