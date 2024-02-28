console.log("It works!");

const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

const markup = `<div class="box"></div>`;

let markupContent = 0;

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid)

function createGrid() {

    for (let i = 0; i <= maxCellsNumb; i++) {

        container.insertAdjacentHTML('beforeend', markup);

    }

    const boxElements = document.getElementsByClassName('box');
    // console.log(boxElements);

    for (let i = 0; i < boxElements.length; i++) {
        const element = boxElements[i];

        element.addEventListener('click', function (e) {

            element.classList.toggle('bg');

        })

    };

    return container

}

// const numbArray = [];

// for (let i = 0; i < maxCellsNumb; i++) {

//     function getRndInteger(min, max) {
//         return Math.floor((max - min) ) + min;
//       }

//     const randomNumber = Math.floor(Math.random() * 100) +1;
//     console.log(randomNumber);
//     numbArray.push(randomNumber);

// }

// console.log(getRndInteger(1, 100));


let numberArray = [];


for (let i = 1; i <= 100; i++){
    
    numberArray.push(i)
}

console.log(numberArray);