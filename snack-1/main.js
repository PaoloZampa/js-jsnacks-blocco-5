/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine */


//creo lista zucchine
const obj = [
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },
    {
        varieta: 'verde',
        peso: 40,
        lunghezza: 20
    },

]

console.log(obj);


function sumWeight(...params) {
    let sum = 0
    params.forEach(peso => {
        sum += peso.peso
    })

    return sum
}

const sumWeightZucchini = sumWeight(obj)
console.log(sumWeightZucchini);