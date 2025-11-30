let vetements = "Aucun";
let accessoires = "Aucun";
let maquillage = "Aucun";
let proprete = "Sale";

function changerVetements() {
    vetements = "Robe Rose";
    document.getElementById("personnage-img").src = "images/robe.png";
    mettreAJourEtat();
}

function ajouterAccessoire() {
    accessoires = "Collier";
    document.getElementById("personnage-img").src = "images/collier.png";
    mettreAJourEtat();
}

function maquiller() {
    maquillage = "Maquillage léger";
    document.getElementById("personnage-img").src = "images/maquillage.png";
    mettreAJourEtat();
}

function nettoyer() {
    proprete = "Propre";
    document.getElementById("personnage-img").src = "images/propre.png";
    mettreAJourEtat();
}

function mettreAJourEtat() {
    document.getElementById("etat-personnage").innerText =
        `Vêtements: ${vetements} | Accessoires: ${accessoires} | Maquillage: ${maquillage} | Propreté: ${proprete}`;
}
