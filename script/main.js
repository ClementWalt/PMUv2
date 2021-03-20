var listeCarte=[2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52];
var listeMalus=[].concat(listeCarte);
var Joueurs = new Liste;

function setup() {
  pioche = new Pile;

  for(let i = 0; i < listeCarte.length; i++){

    pioche.Empiler(listeCarte[getRandomInt(listeCarte.length)]);


  }  
  noCanvas();
  shuffle(listeMalus,true);
}

function getRandomInt(max) { 
  return Math.floor(Math.random() * Math.floor(max));
}

function saisieJoueurPari(){
  var i=1;
  var NomJoueur= window.prompt("Nom du Joueur "+ i +" : ");
  var Pari = window.prompt(NomJoueur + " Quelle couleurs choissiez-vous ? (Coeur,Trèfle,Pique,Carreau)");

  Joueurs.setPremier(new Maillon([NomJoueur,Pari,new Arbre()]));

  $("#joueur").append($("<h4>",{"id":"joueur"+i}).text(Joueurs.getPremier().getValeur()[0]));
  i++;
  while(NomJoueur != ""){
    
    NomJoueur= window.prompt("Nom du Joueur "+ i +" : (Si plus de joueur appuyer sur entrée avec le champs vide)");
    if(NomJoueur != ""){
      Pari = window.prompt(NomJoueur + " Quelle couleurs choissiez-vous ? (Coeur,Trèfle,Pique,Carreau)");

      Joueurs.ajouterFin(new Maillon([NomJoueur,Pari,new Arbre()]));
      $("#joueur").append($("<h4>",{"id":"joueur"+i}).text(NomJoueur));
      i++;
    }
  }

  AffichagePari();

}

function changementPari(){

  var Joueur = Joueurs.getPremier();
  var i =0;

  

  while( i < Joueurs.getLongueur()){

    $('#coulJoueur').remove();

    NomJoueur = Joueur.getValeur()[0];

    var Pari = window.prompt(NomJoueur + " Quelle couleurs choissiez-vous ? (Coeur,Trèfle,Pique,Carreau)");

    Joueur.setValeur([NomJoueur,Pari,Joueur.getValeur()[2]]);

    Joueur = Joueur.getSuivant();

    i++
  }

  AffichagePari();
}

function AffichagePari(){
  

  var i = 1;
  var Joueur = Joueurs.getPremier();

  $("#nbPartie").text("Nombre de Partie : "+ Joueur.getValeur()[2].getLongueurArbre());

  while(i < Joueurs.getLongueur()+1){
    
    $("#joueur"+i).prepend($("<span>",{"style":"float:right;", "id":"coulJoueur"}).text("pari sur le "+Joueur.getValeur()[1]+ " | ratio : "+Joueur.getValeur()[2].calculRatio()));

    Joueur = Joueur.getSuivant();
    i++;
  
  }

  

  

  document.querySelector("#lancer").style.display = "None";
  document.querySelector("#jeu").style.visibility = "visible";

}

var h = 1;
var pique=1;
var carreau=1;
var coeur=1;
var trefle=1;
var cartemalus1=false;
var cartemalus2=false;
var cartemalus3=false;
var cartemalus4=false;
var cartemalus5=false;
var cartemalus6=false;

function reRemplirePioche(){

  for(let i = 0; i < listeCarte.length; i++){

    pioche.Empiler(listeCarte[getRandomInt(listeCarte.length)]);


  } 


}

