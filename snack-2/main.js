/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */


// creo array numeri 
const numbers = [1,2,3,4,5,6,7,8,9,10,11,23,43,52,32,1]

// funzione accetta 3 elementi
function divideArray (array, a, b) {

    //impostare B come valore massimo 
    if (b > array.length) {
      b = array.length;
    }

    //uso slice per definire il valore minimo e quello massimo
    return array.slice(a, b-1);
  }

// log
console.log(divideArray(numbers, 1, 9));

