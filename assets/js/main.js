const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

const markup = `<div class="box df"></div>`;

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid);

let mushroomArray = [];

    for (i = 1; i <= 16; i++) {

        const element = Math.floor(Math.random() * (100 - 1) + 1);
        mushroomArray.push (element);

        if (mushroomArray.includes(element)) {
            
        } else {
            mushroomArray.push(element)
        }
    }

console.log(mushroomArray);

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
        console.log(element.innerText);

        element.addEventListener('click', function (e) {
            element.classList.add('active');
            let activeBox = document.getElementsByClassName('active');


            if (mushroomArray.includes(element.innerText)) {
                element.classList.add('bg-red');
            } else {
                element.classList.add('bg-clear');
            }

        })

    };

    return container

}


