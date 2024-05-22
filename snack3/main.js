'use strict';

//creo array di oggetti degli animali
const animal = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome: 'lucertola',
        famiglia: 'lacertidi',
        classe: 'rettili',
    }
];


//creo array vuoto dove dovro inserire i mammiferi 
const mammiferi = [];

for(let i = 0; i < animal.length; i++){
    //console.log(animal[i]);

    //creo variabile di appoggio per pescare gli oggetti
    const currentAnimal = animal[i];

    //verifico se la classe è quella che cerco e se è vero inserisco il tutto nell'array creato
    if(currentAnimal.classe === 'mammiferi'){
        mammiferi.push(currentAnimal);
    }
}

console.log(mammiferi);