function genSquareGrid(length = 16){
    if(length > 100) length = 100;
    if(length <= 0) length = 1;

    for(let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < length; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
function removeGrid(){
    container.remove();
    container = document.createElement("div");
    container.setAttribute("class","container");
    document.querySelector("body").appendChild(container);
    container.addEventListener("mouseover", draw);
}

function draw(event){
    event.target.classList.toggle("drawn");
}


let container = document.querySelector(".container");
genSquareGrid();
container.addEventListener("mouseover", draw);
let button = document.querySelector("button");
button.addEventListener("click", () =>{
    let height = parseInt(prompt("How many squares/side on new grid?"));
    removeGrid();
    genSquareGrid(height);
})
