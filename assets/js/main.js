console.log("It works!");

const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

const markup = `<div class="box"></div>`;

const button = document.querySelector('btn-play');


function createGrid() {

    for (let i = 0; i < maxCellsNumb; i++) {

        container.insertAdjacentHTML('beforeend', markup);

    }



    return container

}

button.addEventListener("click", createGrid)


// button.addEventListener('click', createGrid ());


