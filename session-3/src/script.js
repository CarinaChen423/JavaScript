// Define an array to store fruits
const fruits = ['apple', 'banana', 'orange', 'grape'];

// Use a loop to iterate through the values in the array
for (let i = 0; i < fruits.length; i++) {
  // Use interpolation and console.log to output the result
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

console.log('============================')

// Using unshift to add element at the start of the array
console.log('Current fruits: ' + fruits)
fruits.unshift('mango');
console.log('Fruits after unshift: ' + fruits);

// Using shift to remove the first element of the array
const removedFruit = fruits.shift();
console.log('Now we remove: ' + removedFruit)
console.log('Fruits after shift: ' + fruits)

console.log('============================')

// Using split to convert new string to an array
const newFruitsString = 'prune,apricot,tangerine,pear';
const newFruitsArray = newFruitsString.split(',');
console.log('New fruits array: ' + newFruitsArray);

console.log('============================')

// Concatenating both arrays
const allFruits = fruits.concat(newFruitsArray)

// Using a while loop 
let j = 0
while (j < allFruits.length) {
  console.log(`Fruit #${j+1}: ${allFruits[j]}`)
  j++
}

