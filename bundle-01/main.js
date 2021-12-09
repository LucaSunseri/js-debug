/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* 
    1- Che cosa fa questo codice?
        Il codice esegue un ciclo for
    2- Sono presenti errori di sintassi?
        Non sono presenti erroti di sintassi
    3- Sono presenti errori logici?
        Si perchè in questo caso la condizione inserita non sarà mai valida ed il ciclo non inizierà mai
*/


// ESERCIZIO 2
/*
!FUNZIONE ERRATA
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
*/

/* 
    1- Che cosa fa questo codice?
        La funzione aggiunge +5 se il numero è pari
    2- Sono presenti errori di sintassi?
        Si l'uguale, perchè un solo uguale è assegnazione
    3- Sono presenti errori logici?
        No
*/

// *FUNZIONE CORRETTA
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
/* 
!FUNZIONE ERRATA
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
*/

/* 
    1- Che cosa fa questo codice?
        La funzione esegue un ciclo for
    2- Sono presenti errori di sintassi?
        Si, la virgola invece del punto e virgola
    3- Sono presenti errori logici?
        No
*/

// *FUNZIONE CORRETTA
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
/* 
!FUNZIONE ERRATA
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
*/

/* 
    1- Che cosa fa questo codice?
        Restiusci un array di numeri pari
    2- Sono presenti errori di sintassi?
        Si
    3- Sono presenti errori logici?
        SI, il return all'interno del ciclo for
        
*/

// *FUNZIONE CORRETTA
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
