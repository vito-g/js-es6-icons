/*Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.

Milestone 3:
- Aggiungere una select per filtrare le icone in base al tipo.
- Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

FACCIAMOLO PRIMA BRUTTISSIMO.
Dovete stupirvi per quanto sarà brutto. (e anche provare qualche brivido)
E poi nel caso, se ci avanza tempo, allora abbelliamolo come negli screen che vi sto inviando.

Consigli:
Ragionate per singola milestone.
Leggetevi prima il tutto giusto per avere chiara l'idea sulla nostra applicazione, ma poi stop.
Prendete quindi solo la prima milestone e conquistatela senza più neanche pensare alle successive. E poi caffettino, e passate alla seconda.
Per la terza milestone un po' di codice l'abbiamo già visto in classe. Approcciate con curiosità e creatività il tutto.*/
// -----------------------------------------------------------------------------------------------------------

/*Milestone 1 - STEP 1
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.*/

const icons = [
  {'name' : 'cat', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'crow', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'dog', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'dove', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'dragon', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'horse', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'hippo', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'fish', 'prefix': 'fa-', 'family': 'fas', 'type': 'animal'},
  {'name' : 'carrot', 'prefix': 'fa-', 'family': 'fas', 'type': 'vegetable'},
  {'name' : 'apple-alt', 'prefix': 'fa-', 'family': 'fas', 'type': 'vegetable'},
  {'name' : 'lemon', 'prefix': 'fa-', 'family': 'fas', 'type': 'vegetable'},
  {'name' : 'pepper-hot', 'prefix': 'fa-', 'family': 'fas', 'type': 'vegetable'},
  {'name' : 'user-astronaut', 'prefix': 'fa-', 'family': 'fas', 'type': 'user'},
  {'name' : 'user-graduate', 'prefix': 'fa-', 'family': 'fas', 'type': 'user'},
  {'name' : 'user-ninja', 'prefix': 'fa-', 'family': 'fas', 'type': 'user'},
  {'name' : 'user-secret', 'prefix': 'fa-', 'family': 'fas', 'type': 'user'}
];

console.log(icons);

//Creo un array i cui elementi siano rappresentati unicamente dai valori associati alla chiave type presente negli oggetti dell'array icons.
const typeList = [];
icons.forEach((element) => {
  if(!typeList.includes(element.type)) {
    typeList.push(element.type);
  }
})
console.log(typeList);

//Andiamo a crearci una cost in cui salvare la posizione dell'elemento "select" del DOM di modo da strutturare poi,in esso, a mezzo javascript le opzioni che lo riguarderanno e che ho salvato attraverso il forEach applicato all'array icons:
const elSelector = document.getElementById('selector');

/*Il forEach() sottostante eseguirà una funzione (anonima di tipo ARROW), su ciascun elemento (valori di type di icons) dell'array "typeList", di modo che nel DOM si stampino tutti i tag "option" all'interno dell'elemento "select" di id "selector" salvato in "elSelector" che abbiano come valore e contenuto proprio l'elemento.*/
typeList.forEach((element) => {  // element è la stringa type
  elSelector.innerHTML += `
    <option value="${element}">${element}</option>
  `
});





// -----------------------------------------------------------------------------------------------------------
/*Milestone 1 - STEP 2
-Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.*/
/*N.B.: Il forEach() è un metodo che esegue una funzione (anonima di tipo ARROW), applicandola a ciascun elemento dell'array.*/

//Questo ciclo stampa inevitabilmente l'ultimo elemento ciclato
// for (let i= 0; i < icons.length; i++) {
//   // let flag = false;
//   const elBox = document.getElementsByClassName('box')[i];
//
//   /*Dunque, applicando il forEach all'array di oggetti "icons" (sintassi: icons.forEach())  posso andare a ciclare su ogni oggetto dell'array*/
//   icons.forEach((element) => {
//     elBox.innerHTML = `
//     <div class="${element.family}">
//       <div >
//         <i class="${element.family} ${element.prefix}${element.name}"></i>
//       </div>
//         ${element.name}
//     </div>
//     `
//
//   });
//
//
//   // Altra prova che stampa in pagina solo la prima icona e il suo nome(con il let flag = false sotto il for canonico). Ma l'uso della flag mi fa uscire subito dal ciclo dopo la prima iterazione!!!
//
//   // icons.forEach((element) => {
//   //   if (flag === false) {
//   //     elBox.innerHTML = `
//   //     <div class="${element.prefix}">
//   //       <div >
//   //         <i class="${element.prefix} ${element.type}"></i>
//   //       </div>
//   //         ${element.name}
//   //     </div>
//   //     `
//   //
//   //   }
//   //   flag = true;
//   // });
//
//
// }
