const coins = [5, 7, 1, 1, 2, 3, 22];

let allValues = [];
let max = 0;
for (let i = 0; i < coins.length; i++) {
    const element = coins[i];
    max += element;
    for (let j = 0; j < coins.length; j++) {
        const element2 = coins[j];
        if (i !== j) {
            allValues.push(element + element2);
        }
        allValues.push()
    }
}



let minValues = [];
for (let index = 0; index < max; index++) {
    const element = max[j];
    minValues += index;
    for (let j = 0; j < allValues.length; j++) {
        const element2 = allValues[j];
        if (element !== element2) {
            minValues.splice()
        }
        minValues
    }
    console.log()
}
}
console.log(minVal)


//----------------------------

const array = [-2, -1];
//const array = [1, 2, 3, 5, 6, 8, 9]

const result = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result.push(element * element)

}

console.log(result.sort())