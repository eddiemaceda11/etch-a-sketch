// create 16 by 16 grid using js
// set up grid properly using css

// const container = document.getElementById("container");

// function makeRows(rows, cols) {
//   container.style.setProperty("--grid-rows", rows);
//   container.style.setProperty("--grid-cols", cols);
//   for (c = 0; c < rows * cols; c++) {
//     let cell = document.createElement("div");
//     container.appendChild(cell).className = "grid-item";
//   }
// }

// makeRows(16, 16);

/////////////////////
let btn = document.querySelector("button");
let container = document.querySelector("#container");

btn.addEventListener("click", setGrid());

function setGrid(cols, rows) {
  let numberOfRows = prompt("How many Rows?");
  if (numberOfRows > 100) {
    alert("ERROR = NUMBER MUST BE LESS THAN 100");
    return;
  }

  cols = numberOfRows;
  rows = numberOfRows;

  let n1 = Math.round(Math.random() * 255 + 1);
  let n2 = Math.round(Math.random() * 255 + 1);
  let n3 = Math.round(Math.random() * 255 + 1);

  container.style.setProperty("--grid-cols", numberOfRows);
  container.style.setProperty("--grid-rows", numberOfRows);

  for (let i = 0; i < cols * rows; i++) {
    let div = document.createElement("div");
    // div.classList.add("div");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "rgb(" + n1 + "," + n2 + "," + n3 + ")";
    });

    div.addEventListener("mouseout", () => {
      div.style.backgroundColor = "white";
    });
  }
}
