//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

// 1. creo costante per numero inserito dall'utente
const N = Number(prompt("Inserisci un numero"));
console.log(N);

// 2. creo variabile per conteggio nel ciclo
let n = 0
// 3. strutturato ciclo
do {
    // 4. creato matrice vuota per inserimento numeri
    const array = [];
    console.log(array)
    // 5. creato ciclo for per ripetizione del numero all'interno dell'array 10 volte
    for ( i = 0; i < 10; i++){
        // 6. aggiunta numero casuale da 1 a 100
        array.push(Number(Math.floor(Math.random()*101)));
    }
    n++;
    console.log(array);
} while (n < N) // 7. ripetizione ciclo fino a raggiungimento numero inserito dall'utente.
