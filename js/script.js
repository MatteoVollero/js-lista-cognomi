var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//Chiedo il cognome all'utente
var cognomeUtente = prompt("Inserire il prorio cognome");

//Inserisco il cognome all'interno dell'array
cognomi.push(cognomeUtente);

//Ordino l'array
cognomi.sort();

//Stampo i cognomi per debug
console.log(cognomi);

//Questa variabile conterrà il numero dell'indice
var indice = -1;

//Trovo la posizione dell'ultimo cognome inserito
for(i = 0 ; i < cognomi.length ; i ++){
  if(cognomi[i] == cognomeUtente){
    indice = i;
  }
}

if(indice != -1){
  console.log("Posizione cognome utente(partendo a contare da 0) ---> " + indice);
  indice ++;
  console.log("Posizione cognome utente(partendo a contare da 1) ---> " + indice);
}

//trovo l'indice
function findSurname(element){
  return element == cognomeUtente;
}

console.log("cognome trovato tramite la funzione ---> " + cognomi.findIndex(findSurname));
