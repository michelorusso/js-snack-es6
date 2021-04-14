$(document).ready(function() {
// SNACK 1

// 1 Creare un array di oggetti: 
const arrayObjectBike = [

    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
    {
        'nome': 'Downhill',
        'peso': 35
    },
    {
        'nome': 'Bmx',
        'peso': 38
    },
    {
        'nome': 'Minibici',
        'peso': 27
    },
    {
        'nome': 'Tandem',
        'peso': 36
    },
    {
        'nome': 'Triciclo',
        'peso': 42
    },
    {
        'nome': 'Mountain bike',
        'peso': 38
    },
];

console.log(arrayObjectBike);

// uso il ciclo for per avere ogni singolo oggetto dell'array di oggetti
// 
// lightBike -> è la variabile dove verrà salvato l'oggetto con il peso più piccolo
let lightBike = arrayObjectBike[0];
for( let i = 0; i < arrayObjectBike.length; i++ ) {
    //  thisBike -> è il singolo oggetto
    let thisBike = arrayObjectBike[i];

    // console.log(thisBike);
    
    // uso destructuring per ottenere nome e peso
    const {nome, peso} = thisBike;

    if( peso < lightBike.peso ) {
        lightBike = thisBike;
    }

    // console.log(nome);
    // console.log(peso);
}

console.log('Bicicletta leggera', lightBike);

// Stampare a schermo la bici con peso minore utilizzando template literal Snack
const bicycleLight = `
    <h2>
    La bicicletta ${lightBike.nome} è la più leggera con un peso di ${lightBike.peso} Kg
    </h2>
`;

console.log(bicycleLight);














// SNACK 2
// 2 Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
// e falli subiti e stampiamo tutto in console.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

});