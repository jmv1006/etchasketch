const container = document.getElementById("container");
const grid = document.getElementById('grid');
const clearbtn = document.getElementById('clear');
const twentyxTwenty = document.getElementById('sizeSetter20');
const sixteenxSixteen = document.getElementById('sizeSetter16');
const thirtyxthirty = document.getElementById('sizeSetter30');
createGrid(16);

// UI buttons
const userInputTwenty = twentyxTwenty.addEventListener('click', function () {
  determineSize(20)
})

const userInputSixteen = sixteenxSixteen.addEventListener('click', function () {
  determineSize(16);
})

const userInputThirty = thirtyxthirty.addEventListener('click', function () {
  determineSize(30);
})

const clrBtnInput = clearbtn.addEventListener('click', function () {
  determineSize(gridSizel)
});

let gridSizel;

// Function that clears/resizes grid based on user button input
function determineSize(num) {
  if (20) {
    cleargrid();
    createGrid(num);
    gridSizel = num;
  } else if (16) {
    cleargrid();
    createGrid(num);
    gridSizel = num;
  } else if (30) {
    cleargrid();
    createGrid(num);
    gridSizel = num;
  } else if (gridSizel) {
    cleargrid();
    createGrid(Number(gridSizel));
  }
}

//function that creates grid
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

//clears grid
function cleargrid() {
  grid.innerHTML = ''
}



