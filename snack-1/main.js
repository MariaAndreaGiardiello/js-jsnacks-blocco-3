//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

// 1. creo costante per numero inserito dall'utente
const N = Number(prompt("Inserisci un numero"));
console.log(N);

// 2. generazione numeri casuali da 1 a 100.
let random = Number(Math.floor(Math.random()*101));
console.log(random)

// 3. creo array per contenere 10 numeri casuali
const randomNumbers = [];
for (let i = random; randomNumbers.lenght <= 10; i++ ) {
    randomNumbers.push(random)
}
console.log(randomNumbers)