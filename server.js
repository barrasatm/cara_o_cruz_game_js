/*

 Title: Cara o cruz
 Author: Barrasa
 Description: Te dice algo aleatorio entre cara o cruz

*/

// Especificaciones
 let random = Math.floor(Math.random() * 2);
 let rl = require("readline");
 let prompts = rl.createInterface(process.stdin, process.stdout);

// Codigo
 prompts.question("Escriba GO para lanzar la moneda ", function(lanzar) {
     if (lanzar == "GO") {
         if (random == "0") {
            console.log(`Ha salido cara`)
         }
         if (random == "1") {
             console.log(`Ha salido cruz`)
            }
     } else {
         console.log("Palabra no valida, escriba GO para lanzar la moneda")
        }
 })