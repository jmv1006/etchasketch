let divCounter = 0;

function addElement() {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("class", 'divborder');
  const currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}


for (addElement(); divCounter < 15; divCounter++) {
  addElement();
}
