"use strict";
// type complexe tableau d objets (ici j ai utiliser tableau de tableaux) slide 41
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3],
];
function B(note) {
  return note >= 10;//fonctions slide 46
}
function A() {
  for (let i = 0; i < Students.length; i++) { //boucle for et fonctions 45 slide 46 et 
    B(Students[i][3])
      ? console.log(Students[i][0] + ": ADMIS") //if eslse slide 43
      : console.log(Students[i][0] + ": AJOURNÉ");//console.log slide 34
  }
}

