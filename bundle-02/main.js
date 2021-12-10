/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
/*
!FUNZIONE ERRATA
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
*/

/* 
    1- Che cosa fa questo codice?
        La funzione controlla l'età
    2- Sono presenti errori di sintassi?
        Si, non possiamo assegnare una costante ad una variabile
    3- Sono presenti errori logici?
        No
*/

// *FUNZIONE CORRETTA
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// ESERCIZIO 2
/*
!FUNZIONE ERRATA
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
*/

/* 
    1- Che cosa fa questo codice?
        La funzione mi dice quanti colori sono presenti nel mio array 
    2- Sono presenti errori di sintassi?
        Si, la parola 'lenght' scritta in modo sbagliato 
    3- Sono presenti errori logici?
        No
*/

// *FUNZIONE CORRETTA
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();


// ESERCIZIO 3
/*
!FUNZIONE ERRATA
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/

/* 
    1- Che cosa fa questo codice?
        La funzione aggiunge un numero al numero inserito dall'utente
    2- Sono presenti errori di sintassi?
        Si, non possiamo sommare un numero ad una stringa
    3- Sono presenti errori logici?
        No
*/

// *FUNZIONE CORRETTA
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
/*
!FUNZIONE ERRATA
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
*/

/* 
    1- Che cosa fa questo codice?
        La funzione controlla se l'email inserita è presente nell'array di email
    2- Sono presenti errori di sintassi?
        Si, o false e true li utilizziamo come variabile booleana e non come stringa o viceversa, utilizziamo tutto come stringa
    3- Sono presenti errori logici?
        No
*/

// *FUNZIONE CORRETTA
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
/*
!FUNZIONE ERRATA
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();
*/

/* 
    1- Che cosa fa questo codice?
        La funzione controlla se l'email inserita è presente nell'array di email, il controllo avviene solo se la lunghezza inserita è maggiore di 5 
    2- Sono presenti errori di sintassi?
        Si, mancava una parentesi alla fine
    3- Sono presenti errori logici?
        Si
*/

// *FUNZIONE CORRETTA
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
        if (userEmail.length > 5) {
                
            if (email === userEmail) {
            grantAccess = true;                
            }
   
        }
    }
    
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();