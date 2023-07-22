import gameboard from './gameboard';

const player = (name) => {
    const playerBoard = gameboard();
    let movesMade = []; // An array that contains all coordinates targeted by the player.

    // A function that randomly chooses a coordinate with the value including/between the given min and max.
    const randomAttackCoor = (min, max) => {
        // if (playerBoard.missedShots[missedShots.length - 1] !== movesMade[movesMade.length - 1]) If the last coordinate hit a target

        const randomCoor = randomCoordinate(min, max);

        if (movesMade.includes(`${randomCoor[0]}, ${randomCoor[1]}`)) {
            return randomAttackCoor(min, max);
        } else {
            movesMade.push(`${randomCoor[0]}, ${randomCoor[1]}`);
            return randomCoor;
        }
    };

    return { name, playerBoard, randomAttackCoor, movesMade };
};

// Function to create a random coordinate point. Each axis value of the coordinate points will between the min and max value, defaulted to 1 and 10 respectively.
function randomCoordinate(min = 0, max = 9) {
    return [
        Math.floor(Math.random() * (max - min + 1)) + min,
        Math.floor(Math.random() * (max - min + 1)) + min,
    ];
}

export { player };
