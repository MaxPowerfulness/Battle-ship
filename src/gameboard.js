const createShip = require('./ships');

const gameboard = () => {
    let shipLocations = {}; // Tracks locations of all ships
    let missedShots = []; // Tracks the coordinates of each missed shot as an array of string coordinates

    // Places a ship down on the game board. Accepts 2 arrays (start/end coordinates), the length, and name of the ship.
    const placeShip = ([startX, startY], [endX, endY], length, name) => {
        const ship = createShip(length); // Creates ship
        const startCord = [startX, startY];
        const endCord = [endX, endY];
        shipLocations[`${name}`] = { ship: ship }; // Each ship is stored as an object with the property as the ship name in the shipLocations object with the ship's info store in the ship property

        // Records all coordinates the ship spans on the gameboard as property names for shipname object
        if (startCord[0] === endCord[0]) {
            for (let i = 0; i <= length - 1; i++) {
                shipLocations[`${name}`][`${startX}, ${startY + i}`] = true;
            }
        } else {
            for (let i = 0; i <= length - 1; i++) {
                shipLocations[`${name}`][`${startX + i}, ${startY}`] = true;
            }
        }
    };

    // Checks if attack at given coordinate hits a ship. If hit, records a hit on the ship.If misses, records the coordinate of the missed shot. Accepts an X and Y coordinate as arguments
    const recieveAttack = (x, y) => {
        for (let ship in shipLocations) {
            if (`${x}, ${y}` in shipLocations[ship]) {
                shipLocations[ship]['ship'].hit();
                return true;
            }
        }
        missedShots.push(`${x}, ${y}`);
        return false;
    };

    // Displays the array 'missedShots'
    const displayMissedShots = () => {
        return missedShots;
    };

    // Traverses object and checks the sunk status of each ship. If all are sunken, returns true.
    const statusOfShips = () => {
        for (let ship in shipLocations) {
            if (shipLocations[ship]['ship'].isSunk() === false) {
                return false;
            }
        }
        return true;
    };

    return {
        shipLocations,
        placeShip,
        recieveAttack,
        displayMissedShots,
        statusOfShips,
    };
};

module.exports = gameboard;