function Tour(){
  h = h+1;

  var cartepioche = pioche.Depiler();

  if(h==listeCarte.length-1){
    h=1;
    reRemplirePioche();

  }
  $("#melange").attr("src", "image/carte/"+cartepioche+".png");

  if (cartepioche > 1 && cartepioche < 14) {
    pique=pique+1;
    document.querySelector("#pique"+pique).style.visibility = "visible";
    document.querySelector("#pique"+(pique-1)).style.visibility = "hidden";
    if(pique == 8){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }
  if (cartepioche > 14 && cartepioche < 27) {
    coeur=coeur+1;
    document.querySelector("#coeur"+coeur).style.visibility = "visible";
    document.querySelector("#coeur"+(coeur-1)).style.visibility = "hidden";
    if(coeur == 8){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }
  if (cartepioche > 27 && cartepioche < 40) {
    carreau=carreau+1;
    document.querySelector("#carreau"+carreau).style.visibility = "visible";
    document.querySelector("#carreau"+(carreau-1)).style.visibility = "hidden";
    if(carreau == 8){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }
  if (cartepioche > 40 && cartepioche < 53) {
    trefle=trefle+1;
    document.querySelector("#trefle"+trefle).style.visibility = "visible";
    document.querySelector("#trefle"+(trefle-1)).style.visibility = "hidden";
    if(trefle == 8){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }

  }

  if(pique > 1 && trefle > 1 && carreau > 1 && coeur > 1 && cartemalus1 == false){

    $("#malus1").attr("src", "image/carte/"+listeMalus[h]+".png");

    cartemalus1 = true;
    if (listeMalus[h] > 1 && listeMalus[h] < 14) {
      pique=pique-1;
      document.querySelector("#pique"+pique).style.visibility = "visible";
      document.querySelector("#pique"+(pique+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 14 && listeMalus[h] < 27) {
      coeur=coeur-1;
      document.querySelector("#coeur"+coeur).style.visibility = "visible";
      document.querySelector("#coeur"+(coeur+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 27 && listeMalus[h] < 40) {
      carreau=carreau-1;
      document.querySelector("#carreau"+carreau).style.visibility = "visible";
      document.querySelector("#carreau"+(carreau+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 40 && listeMalus[h] < 53) {
      trefle=trefle-1;
      document.querySelector("#trefle"+trefle).style.visibility = "visible";
      document.querySelector("#trefle"+(trefle+1)).style.visibility = "hidden";

    }


  }

  if(pique > 2 && trefle > 2 && carreau > 2 && coeur > 2 && cartemalus2 == false){

    $("#malus2").attr("src", "image/carte/"+listeMalus[h]+".png");

    cartemalus2 = true;
    if (listeMalus[h] > 1 && listeMalus[h] < 14) {
      pique=pique-1;
      document.querySelector("#pique"+pique).style.visibility = "visible";
      document.querySelector("#pique"+(pique+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 14 && listeMalus[h] < 27) {
      coeur=coeur-1;
      document.querySelector("#coeur"+coeur).style.visibility = "visible";
      document.querySelector("#coeur"+(coeur+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 27 && listeMalus[h] < 40) {
      carreau=carreau-1;
      document.querySelector("#carreau"+carreau).style.visibility = "visible";
      document.querySelector("#carreau"+(carreau+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 40 && listeMalus[h] < 53) {
      trefle=trefle-1;
      document.querySelector("#trefle"+trefle).style.visibility = "visible";
      document.querySelector("#trefle"+(trefle+1)).style.visibility = "hidden";

    }


  }
  if(pique > 3 && trefle > 3 && carreau > 3 && coeur > 3 && cartemalus3 == false){

    $("#malus3").attr("src", "image/carte/"+listeMalus[h]+".png");

    cartemalus3 = true;
    if (listeMalus[h] > 1 && listeMalus[h] < 14) {
      pique=pique-1;
      document.querySelector("#pique"+pique).style.visibility = "visible";
      document.querySelector("#pique"+(pique+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 14 && listeMalus[h] < 27) {
      coeur=coeur-1;
      document.querySelector("#coeur"+coeur).style.visibility = "visible";
      document.querySelector("#coeur"+(coeur+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 27 && listeMalus[h] < 40) {
      carreau=carreau-1;
      document.querySelector("#carreau"+carreau).style.visibility = "visible";
      document.querySelector("#carreau"+(carreau+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 40 && listeMalus[h] < 53) {
      trefle=trefle-1;
      document.querySelector("#trefle"+trefle).style.visibility = "visible";
      document.querySelector("#trefle"+(trefle+1)).style.visibility = "hidden";

    }


  }
  if(pique > 4 && trefle > 4 && carreau > 4 && coeur > 4 && cartemalus4 == false){

    $("#malus4").attr("src", "image/carte/"+listeMalus[h]+".png");

    cartemalus4 = true;
    if (listeMalus[h] > 1 && listeMalus[h] < 14) {
      pique=pique-1;
      document.querySelector("#pique"+pique).style.visibility = "visible";
      document.querySelector("#pique"+(pique+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 14 && listeMalus[h] < 27) {
      coeur=coeur-1;
      document.querySelector("#coeur"+coeur).style.visibility = "visible";
      document.querySelector("#coeur"+(coeur+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 27 && listeMalus[h] < 40) {
      carreau=carreau-1;
      document.querySelector("#carreau"+carreau).style.visibility = "visible";
      document.querySelector("#carreau"+(carreau+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 40 && listeMalus[h] < 53) {
      trefle=trefle-1;
      document.querySelector("#trefle"+trefle).style.visibility = "visible";
      document.querySelector("#trefle"+(trefle+1)).style.visibility = "hidden";

    }


  }
  if(pique > 5 && trefle > 5 && carreau > 5 && coeur > 5 && cartemalus5 == false){

    $("#malus5").attr("src", "image/carte/"+listeMalus[h]+".png");

    cartemalus5 = true;
    if (listeMalus[h] > 1 && listeMalus[h] < 14) {
      pique=pique-1;
      document.querySelector("#pique"+pique).style.visibility = "visible";
      document.querySelector("#pique"+(pique+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 14 && listeMalus[h] < 27) {
      coeur=coeur-1;
      document.querySelector("#coeur"+coeur).style.visibility = "visible";
      document.querySelector("#coeur"+(coeur+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 27 && listeMalus[h] < 40) {
      carreau=carreau-1;
      document.querySelector("#carreau"+carreau).style.visibility = "visible";
      document.querySelector("#carreau"+(carreau+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 40 && listeMalus[h] < 53) {
      trefle=trefle-1;
      document.querySelector("#trefle"+trefle).style.visibility = "visible";
      document.querySelector("#trefle"+(trefle+1)).style.visibility = "hidden";

    }


  }
  if(pique == 6 && trefle == 6 && carreau == 6 && coeur == 6 && cartemalus6 == false){

    $("#malus6").attr("src", "image/carte/"+listeMalus[h]+".png");

    cartemalus6 = true;
    if (listeMalus[h] > 1 && listeMalus[h] < 14) {
      pique=pique-1;
      document.querySelector("#pique"+pique).style.visibility = "visible";
      document.querySelector("#pique"+(pique+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 14 && listeMalus[h] < 27) {
      coeur=coeur-1;
      document.querySelector("#coeur"+coeur).style.visibility = "visible";
      document.querySelector("#coeur"+(coeur+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 27 && listeMalus[h] < 40) {
      carreau=carreau-1;
      document.querySelector("#carreau"+carreau).style.visibility = "visible";
      document.querySelector("#carreau"+(carreau+1)).style.visibility = "hidden";
    }
    if (listeMalus[h] > 40 && listeMalus[h] < 53) {
      trefle=trefle-1;
      document.querySelector("#trefle"+trefle).style.visibility = "visible";
      document.querySelector("#trefle"+(trefle+1)).style.visibility = "hidden";

    }


  }



  if(pique == 8) {
    finish("Pique");
  }
  if(trefle == 8) {
    finish("Trèfle");
  }
  if(carreau == 8) {
    finish("Carreau");
  }
  if(coeur == 8) {
    finish("Coeur");
  }
}


var intervalid = null;

function reinit(){

  for(var i=1;i<=8;i++){
    document.querySelector("#carreau"+i).style.visibility = "hidden";
    document.querySelector("#trefle"+i).style.visibility = "hidden";
    document.querySelector("#coeur"+i).style.visibility = "hidden";
    document.querySelector("#pique"+i).style.visibility = "hidden";
  }

  for(var e=1;e<=6;e++){
    $("#malus"+e).attr("src", "image/cartedos.png");
  }
  $("#melange").attr("src", "image/cartedos.png");
  document.querySelector("#carreau1").style.visibility = "visible";
  document.querySelector("#pique1").style.visibility = "visible";
  document.querySelector("#coeur1").style.visibility = "visible";
  document.querySelector("#trefle1").style.visibility = "visible";

  cartemalus1 = false;
  cartemalus2 = false;
  cartemalus3 = false;
  cartemalus4 = false; 
  cartemalus5 = false;
  cartemalus6 = false;

}

function boucle(){
  document.querySelector("#tirage2").style.visibility = "hidden";
  intervalid = setInterval(Tour,100);
}

function finish(value) {

  var testResultJoueur = Joueurs.getPremier();

  var i = 0;

  while( i < Joueurs.getLongueur()){

    if(testResultJoueur.getValeur()[1] == value){

      testResultJoueur.getValeur()[2].AjouterResultat(true,value);

    }
    else{

      testResultJoueur.getValeur()[2].AjouterResultat(false,value);

    }

    testResultJoueur = testResultJoueur.getSuivant();

    i++;

  }


  clearInterval(intervalid);
  document.querySelector("#nouvelle").style.visibility = "visible";
  document.querySelector("#recommencer").style.visibility = "visible";

}

function Recommencer(){
  document.querySelector("#nouvelle").style.visibility = "hidden";
  document.querySelector("#recommencer").style.visibility = "hidden";
  changementPari();
  pique = 1;
  trefle = 1;
  coeur=1;
  carreau=1;
  reinit();


  document.querySelector("#tirage2").style.visibility = "visible";





}
