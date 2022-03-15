//Core components needed for functionality
const grid = document.getElementById('grid');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const clearBtn = document.getElementById('clearBtn');
const colorPicker = '';


//default values
const defaultSize = 16;
const defaultColor = '#333333';
const defaultMode = 'color';

//current values
let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

//buttons
clearBtn.onclick = (e) => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

//creating the grid

function createGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement)
    }
}

//changing the grid size
function setCurrentSize (newSize) {
    currentSize = newSize
}

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}
 

//clearing the grid
function clearGrid() {
    grid.innerHTML = ''
}

//reloading grid
function reloadGrid() {
    clearGrid()
    createGrid(currentSize)
}



function changeColor(e) {
    e.target.style.backgroundColor = defaultColor
}

window.onload = () => {
    createGrid(defaultSize)
}