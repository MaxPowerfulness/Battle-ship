const gameboard = require('../src/gameboard');
const game = gameboard();
const ship = game.placeShip([1, 4], [1, 6], 3, 'Cruiser'); // Calls ship factory function, start cor, end cor, length

test('Detects attack hitting a ship that spans y axis', () => {
    expect(game.recieveAttack(1, 5)).toBeTruthy();
});

test('Detects attack hitting a ship that spans x axis', () => {
    const ship2 = game.placeShip([2, 1], [5, 1], 4, 'Carrier');
    expect(game.recieveAttack(3, 1)).toBeTruthy();
});

test('Detects attack missing a ship', () => {
    expect(game.recieveAttack(2, 8)).toBeFalsy();
});

test('Tracks hit on correct ship', () => {
    const ship3 = game.placeShip([6, 1], [9, 1], 4, 'Long');
    game.recieveAttack(6, 1);
    expect(game.boardInformation.Long.ship.getNumHits()).toBe(1);
});

/////

test('Tracks/displays all missed shots', () => {
    game.recieveAttack(10, 20);
    game.recieveAttack(11, 21);
    expect(game.missedShots).toEqual(['2, 8', '10, 20', '11, 21']);
});

test('Reports true when all ships have sunk', () => {
    const game2 = gameboard();
    game2.placeShip([2, 4], [2, 6], 3, 'Cruiser');
    game2.recieveAttack(2, 4);
    game2.recieveAttack(2, 5);
    game2.recieveAttack(2, 6);
    expect(game2.statusOfShips()).toBeTruthy();
});

test('Reports false when all ships have not sunk', () => {
    expect(game.statusOfShips()).toBeFalsy();
});
