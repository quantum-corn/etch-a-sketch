const cellBehaviour = function (cell, size) {
    const sketchSize = 640;
    let cellSize = sketchSize / size;
    cellSize += "px";

    cell.style.width=cellSize;
    cell.style.height=cellSize;
    cell.addEventListener("mouseover", e=>etch(e));
}

const etch = function (e) {
    e.target.style.backgroundColor="black";
}

const changeSize = function (size) {
    if (size>=1 && size<=100) sketchpad(size);
    else getSize();
}

const getSize = function() {
    changeSize(prompt("Enter the grid size, up to 100. Eg: for a grid of 100x100 cells, enter 100"));
}

const sketchpad = function (size) {
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
    cell.forEach(box=>cellBehaviour(box, size));

    let oldSketch = main.querySelector(".sketch")
    if(oldSketch)main.removeChild(oldSketch);

    main.appendChild(sketch);
}

sketchpad(16);

let button = document.querySelector(".gridsize");
button.addEventListener("click", e=>getSize());

