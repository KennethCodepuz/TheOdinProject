const gridSize = 600;
let gridCellSize = 16;

let color = 'black';
let lastX;
let lastY;


let sketchArea = document.querySelector('#etchasketch');
sketchArea.style.width = `${gridSize}px`;
sketchArea.style.height = `${gridSize}px`;

let randomBtn = document.querySelector('.color-palette');
randomBtn.addEventListener('click', () => {
    let element = document.querySelector('.color-palette').textContent;
    console.log(element);
    randomColor(element);
});


function changeBackgroundColor() {
    this.style.backgroundColor = color;
}

function createGrid(gridCellValue) {
    const widthAndheight = gridSize / gridCellValue;
    for(let i = 0; i < (gridCellValue * gridCellValue); ++i) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(widthAndheight)}px`;
        gridCell.style.height = `${(widthAndheight)}px`;
        gridCell.setAttribute(`data-div-id`, `${i}`);
        gridCell.classList.add('cell');

        sketchArea.appendChild(gridCell);

        sketchArea.addEventListener('mousedown', () =>  {
            gridCell.addEventListener('mouseover', changeBackgroundColor);
        });

        sketchArea.addEventListener('mouseup', () => {
            gridCell.removeEventListener('mouseover', changeBackgroundColor);
        });
        
    }
}

function randomColor(random) {
    if (random === 'random') {
        color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

}

let eraserbtn = document.querySelector('#eraser-btn');
eraserbtn.addEventListener('click', () => {
    if(color === 'black') {
        color = 'white';
    }else {
        color = 'black';
    }
});

let sizeBtn = document.querySelector('#setSize');
sizeBtn.addEventListener('click', () => {
    sketchArea.innerHTML = '';
    let gridSizeValue = document.querySelector('#sizeValue').value;
    console.log(gridSizeValue);

    if (gridSizeValue < 2 || gridSizeValue > 100) { 
        alert("Please enter a number between 1 and 100");
        return;
    }

    createGrid(gridSizeValue);
});

let resetbtn = document.querySelector('#resetbtn');
resetbtn.addEventListener('click', () => {
    let divCell = document.querySelectorAll('.cell');
    divCell.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});

createGrid(gridCellSize);