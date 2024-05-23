'use stric'

const people =[
    {  nome: 'Tizio', cognome: 'Caio', eta: 20},
    {  nome: 'Pippo', cognome: 'pluto',  eta: 15},
];

const peopleCanDrive = [];

for(let i = 0; i < people.length; i++){
    //creo variabile di appoggio per pescare gli oggetti
    const currentPeople = people[i];

    const newObj = {
        nome: currentPeople.nome,
        cognome: currentPeople.cognome,
        eta: currentPeople.eta,
        info: 'non puo guidare',
    }

    if(currentPeople.eta >= 18){
        newObj.info = 'puo guidare';
        peopleCanDrive.push(newObj); //puo guidare    
    }else{
        peopleCanDrive.push(newObj);  //non puo guidare
    }
}

console.log(people);
console.log(peopleCanDrive);