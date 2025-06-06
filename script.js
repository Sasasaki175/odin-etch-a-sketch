const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", "color: yellow; background: black; width: 30px; height: 30px");
    grid.textContent = "test";
    grid.addEventListener("mouseover", () => {
      grid.setAttribute("style", "color: red; background: white; width: 30px; height: 30px");
    });
    gridContainer.appendChild(grid);
  }

  container.appendChild(gridContainer);
}

