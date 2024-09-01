const cellBehaviour = function (cell) {
    cell.addEventListener("mouseover", e=>etch(e));
}

const etch = function (e) {
    e.target.style.backgroundColor="black";
}

const sketchSize = 640;
let size = 16;
let cellSize = sketchSize / size;
cellSize += "px";

const main = document.querySelector(".main");
let row, cell, sketch;

sketch=document.createElement("div");
for (let i = 0; i < size; i++) {
    row=document.createElement("div");
    for (let j = 0; j < size; j++) {
        cell=document.createElement("div");
        cell.className="cell";
        row.appendChild(cell);
    }
    row.className="row";
    sketch.appendChild(row);
}
sketch.className="sketch";

cell=sketch.querySelectorAll(".cell");
console.dir(cell);
cell.forEach(box=>cellBehaviour(box));

main.appendChild(sketch);

