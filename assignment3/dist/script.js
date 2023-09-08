// Define an array to store values
const myList = [1, 2, 3, 4, 5];

// Define a function to loop through and output the values
function outputList(arr) {
  console.log("Values in the list:");
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i}: ${arr[i]}`);
  }
}

// Call the function to output the list
outputList(myList);

// Define an object with a method to loop through and output the values
const myObject = {
  values: [6, 7, 8, 9, 10],
  outputValues: function() {
    console.log("Values in the object:");
    for (let i = 0; i < this.values.length; i++) {
      console.log(`Index ${i}: ${this.values[i]}`);
    }
  }
};

// Call the object's method to output its values
myObject.outputValues();

// Use a while loop to iterate through values in an array
const fruits = ["apple", "banana", "cherry", "date"];
let index = 0;

console.log("Values in another list using while loop:");
while (index < fruits.length) {
  console.log(`Index ${index}: ${fruits[index]}`);
  index++;
}