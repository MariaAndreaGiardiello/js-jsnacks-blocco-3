//Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// 1. creo array con all'intenro i numeri da andare a dividere in pari o dispari
const numbers = Number[1,2,3,4,5,6,7,8,9,10];
// 3. creo div per numeri dispari
const boxDisp = document.querySelector('#dispari')
// 4. creo div per numeri pari
const boxPar = document.querySelector('#pari')

// 2. sviluppo ciclo for per controllo numeri all'interno dell'array
for(let i = 0; i < numbers.length; i++) {
    const element = document.createElement("p")
    console.log(numbers[i]);
    if ( numbers[i] % 2 === 1) {
        boxDisp.append(element)

    } else if (numbers[i] % 2 === 0) {
        boxPar.append(element)
    }
}