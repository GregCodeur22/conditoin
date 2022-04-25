// const message = prompt("entrer votre message").toLowerCase();

// for (let i = 0; i < message.length; i++) {
//   if (message[i] === " ") {
//     console.log(" ");
//   } else {
//     const encryptedLetter = message.charCodeAt(i);
//     const realLetter = String.fromCharCode(
//       ((encryptedLetter - 97 + 26 - 3) % 26) + 97
//     );
//     console.log(realLetter);
//   }
// }

// exerice d'algorithme

const root = document.getElementById("root");

const S = prompt("enter un chiffre entre 0 et 100 SOLEIL");
const P = prompt("enter un chiffre entre 0 et 100 PLUIE");
const T = prompt("enter un chiffre entre 0 et 100 TEMPERATURE");
const somme = S * P;
const outToday = true;
let sunnyToday = false;

if (P > 70 || (S > 50 && P < 30) || (P < 70 && T > 20) || S + P < 50) {
  sunnyToday = true;
} else somme > 150;
{
  sunnyToday = false;
}

console.log(somme);
// console.log("est ce qu'il fait beau demain " + sunnyToday);
// console.log("est ce que je suis sorti ajd ?" + outToday);

if (sunnyToday === true) {
  root.textContent = " il fait beau donc demains je sort";
} else if (sunnyToday === false && outToday === false) {
  root.textContent =
    "il ne fais pas beaux demains mais je ne suis pas sortie ajd donc je sort quand même !";
} else if (outToday === true && sunnyToday === false) {
  root.textContent = "je suis sortie aujourd'hui donc je ne sort pas demains ";
}
