const container = document.getElementById('container');
// console.log(container);

const maxCellsNumb = 100;

//const markup = `<div class="box df"></div>`;

const resultsOutput = document.querySelector('.results-box');

const button = document.querySelector('.btn-play');
button.addEventListener("click", createGrid);


let mushroomArray = [];
let clearCellsClicked = [];
let loserCell = [];

function generateMushroom() {

    let mArray = [];

    for (i = 1; i <= 16; i++) {

        const element = Math.floor(Math.random() * (100 - 1) + 1);
        mArray.push(element);

        if (mArray.includes(element)) {

        } else {
            mArray.push(element)
        }
    }

    return mArray;

}

function modifyCells(e) {

    const element = e.target;
    console.log(element)
    console.log('ciaonone')
    const cellNumber = Number(e.target.getAttribute('cellNumber'));
    console.log(cellNumber)

    if (mushroomArray.includes(cellNumber + 1)) {
        element.classList.add('red');
        element.innerHTML = "🍄";
        loserCell.push(i + 1);
        console.log(loserCell);

    } else {
        element.classList.add('clear');
        clearCellsClicked.push(i + 1,)
        // console.log(clearCellsClicked);
    }
    console.log(loserCell.length);

    if (clearCellsClicked.length == (maxCellsNumb - mushroomArray.length)) {
        resultsOutput.innerHTML = "Complimenti, hai vinto!"

    } else if (loserCell.length == 1) {
        document.querySelector('.results-box').innerHTML = `Hai trovato ${clearCellsClicked.length} celle valide, ma hai perso. Clicca su "Gioca" per riprovare!`;

        let boxElements = document.getElementsByClassName('box');
        // console.log(boxElements);


        for (let i = 0; i < boxElements.length; i++) {
            const boxElement = boxElements[i];

            boxElement.removeEventListener('click', modifyCells)

        }

    }

    return container;
};


function createGrid() {

    mushroomArray = generateMushroom();
    console.log(mushroomArray);
    clearCellsClicked = [];
    loserCell = [];
    container.innerHTML = '';
    resultsOutput.innerHTML = '';

    for (let i = 0; i < maxCellsNumb; i++) {
        const markup = `<div class="box df" cellNumber="${i}"></div>`;
        container.insertAdjacentHTML('beforeend', markup)
    }


    let boxElements = document.getElementsByClassName('box');
    // console.log(boxElements);


    for (let i = 0; i < boxElements.length; i++) {
        const element = boxElements[i];
        element.innerHTML = i + 1;
        //  console.log(element.innerHTML);
        
        element.addEventListener('click', modifyCells)
    }

};

// return container




