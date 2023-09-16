// script that change color of background
function changeBackgroundColor() {
    const colorName = document.getElementById('colorInput').value;

    if (colorName) {
        document.body.style.backgroundColor = colorName;
    } else {
        alert('Please enter a valid color name.');
    }
}

document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);