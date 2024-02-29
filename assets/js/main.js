const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

const markup = `<div class="box df"></div>`;

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid);

let mushroomArray = [];

function getRandomNumber(min, max) {

    for (i = 1; i <= 16; i++) {

        const element = Math.floor(Math.random() * (max - min) + min);

        if (mushroomArray.includes(element)) {
            console.log("prossimo numero");

        } else {
            mushroomArray.push(element)
        }
    }

    return mushroomArray;

}

console.log(getRandomNumber(1, 100));

function createGrid() {


    container.innerHTML = '';

    for (let i = 0; i < maxCellsNumb; i++) {
        container.insertAdjacentHTML('beforeend', markup)
    }


    let boxElements = document.getElementsByClassName('box');
    // console.log(boxElements);
    for (let i = 0; i < boxElements.length; i++) {
        const element = boxElements[i];
        element.innerHTML = i + 1;

        element.addEventListener('click', function (e) {
            element.classList.add('active');
            let activeBox = document.getElementsByClassName('active');


            if (mushroomArray.includes(activeBox.innerText)) {
                element.classList.add('bg-red');
            } else {
                element.classList.add('bg-clear');
            }

        })
        console.log(element.innerText);
    };

    return container

}


