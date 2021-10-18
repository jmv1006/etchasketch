const container = document.getElementById("container");
const grid = document.getElementById('grid');


let gridSize;

function createGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize ** 2; i++) {
    const newDivs = document.createElement('div');
    grid.appendChild(newDivs).className = 'boxes';
  }
}
createGrid(16);




