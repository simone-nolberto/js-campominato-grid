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
                resultsOutput.innerHTML = `Hai trovato ${clearCellsClicked.length} celle valide. Clicca su "Gioca" per riprovare!`
                // console.log(`Hai trovato ${clearCellsClicked.length} celle valide`);
                element.removeEventListener('click',)

            } else {
                element.classList.add('clear');
                clearCellsClicked.push(i + 1,)
                // console.log(clearCellsClicked);


            }


            if (clearCellsClicked.length == (maxCellsNumb - mushroomArray.length)) {

                console.log("You won!");
            } else if (loserCell.length == 1) {

                console.log("You lose");
            }

        })

    };

    return container

}


