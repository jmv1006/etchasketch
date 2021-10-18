const container = document.getElementById("container");



/* function createDiv() {
  const newDiv = document.createElement('div');
  container.appendChild(newDiv).className = 'grids ';
  document.getElementById('container').appendChild(newDiv);
}
*/

function createGrid() {
  for (i = 0; i < 16; i++) {
    const columns = document.createElement('div');
    container.appendChild(columns).className = 'columns';

    for (j = 0; j < 16; j++) {
      const rows = document.createElement('div');
      container.appendChild(rows).className = 'rows';
    }
  }
}

createGrid();







