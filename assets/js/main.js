console.log("It works!");

const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

let markupContent = [];

const markup = `<div class="box">${markupContent}</div>`;


let boxElements = document.getElementsByClassName('box');

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid);

function createGrid() {

    for (let i = 1; i <= 100; i++) {

        markupContent.push(i);
    }

    console.log(markupContent);


    for (let i = 0; i <= maxCellsNumb; i++) {

        container.insertAdjacentHTML('beforeend', markup)

    }

    // console.log(boxElements);

    for (let i = 0; i < boxElements.length; i++) {
        const element = boxElements[i];

        element.addEventListener('click', function (e) {

            element.classList.toggle('bg');

        })

    };

    return container

}


