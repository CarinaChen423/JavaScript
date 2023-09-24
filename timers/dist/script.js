const list = document.getElementById("fruits");
const items = list.getElementsByTagName("li");

// Find the index of the last item 
let index = items.length -1;

function showNextItem() {
  if (index >= 0) {
    items[index].style.visibility = "visible";
    index--; // count down
    // delay in milliseconds (one second)
    setTimeout(showNextItem, 1000);
  }
}

showNextItem();