// function on nimega käskude kogum, mis täidab kindlat ülesannet. Funktsioonid aitavad meil koodi korrastada ja korduvkasutada.
// 2. parameetrid ja argumendid
function greet(name) {
    console.log("Tere, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

// 3. tagastamine / return
// return tagastab tulemuse ja lõpetab funktsiooni täitmise
function add(a, b) {
    return a + b;
}
const result1 = add(5, 10);
console.log("Summa on: " + result1);


// 4. funktsionaalne avaldis (function expression)
const multiply = function (a, b) {
    return a * b;
}
const product = multiply(5, 10);
console.log("Toode on: " + product);

// 5. arrow function
const divide = (a, b) => {
    return a / b;
};
const result = divide(10, 2);
console.log("Jagatis on: " + result);

// ülesanne
function square(number) {
    return number * number;
}
const result2 = square(5);
console.log("Ruut on: " + result2);
