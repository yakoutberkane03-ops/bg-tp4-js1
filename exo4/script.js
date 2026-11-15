"use strict";//use strict slide 51
// Objet produit (objet slide 39, const slide 51)
const produit = {
  nom: "produit",
  prix: 100,
  quantite: 12,
};

// Valeur du stock (let slide 51, accès aux propriétés d'un objet slide 39)
let valeurStock = produit.prix * produit.quantite;

// Affichage dans la console (console.log slide 33)
console.log("Produit :", produit.nom);
console.log("Prix :", produit.prix);
console.log("Quantite :", produit.quantite);
console.log("Valeur totale du stock :", valeurStock);

// Tableau d'objets (const slide 51, tableau d'objets slide 40)
const catalogue = [
  { nom: "produit1", prix: 1200, quantite: 5 },
  { nom: "produit2", prix: 1330, quantite: 10 },
  { nom: "produit3", prix: 4500, quantite: 8 },
  { nom: "produit4", prix: 25000, quantite: 4 },
  { nom: "produit5", prix: 3040, quantite: 6 },
];
//total initialise a 0 comme si  (s<--s+prix) (reduce slide 141, fonction fléchée slide 46, opérateurs slide 41, tableau d'objets slide 40)
let somme = catalogue.reduce((total, produit) => {
  return total + produit.prix;
}, 0);

// Prix moyen (let slide 51,length slide 38)
let moyenne = somme / catalogue.length;

// Affichage dans la console (console.log slide 33)
console.log("Prix moyen :", moyenne);

// Produits dont le prix dépasse la moyenne (filter slide 141, fonction fléchée slide 46)
let produitsChers = catalogue.filter((produit) => produit.prix > moyenne);

// Affichage dans la console (console.log slide 33)
console.log("Produits dont le prix dépasse la moyenne :" , produitsChers);

// Nombre total d'articles (reduce slide 141, fonction fléchée slide 46)
let totalArticles = catalogue.reduce((total, p) => {
  return total + p.quantite;
}, 0);

// Affichage dans la console (console.log slide 33)
console.log("Nombre total d'articles :", totalArticles);

// Valeur globale du stock (reduce slide 141, fonction fléchée slide 46)
let valeurGlobale = catalogue.reduce((total, p) => {
  return total + p.prix * p.quantite;
}, 0);

// Affichage dans la console (console.log slide 33)
console.log("Valeur globale du stock :", valeurGlobale);

// Fonction f1 : valeur du stock d'un produit (fonction  slide 45)
function f1(produit) {
  return produit.prix * produit.quantite;
}

// Boucle for sur le catalogue (boucle slide 44)
for (let i = 0; i < catalogue.length; i++) {
  console.log(f1(catalogue[i]));
}
//afficher les nom puis les produits : une fois afficher le prix et une fois le produit (fonction slide 45, callback slide 47)
function f2(catalogue, callback) {
  //nom et prix (boucle for slide 44, appel du callback slide 47)
  for (let index = 0; index < catalogue.length; index++) {
    callback(catalogue[index]);
  }
}

// Fonction passée en callback : affiche le prix (fonction slide 45, callback slide 47, console.log slide 33)
function afficherPrix(produit) {
  console.log(produit.prix);
}

// Fonction passée en callback : affiche le nom (fonction slide 45, callback slide 47, console.log slide 33)
function afficherProduit(produit) {
  console.log(produit.nom);
}
// Appels de f2 avec une fonction en paramètre (callback slide 47)
f2(catalogue, afficherPrix);
f2(catalogue, afficherProduit);