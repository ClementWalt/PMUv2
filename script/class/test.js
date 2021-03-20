Joueurs = new Liste;

Joueur1 = new Maillon(["George","Coeur"]);
Joueur2 = new Maillon(["Bénédicte","Trèfle"]);

Joueurs.setPremier(Joueur1);
Joueur1.setSuivant(Joueur2);

console.log(Joueurs.getLongueur());

var Joueur = Joueurs.getPremier();

for(let i =0 ; i < Joueurs.getLongueur();i++){

    tab = Joueur.getValeur()

    console.log(tab[0]);

    Joueur = Joueur.getSuivant();


}
