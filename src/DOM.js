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
    // Creates and assigns gameboards to each grid
    player1Grid.gameData = player('name'); //Get name from local storage
    player2Grid.gameData = player('name');

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

    player2Grid.gameData.playerBoard.placeShip([1, 3], [1, 4], 2, 'big'); // Test ship
}

// A function that takes each player's grid element as parameters. Assigns coordinates to each grid item as well as click-to-attack capabilities for the enemy board.
function createGrid(player1Grid, player2Grid) {
    let x = 0;
    let y = -1;
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

        // Assigns coordinates to each grid item
        gridItems.forEach((item) => {
            item.classList.add('grid-item');
            item.setAttribute('data-x', x);
            item.setAttribute('data-y', y);
        });

        // Event listener for player2 grid
        gridItems[1].addEventListener('click', () => {
            // Sends an attack to the players board based on the grid location clicked
            player2Grid.gameData.playerBoard.recieveAttack(
                gridItems[1].dataset.x,
                gridItems[1].dataset.y,
            );

            // Updates moves made by player1
            player1Grid.gameData.movesMade.push(
                `${gridItems[1].dataset.x}, ${gridItems[1].dataset.y}`,
            );

            // Updates grid item with red circle if hit, grey circle if miss
            const hitMark = document.createElement('span');
            if (
                `${gridItems[1].dataset.x}, ${gridItems[1].dataset.y}` ===
                player2Grid.gameData.playerBoard.missedShots[
                    player2Grid.gameData.playerBoard.missedShots.length - 1
                ]
            ) {
                hitMark.classList.add('circle-miss');
            } else {
                hitMark.classList.add('circle-hit');
                checkIfGameOver(player2Grid);
            }
            gridItems[1].append(hitMark);

            // After the player's move, the computer attacks. Computer grid click events are suspended until it is player's move again. Brief pause is given between turns
            player2Grid.querySelectorAll('div').forEach((gridItem) => {
                gridItem.style['pointerEvents'] = 'none';
            });
            setTimeout(() => {
                computerAttack(player1Grid, player2Grid);
                player2Grid.querySelectorAll('div').forEach((gridItem) => {
                    if (gridItem.firstChild) {
                        return;
                    } else {
                        gridItem.style['pointerEvents'] = 'all';
                    }
                });
            }, 2000);
        });

        player1Grid.appendChild(gridItems[0]);
        player2Grid.appendChild(gridItems[1]);
    }
}

// Displays winner of game with option to play again
function displayGameOverScreen(winner) {
    const shader = document.createElement('div');
    const container = document.createElement('div');
    const message = document.createElement('p');
    const reset = document.createElement('button');

    shader.classList.add('shader');
    container.classList.add('gameOverCont');

    message.textContent = `${winner} wins!`;
    reset.textContent = 'Play again';

    reset.addEventListener('click', () => displayGame());

    container.append(message, reset);
    main.append(shader, container);
}

// A function to create the computer's attack and mark the result on the player's grid
function computerAttack(player1Grid, player2Grid) {
    const computerAttack = player2Grid.gameData.randomAttackCoor(); // Random coordinate generated as the computer's move
    player1Grid.gameData.playerBoard.recieveAttack(
        computerAttack[0],
        computerAttack[1],
    );

    const hitMark = document.createElement('span');
    if (
        `${computerAttack[0]}, ${computerAttack[1]}` ===
        player1Grid.gameData.playerBoard.missedShots[
            player1Grid.gameData.playerBoard.missedShots.length - 1
        ]
    ) {
        hitMark.classList.add('circle-miss');
    } else {
        hitMark.classList.add('circle-hit');
        checkIfGameOver(player1Grid);
    }
    document
        .querySelectorAll(
            `[data-x="${computerAttack[0]}"][data-y="${computerAttack[1]}"]`,
        )[0]
        .append(hitMark);
}

// Checks if all ships on the player's board are sunk
function checkIfGameOver(board) {
    if (board.gameData.playerBoard.statusOfShips()) displayGameOverScreen();
    return;
}

export { nameSelection };
