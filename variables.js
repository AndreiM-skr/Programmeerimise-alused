let score;

score = 100; // määrame muutuja väärtuse

let age = 25;

const schoolName = "Greenwood High"; // konstant, väärtus ei muutu

let score1 = 0; // määrame muutuja väärtuse

score1 = 50; // muudame muutuja väärtust

console.log("Score: " + score1); // Väljasta muutuja väärtus

const price = 3;
const deliveryFee = 2;
const totalCost = price + deliveryFee;
console.log("Total cost: " + totalCost); // Väljasta muutuja väärtus

// inkrement ja dekrement
let apples = 5;
apples++; // suurendame muutuja väärtust 1 võrra
console.log("Apples: " + apples); // Väljasta muutuja väärtus
apples--; // vähendame muutuja väärtust 1 võrra
console.log("Apples: " + apples); // Väljasta muutuja väärtus

// -=
let points = 20;
points -= 10; // vähendame muutuja väärtust 10 võrra
// points = points - 10; // sama mis ülal
console.log("Points: " + points); // Väljasta muutuja väärtus

// kuidas muuta muutuja väärtust
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log("a: " + a + ", b: " + b);

// nähtavus (scope) - kus muutuja on nähtav
const value = 100; // globaalne muutuja, nähtav kogu koodis
{
    const value = 200; // kohalik muutuja, nähtav ainult selles blokis
    console.log("Local value: " + value); // Väljasta kohalik muutuja väärtus
}
console.log("Global value: " + value); // Väljasta globaalne muutuja väärtus

// Objekti omistamisel kopeeritakse ainult viide, mitte väärtus
const firstObject = { name: "Alice" };
const secondObject = firstObject;
secondObject.name = "Bob"; // muudame secondObject omadust
console.log("First object name: " + firstObject.name);

// kopeerimine väärtuse järgi
const firstValue = { score: 100 };
const secondValue = { ...firstValue };
secondValue.score = 200; // muudame secondValue omadust
console.log("First value score: " + firstValue.score);
console.log("Second value score: " + secondValue.score);