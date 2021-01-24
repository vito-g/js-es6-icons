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
// ------------------------------------------------------------------------
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
// ---------------------------Che più compatto sarebbe:-------------------
// const typeList = [];
// const elSelector = document.getElementById('selector');
// icons.forEach((element) => {
//   if(!typeList.includes(element.type)) {
//     typeList.push(element.type);
//     elSelector.innerHTML += `
//       <option value="${element.type}">${element.type}</option>
//     `
//   }
// })
// ------------------------------END Compattazione------------------------



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
//}
//
//----------------------eliminando i div di classe box devo rifare e naturalmente correggere la porzione di codice del MILESTONE 1---
/*Milestone 1 - STEP 2
-Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.*/
/*N.B.: Il forEach() è un metodo che esegue una funzione (anonima di tipo ARROW), applicandola a ciascun elemento dell'array.*/


const elContainer = document.getElementsByClassName('container')[0];

/*Dunque, applicando il forEach all'array di oggetti "icons" (sintassi: icons.forEach())  posso andare a ciclare su ogni oggetto dell'array*/
icons.forEach((element) => {
  elContainer.innerHTML += `
  <div>
    <div class="box">
      <div class="${element.family}">
        <i class="${element.family} ${element.prefix}${element.name}"></i>
        <div class="text">
          ${element.name}
        </div>
      </div>
    </div>
  </div>
  `

});
// ----------------------MILESTONE 2------------------------------------------
/*Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.*/

const colorArray = ['blue', 'orange', 'red'];

//Quel che mi occorre e l'array di oggetti che abbiano stesso valore di tipo, e ai quali assegnare un colore univoco

//Creo, dapprima, il mio array vuoto, che chiamo typeArray, che salverà al suo interno i diversi valori di "type" ritrovabili negli oggetti contenuti nell'array "icons" di partenza.

const typeArray = [];

//Per polpolarlo, in modo univoco, dovrò ciclare il mio array di partenza, "icons", e pushare in esso solo i valori di "type" che non risultino già presenti in esso (o meglio già pushati, durante il ciclo, dalla funzione stessa).
//Applico dunque all'array  "icons" il metodo "ForEach" che eseguirà su ciascun elemnto dell'array la funzione ( anonima di tipo arrow) che ha per istruzioni il blocco di codice tra parentesi graffe:

icons.forEach((element) => {
 if (!typeArray.includes(element.type)) {
   typeArray.push(element.type);
 }
 console.log(element.type);
});
console.log(typeArray);

//In realtà questa operazione la avevo già eseguita sopra nel codice























// -----------------MILESTONE 3 da finire----------------------------------
//Voglio fare in modo che i box popolino la pagina in ragione dell'opzione selezionata:


//a mezzo JQUERY, opportunamente caricato nell'head del file index:
const elementSelector = $('#selector');

//Salvo nella const "elContainer" la posizione nel DOM relativa all'elemento di classe "container" in cui andrò poi a stampare i miei box.
// const elContainer = document.getElementsByClassName('container')[0];


//Attraverso il metodo CHANGE eseguo una FX che applico  all'elemento del DOM "select" di id "selector"(salvato nella costante elementSelector). Vado, cioè, a salvare, con la funzione, nella "let" di nome valore, il value dell'option selezionata (identificata dalla parola chiave "this"- con JQUERY $(this)) di select.
elementSelector.change(function() {
  let valore = $(this).val();

  elContainer.innerHTML = ``;// Mi consente di resettare il risultato di stampa in pagina dovuto alla scelta di selezione precedente


  //Creo un array inserendo in esso unicamente gli elementi di icons che hanno type di valore uguale
  let arrayPerType = icons.filter((element)=>{ //(**)
  return element.type === valore
  });

  /*A questo punto, però, mi resta che la select risponda anche all'opzione ALL per la quale ho impostato nell'index.html value uguale a 'all'. Perchè le tre righe di codice che seguono funzionino, occorre mutare l'arrayPerType da const a let: solo così posso garantirgli una nuova assegnazione--->(**)*/

  if (valore === 'all') {
    arrayPerType = icons;
    console.log(arrayPerType);
  }

  console.log(arrayPerType);

  /*Vado a ciclare l'array creato di modo che per ciascun valore di type ,selezionato attraverso il select, stampi in pagina i box e gli elemnti relativi a quel valore di type*/
  arrayPerType.forEach((element) => {  // element è la stringa type
    elContainer.innerHTML += `
    <div>
      <div class="box">
      <div class="${element.family}">
        <i class="${element.family} ${element.prefix}${element.name}"></i>
        <div class="text">
        ${element.name}
        </div>
      </div>
      </div>
    </div>
    `
  });
});
