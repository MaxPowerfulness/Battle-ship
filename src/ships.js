const createShip = (shipLength) => {
    let numOfHits = 0; // The number of times the ship has been hit

    const getNumHits = () => {
        // returns number of hits the ship has taken
        return numOfHits;
    };

    const hit = () => {
        // Increases the number of hits by 1
        numOfHits++;
        return true;
    };

    const isSunk = () => {
        // Checks if the number of hits is equal to the length of the ship. If so, the ship is sunken
        if (numOfHits === shipLength) {
            return true;
        } else {
            return false;
        }
    };
    return { shipLength, getNumHits, hit, isSunk };
};

module.exports = createShip;
