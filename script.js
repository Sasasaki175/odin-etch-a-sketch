const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.textContent = "test";
    gridContainer.appendChild(grid);
  }

  container.appendChild(gridContainer);
}

