const createShip = require('./ships');

const gameboard = () => {
    let boardInformation = {}; // Tracks locations of all ships
    let missedShots = []; // Tracks the coordinates of each missed shot as an array of string coordinates

    // Places a ship down on the game board. Accepts 2 arrays (start/end coordinates), the length, and name of the ship.
    const placeShip = ([startX, startY], [endX, endY], length, name) => {
        const ship = createShip(length); // Creates ship
        const startCord = [startX, startY];
        const endCord = [endX, endY];
        boardInformation[`${name}`] = { ship: ship, location: {} }; // Created ship is stored in boardInformation with property being the ship name. Value of this property is another object with ship information stored in 'ship' and ship location stored in 'location'

        // Records all coordinates the ship spans on the gameboard as property names for shipname object
        if (startCord[0] === endCord[0]) {
            if (startCord[1] < endCord[1]) {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX}, ${startY + i}`] = true;
                }
            } else {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX}, ${startY - i}`] = true;
                }
            }
        } else {
            if (startCord[0] < endCord[0]) {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX + i}, ${startY}`] = true;
                }
            } else {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX - i}, ${startY}`] = true;
                }
            }
        }
    };

    // Checks if attack at given coordinate hits a ship. If hit, records a hit on the ship.If misses, records the coordinate of the missed shot. Accepts an X and Y coordinate as arguments
    const recieveAttack = (x, y) => {
        for (let ship in boardInformation) {
            if (`${x}, ${y}` in boardInformation[ship]['location']) {
                boardInformation[ship]['ship'].hit();
                return true;
            }
        }
        missedShots.push(`${x}, ${y}`);
        return false;
    };

    // Traverses object and checks the sunk status of each ship. If all are sunken, returns true.
    const statusOfShips = () => {
        for (let ship in boardInformation) {
            if (boardInformation[ship]['ship'].isSunk() === false) {
                return false;
            }
        }
        return true;
    };

    return {
        boardInformation,
        placeShip,
        recieveAttack,
        missedShots,
        statusOfShips,
    };
};

module.exports = gameboard;
