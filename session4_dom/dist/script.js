const value = document.getElementById("message").textContent;
let result = "";

for(let i = 0; i<23; i++){
  result += value + " ";
}
document.getElementById("message").textContent = result;