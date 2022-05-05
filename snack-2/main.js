//Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// 1. creo array con all'intenro i numeri da andare a dividere in pari o dispari
const numbers = Number['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
console.log(numbers)

// 2. sviluppo ciclo for per controllo numeri all'interno dell'array
for ( i = 0; i <= numbers.length; i++ ) {
    if ( numbers % 2 === 1) {
        // 3. creo div per numeri dispari
        const boxDisp = document.querySelector('#dispari')
        console.log(boxDisp)
        boxDisp.classList.add("red")
        const red = document.querySelector('.red')
        red.innerText += Number(numbers);
        console.log(red[numbers])

    } else if (numbers % 2 === 0) {
        // 4. creo div per numeri pari
        const boxPar = document.querySelector('#pari')
        console.log(boxPar)
        boxDisp.classList.add("green")
        const green = document.querySelector('.green')
        green.innerHTML += numbers;
    }
    dispari.append(red);
    pari.append(green);
}