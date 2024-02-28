const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

const markup = `<div class="box"></div>`;

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid);

function createGrid() {

    container.innerHTML = '';

    for (let i = 0; i < maxCellsNumb; i++) {
        container.insertAdjacentHTML('beforeend', markup)
    }

    // console.log(boxElements);
    let boxElements = document.getElementsByClassName('box');
    for (let i = 0; i < boxElements.length; i++) {
        const element = boxElements[i];
        element.innerHTML= i + 1;

        element.addEventListener('click', function (e) {
            element.classList.toggle('bg');
            console.log(element.innerText);
        })

    };

    return container

}


