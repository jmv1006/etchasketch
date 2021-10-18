const container = document.getElementById("container");
const grid = document.getElementById('grid');
const clearbtn = document.getElementById('clear');
const TwentyxTwenty = document.getElementById('sizeSetter');
let gridSize = 16;
createGrid(16);

const userInputTwenty = TwentyxTwenty.addEventListener('click', function () {
  determineSize(20)
})



function determineSize(num) {
  if (20) {
    createGrid(20);
    console.log('minnie');
  }
}


function createGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize ** 2; i++) {
    const newDivs = document.createElement('div');
    newDivs.addEventListener('mouseover', sketch)
    grid.appendChild(newDivs).className = 'boxes';
  }
}



function sketch(e) {
  e.target.style.backgroundColor = 'black';
}



clearbtn.addEventListener('click', cleargrid);

function cleargrid() {
  location.reload();
  return false;
}



