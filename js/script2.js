$(document).ready(function() {
// SNACK 2

// 2 Creare un array di oggetti di squadre di calcio. 
const arrayObjectTeam = [
    //  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
        {
            'nome': 'Milan',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Rubentus',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Inter',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Atalanta',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Napoli',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
        {
            'nome': 'Roma',
            'punti_fatti': 0,
            'falli_subiti': 0
        },
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
let newArrayTeam = [];
for( let i = 0; i < arrayObjectTeam.length; i++ ) {
    let thisTeam = arrayObjectTeam[i];
    

    // const {punti_fatti, falli_subiti} = thisTeam;
    
    thisTeam.punti_fatti = getRndInteger(1, 100);
    thisTeam.falli_subiti = getRndInteger(1, 50);

    console.log(thisTeam);

    // Infine usando la destrutturazione creiamo un nuovo array...
    // ... i cui elementi contengono solo nomi e falli subiti
    let {nome, falli_subiti} = thisTeam;

    newArrayTeam.push({nome, falli_subiti});

    
}


//  e stampiamo tutto in console
console.log('Nuovo array con Nome e Falli subiti', newArrayTeam);



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

});