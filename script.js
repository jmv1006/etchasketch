const container = document.getElementById("container");
const grid = document.getElementById('grid');
let gridSize;
const btn = document.querySelector('button');


function createGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize ** 2; i++) {
    const newDivs = document.createElement('div');
    newDivs.addEventListener('mouseover', sketch)
    grid.appendChild(newDivs).className = 'boxes';
  }
}
createGrid(16);


function sketch(e) {
  e.target.style.backgroundColor = 'black';
}





