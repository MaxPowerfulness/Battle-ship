import { player } from './player';

//Global variables
const main = document.querySelector('main');

// DOM creation

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
    startgame.addEventListener('click', () => {
        localStorage.setItem('name', `${nameInput.value}`);
        chooseShipPlacement();
        //displayGame();
    });

    main.appendChild(form);
    form.append(label, nameInput, startgame);
}

// Creates the DOM for the user to select where they want to place there ships.
function chooseShipPlacement() {
    main.textContent = ''; // Clears main
    const shipList = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrolboat'];

    // Ship placement DOM
    const container = document.createElement('div');
    const btnCont = document.createElement('header');
    const rotateBtn = document.createElement('button');
    const message = document.createElement('p');
    const gridCont = document.createElement('div');
    const grid = document.createElement('div');

    btnCont.setAttribute('id', 'header');
    gridCont.setAttribute('id', 'gridCont');
    gridCont.classList.add('ship-placement-cont');
    grid.setAttribute('id', 'grid');

    // Rotate button to set orientation of ship placement
    rotateBtn.textContent = 'Rotate';
    rotateBtn.value = 'x';
    rotateBtn.addEventListener('click', () => {
        if (rotateBtn.value === 'x') {
            rotateBtn.value = 'y';
        } else {
            rotateBtn.value = 'x';
        }
    });

    // Grid UI creation for player ship placement choice
    let x = 0;
    let y = -1;
    for (let i = 0; i < 100; i++) {
        x++;
        if (i % 10 === 0) {
            x = 0;
            y++;
        }
        const gridItem = document.createElement('div');

        // Assigns coordinates to each grid item
        gridItem.setAttribute('id', 'gridItem');
        gridItem.setAttribute('data-x', x);
        gridItem.setAttribute('data-y', y);

        grid.appendChild(gridItem);
    }

    // Create ship placement options for each ship type
    // shipList.forEach((ship) => {
    //     const boat = document.createElement('button');
    //     boat.textContent = `${ship}`;
    //     boat.addEventListener('click', () => {
    //         const gridItems = document.querySelectorAll('#gridItem');
    //         gridItems.forEach((item) => {
    //             item.value = ``;
    //             item.value = `${ship}`;
    //         });
    //         implementHover(rotateBtn);
    //     });
    //     gridCont.appendChild(boat);
    // });

    btnCont.appendChild(rotateBtn);
    gridCont.append(message, grid);
    container.append(btnCont, gridCont);
    main.appendChild(container);

    const gridItems = document.querySelectorAll('#gridItem');

    function handleGridItemClick(item) {
        const hovered = document.querySelectorAll('.hover');
        console.log('hovred nodes', hovered);
        let conditionMet = false;
        for (let i = 0; i < hovered.length; i++) {
            if (hovered[i].classList.contains('selected')) {
                conditionMet = true;
                break;
            }
            hovered[i].classList.add('selected');
        }
        if (conditionMet) return;
        localStorage.setItem(
            item.value,
            JSON.stringify({
                start: [Number(hovered[0].dataset.x), Number(hovered[0].dataset.y)],
                end: [Number(hovered[hovered.length - 1].dataset.x), Number(hovered[hovered.length - 1].dataset.y)],
                length: 1,
            }),
        );
    }

    function placeShip(index) {
        return new Promise((resolve) => {
            message.textContent = `Place your ${shipList[index]}`;
            gridItems.forEach((item) => {
                item.value = ``;
                item.value = `${shipList[index]}`;
                item.addEventListener('click', () => {
                    handleGridItemClick(item);
                    gridItems.forEach((item) => item.removeEventListener('click', handleGridItemClick));
                    resolve();
                });
            });
            implementHover(rotateBtn);
        });
    }

    placeShip(0)
        .then(() => placeShip(1))
        .then(() => placeShip(2))
        .then(() => placeShip(3))
        .then(() => placeShip(4));

    // Saves ship placement choice to local storage and displays where the user selected to set their ship
    // gridItems.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         const hovered = document.querySelectorAll('.hover');
    //         let conditionMet = false;
    //         for (let i = 0; i < hovered.length; i++) {
    //             if (hovered[i].classList.contains('selected')) {
    //                 conditionMet = true;
    //                 break;
    //             }
    //             hovered[i].classList.add('selected');
    //         }
    //         if (conditionMet) return;
    //         localStorage.setItem(
    //             item.value,
    //             JSON.stringify({
    //                 start: [Number(hovered[0].dataset.x), Number(hovered[0].dataset.y)],
    //                 end: [Number(hovered[hovered.length - 1].dataset.x), Number(hovered[hovered.length - 1].dataset.y)],
    //                 length: 1,
    //             }),
    //         );
    //     });
    // });
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
    player1Grid.gameData = player(localStorage.getItem('name'));
    player2Grid.gameData = player('Computer');

    player1Grid.setAttribute('id', 'grid');
    player2Grid.setAttribute('id', 'grid');
    gridContainer.classList.add('player-grid-cont');
    nameContainer.classList.add('name-cont');

    player1Name.textContent = localStorage.getItem('name');
    player2Name.textContent = 'Admiral LongSnout';

    createGrid(player1Grid, player2Grid);

    main.append(nameContainer, gridContainer);
    nameContainer.append(player1Name, player2Name);
    gridContainer.append(player1Grid, player2Grid);

    // Add ships to boards
    Object.keys(localStorage).forEach((key) => {
        let value = JSON.parse(localStorage.getItem(key));
        player1Grid.gameData.playerBoard.placeShip[(value.start, value.end, value.length, `${key}`)];
    });
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

        const gridItems = [document.createElement('div'), document.createElement('div')];

        // Assigns coordinates to each grid item
        gridItems.forEach((item) => {
            item.setAttribute('id', 'gridItem');
            item.setAttribute('data-x', x);
            item.setAttribute('data-y', y);
        });

        // Event listener for computer grid
        gridItems[1].addEventListener('click', () => {
            // Sends an attack to the players board based on the grid location clicked
            player2Grid.gameData.playerBoard.recieveAttack(gridItems[1].dataset.x, gridItems[1].dataset.y);

            // Updates moves made by player1
            player1Grid.gameData.movesMade.push(`${gridItems[1].dataset.x}, ${gridItems[1].dataset.y}`);

            // Updates grid item with red circle if hit, grey circle if miss
            const hitMark = document.createElement('span');
            if (
                `${gridItems[1].dataset.x}, ${gridItems[1].dataset.y}` ===
                player2Grid.gameData.playerBoard.missedShots[player2Grid.gameData.playerBoard.missedShots.length - 1]
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

// Helper functions

// A function to create the computer's attack and mark the result on the player's grid
function computerAttack(player1Grid, player2Grid) {
    const computerAttack = player2Grid.gameData.randomAttackCoor(); // Random coordinate generated as the computer's move
    player1Grid.gameData.playerBoard.recieveAttack(computerAttack[0], computerAttack[1]);

    const hitMark = document.createElement('span');
    if (
        `${computerAttack[0]}, ${computerAttack[1]}` === player1Grid.gameData.playerBoard.missedShots[player1Grid.gameData.playerBoard.missedShots.length - 1]
    ) {
        hitMark.classList.add('circle-miss');
    } else {
        hitMark.classList.add('circle-hit');
        checkIfGameOver(player1Grid);
    }
    document.querySelectorAll(`[data-x="${computerAttack[0]}"][data-y="${computerAttack[1]}"]`)[0].append(hitMark);
}

// Checks if all ships on the player's board are sunk
function checkIfGameOver(board) {
    if (board.gameData.playerBoard.statusOfShips()) {
        let winner = '';
        if (board === 'player1Grid') {
            winner = 'Admiral LongSnout';
        } else {
            winner = localStorage.getItem('name');
        }
        displayGameOverScreen(winner);
    }
    return;
}

// Implements the hover effect on the placement grid. Accepts x-y rotation button as arguments.
function implementHover(rotateBtn) {
    const gridItems = document.querySelectorAll('#gridItem');

    // Changes grid highlight hover effect depending on selected ship type
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if (rotateBtn.value === 'x') {
                switch (item.value) {
                    case 'Carrier':
                        addHorizontalHoverEffect(item, 6, 4);
                        break;
                    case 'Battleship':
                        addHorizontalHoverEffect(item, 7, 3);
                        break;
                    case 'Destroyer':
                        addHorizontalHoverEffect(item, 8, 2);
                        break;
                    case 'Submarine':
                        addHorizontalHoverEffect(item, 8, 2);
                        break;
                    case 'Patrolboat':
                        addHorizontalHoverEffect(item, 9, 1);
                        break;
                }
            } else {
                switch (item.value) {
                    case 'Carrier':
                        addVerticalHoverEffect(gridItems, item, 6, 4);
                        break;
                    case 'Battleship':
                        addVerticalHoverEffect(gridItems, item, 7, 3);
                        break;
                    case 'Destroyer':
                        addVerticalHoverEffect(gridItems, item, 8, 2);
                        break;
                    case 'Submarine':
                        addVerticalHoverEffect(gridItems, item, 8, 2);
                        break;
                    case 'Patrolboat':
                        addVerticalHoverEffect(gridItems, item, 9, 1);
                        break;
                }
            }
        });
        item.addEventListener('mouseout', () => {
            gridItems.forEach((item) => item.classList.remove('hover'));
        });
    });
}

// Adds hovering effects to grid items to show ship placement horizontally.
// Accepts the grid item, the maximum x coordinate value for the hover effect to occur past,
// and the number of grid items after the hovered item to display the effect
function addHorizontalHoverEffect(gridItem, numLimit, numlength) {
    if (Number(gridItem.dataset.x) < numLimit) {
        gridItem.classList.add('hover');
        let nextSib = gridItem.nextElementSibling;
        for (let i = 0; i < numlength; i++) {
            nextSib.classList.add('hover');
            nextSib = nextSib.nextElementSibling;
        }
    }
}

// Adds hovering effects to grid items to show ship placement verticaly.
// Accepts nodelist of all grid items, the grid item, the maximum y coordinate value for the hover effect to occur past,
// and the number of grid items after the hovered item to display the effect
function addVerticalHoverEffect(gridItems, gridItem, numLimit, numlength) {
    if (Number(gridItem.dataset.y) < numLimit) {
        gridItem.classList.add('hover');
        let indexOfCurrent = Array.from(gridItems).indexOf(gridItem);
        for (let i = 0; i < numlength; i++) {
            indexOfCurrent += 10;
            gridItems[indexOfCurrent].classList.add('hover');
        }
    }
}

export { nameSelection };
