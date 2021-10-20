const container = document.getElementById("container");
const grid = document.getElementById('grid');
const clearbtn = document.getElementById('clear');
const twentyxTwenty = document.getElementById('sizeSetter20');
const sixteenxSixteen = document.getElementById('sizeSetter16');
const thirtyxthirty = document.getElementById('sizeSetter30');
const redColor = document.getElementById('colorSetterRed');
const blackColor = document.getElementById('colorSetterBlack');
const blueColor = document.getElementById('colorSetterBlue');
const checkBox1 = document.querySelector("input[name=toggleGrid]");

createGrid(16);
let currentMode = 'black';

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
    newDivs.addEventListener('mouseover', sketch);
    grid.appendChild(newDivs).className = 'boxes';

    //controls grid lines checkbox
    checkBox1.addEventListener('change', function () {
      if (this.checked) {
        newDivs.className = 'noBorder';
      } else {
        newDivs.className = 'boxes';
      }
    });
  }
}

const userPickedRed = redColor.addEventListener('click', function () {
  currentMode = 'red';
  sketch;
})
const userPickedBlack = blackColor.addEventListener('click', function () {
  currentMode = 'black';
  sketch;
})
const userPickedBlue = blueColor.addEventListener('click', function () {
  currentMode = 'blue';
  sketch;
})

/*
const userPickedRainbow = rainbowColor.addEventListener('click', function () {
  currentMode = 
})
*/

function sketch(e) {
  if (currentMode == 'black') {
    e.target.style.backgroundColor = 'black';
  } else if (currentMode == 'red') {
    e.target.style.backgroundColor = 'red';
  } else if (currentMode == 'blue') {
    e.target.style.backgroundColor = 'blue';
  }
}




//clears grid
function cleargrid() {
  grid.innerHTML = ''
}




/*
function rainbowGenerator() {
  const rainbowColors = ['blue', 'red', 'yellow', 'purple', 'green'];
  const randomNumber = Math.floor(Math.random() * 5);
  return rainbowColors[randomNumber];
}
*/


