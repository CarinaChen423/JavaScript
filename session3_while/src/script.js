const myObject = {
  name : "foo",
  label : "bar",
  value : 10,
  nestedValue:{
    innerValue:3,
    nestedArray : [1,2,3,5]
  }
};
//write a program to use a while loop to edit the value to value, untile it is 0;
while(myObject.nestedValue.innerValue>=0){
  console.log(myObject.nestedValue.innerValue);
  myObject.nestedValue.innerValue--;
}