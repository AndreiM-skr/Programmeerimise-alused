const age = 20;

if (age >= 18) {

    console.log("Täiskasvanu.");

} else {

    console.log("Noor.");

}
// 2.
const points = 75;
if (points >= 90) {
    console.log("Suurepärane!");
} else if (points >= 50) {
    console.log("Arvestatud!");
} else {
    console.log("Proovi uuesti!");
}
//3.
const hasTicket = true;
const hasInvitation = false;
const isBlocked = false;
if ((hasTicket || hasInvitation) && !isBlocked) {
    console.log("Sissepaas lubatud.");
}

// ülesanne
const number = 10;
// kontrollime, kas number on paaris või paaritu
if (number % 2 === 0) {
    console.log("Paaris");
} else {
    console.log("Paaritu");
}
