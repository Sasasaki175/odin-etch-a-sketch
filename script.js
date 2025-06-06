const container = document.querySelector("#container");
const changeSizeButton = document.querySelector("#change-size-button");

createEtchASketch(16, 16);

changeSizeButton.addEventListener("click", () => {
  let userInputWidth = prompt("Input Etch a Sketch width 1-100", "16");
  let userInputHeight = prompt("Input Etch a Sketch height 1-100", "16");
  let etchASketchWidth = Number(userInputWidth);
  let etchASketchHeight = Number(userInputHeight);
  if ((etchASketchWidth >= 1 && etchASketchWidth <= 100 && etchASketchWidth != NaN)
  && (etchASketchHeight >= 1 && etchASketchHeight <= 100 && etchASketchHeight != NaN)) {
    while (container.firstChild) {
      container.firstChild.remove();
    }
    createEtchASketch(etchASketchWidth, etchASketchHeight);
  } else {
    alert(`\"` + userInputWidth + `\"` + " or "+ `\"` + userInputHeight + `\"` + " is not a valid input.");
  }
});

function createEtchASketch (width, height) {
  for (let i = 0; i < width; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridRow.setAttribute("style", "flex: 1; display: flex; flex-direction: column;");

    for (let i = 0; i < height; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("style", "color: yellow; background: black; flex: 1;");
      square.addEventListener("mouseover", () => {
        square.setAttribute("style", "color: red; background: white; flex: 1;");
      });
      gridRow.appendChild(square);
    }

    container.appendChild(gridRow);
  }
}

