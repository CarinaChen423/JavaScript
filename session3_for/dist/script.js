const myObject = {
  name : "foo",
  label : "bar",
  value : 10,
  nestedValue:{
    innerValue:3,
    nestedArray : [1,2,3,5]
  }
};
//write a program to log each element of the nestedArray
for(let i=0;i<myObject.nestedValue.nestedArray.length;i++){
  console.log(myObject.nestedValue.nestedArray[i]);
}