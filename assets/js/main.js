const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

const markup = `<div class="box df"></div>`;

const resultsOutput = document.querySelector('.results-box')

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid);


let mushroomArray = [];
let clearCellsClicked = [];
let loserCell = [];

for (i = 1; i <= 16; i++) {

    const element = Math.floor(Math.random() * (100 - 1) + 1);
    mushroomArray.push(element);

    if (mushroomArray.includes(element)) {

    } else {
        mushroomArray.push(element)
    }
}

// console.log(mushroomArray);

function createGrid() {


    container.innerHTML = '';
    resultsOutput.innerHTML = '';

    for (let i = 0; i < maxCellsNumb; i++) {
        container.insertAdjacentHTML('beforeend', markup)
    }


    let boxElements = document.getElementsByClassName('box');
    // console.log(boxElements);

    for (let i = 0; i < boxElements.length; i++) {
        const element = boxElements[i];
        element.innerHTML = i + 1;
        // console.log(element.innerHTML);


        element.addEventListener('click', function (e) {

            if (mushroomArray.includes(i + 1)) {
                element.classList.add('red');
                element.innerHTML = "🍄";
                loserCell.push(i + 1);
                console.log(loserCell);

            } else {
                element.classList.add('clear');
                clearCellsClicked.push(i + 1,)
                // console.log(clearCellsClicked);


            }


            if (clearCellsClicked.length == (maxCellsNumb - mushroomArray.length)) {
                resultsOutput.innerHTML = "Complimenti, hai vinto!"

            } else if (loserCell.length == 1) {
                resultsOutput.innerHTML = `Hai trovato ${clearCellsClicked.length} celle valide, ma hai perso. Clicca su "Gioca" per riprovare!`
            }

        })

    };

    return container

}


