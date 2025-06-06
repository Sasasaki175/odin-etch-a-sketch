const container = document.querySelector("#container");
const changeSizeButton = document.querySelector("#change-size-button");

let size = 16;

createEtchASketch(size);

changeSizeButton.addEventListener("click", () => {
  let userInput = prompt("Input Etch a Sketch size 1-100", "16")
  let etchASketchSize = Number(userInput);
  if (etchASketchSize >= 1 && etchASketchSize <= 100 && etchASketchSize != NaN) {
    while (container.firstChild) {
      container.firstChild.remove();
    }
    createEtchASketch(etchASketchSize);
  } else {
    alert(`\"` + userInput + `\"` + " is not a valid input.");
  }
});

function createEtchASketch (size) {
  for (let i = 0; i < size; i++) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    for (let i = 0; i < size; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("style", "color: yellow; background: black; width: 30px; height: 30px");
      grid.addEventListener("mouseover", () => {
        grid.setAttribute("style", "color: red; background: white; width: 30px; height: 30px");
      });
      gridContainer.appendChild(grid);
    }

    container.appendChild(gridContainer);
  }
}

