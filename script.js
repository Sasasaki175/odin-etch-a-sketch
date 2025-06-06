const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", "color: yellow; background: black; border: 2px solid green; margin: 8px; width: 30px; height: 30px");
    grid.textContent = "test";
    gridContainer.appendChild(grid);
  }

  container.appendChild(gridContainer);
}

