import { player } from './player';

//Global variables
const main = document.querySelector('main');

// Creates menu to select your name
function nameSelection() {
    const form = document.createElement('form');
    const label = document.createElement('label');
    const nameInput = document.createElement('input'); // save name to local storage, retrieve it later
    const startgame = document.createElement('button');

    nameInput.setAttribute('id', 'name'); // save name local storage
    nameInput.setAttribute('placeholder', 'Choose a name');
    label.setAttribute('for', 'name');
    label.textContent = 'Name:';
    startgame.setAttribute('type', 'button');
    startgame.textContent = 'Start Game';
    startgame.addEventListener('click', () =>
        // Function to save name to local storage
        displayGame(),
    );

    main.appendChild(form);
    form.append(label, nameInput, startgame);
}

function displayGame() {
    main.textContent = '';
    const gridContainer = document.createElement('div');
    const nameContainer = document.createElement('div');
    const player1Name = document.createElement('p');
    const player2Name = document.createElement('p');
    const player1Grid = document.createElement('div');
    const player2Grid = document.createElement('div');
    player2Grid.gameData = player('name'); // Get name from local storage

    player1Grid.setAttribute('id', 'grid');
    player2Grid.setAttribute('id', 'grid');
    gridContainer.classList.add('grid-cont');
    nameContainer.classList.add('name-cont');

    player1Name.textContent = 'placeholder'; // Get name from local Storage
    player2Name.textContent = 'placeholder';

    createGrid(player1Grid, player2Grid);

    main.append(nameContainer, gridContainer);
    nameContainer.append(player1Name, player2Name);
    gridContainer.append(player1Grid, player2Grid);
}

function createGrid(player1Grid, player2Grid) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < 100; i++) {
        x++;
        if (i % 10 === 0) {
            x = 0;
            y++;
        }
        const gridItems = [
            document.createElement('div'),
            document.createElement('div'),
        ];
        gridItems.forEach((item) => {
            item.classList.add('grid-item');
            item.setAttribute('data-x', x);
            item.setAttribute('data-y', y);
        });
        gridItems[1].addEventListener('click', () => {
            player2Grid.gameData.playerBoard.recieveAttack(
                gridItems[1].dataset.x,
                gridItems[1].dataset.y,
            );
            console.log('attack sent');
            console.log(player2Grid.gameData.playerBoard.displayMissedShots());
        }); // Add recieve attack function with coordinate location as param

        player1Grid.appendChild(gridItems[0]);
        player2Grid.appendChild(gridItems[1]);
    }
}

export { nameSelection };
