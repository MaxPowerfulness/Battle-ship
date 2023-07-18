const player = require('../src/player');
const player1 = player('Player1');
const player2 = player('Player2');

test('Displays separate gameboard for two players', () => {
    player1.playerBoard.placeShip([1, 4], [1, 6], 3, 'Cruiser');
    player2.playerBoard.placeShip([2, 1], [5, 1], 4, 'Carrier');
    expect(player1.playerBoard.boardInformation.Cruiser.location).toEqual({
        '1, 4': true,
        '1, 5': true,
        '1, 6': true,
    });
    expect(player2.playerBoard.boardInformation.Carrier.location).toEqual({
        '2, 1': true,
        '3, 1': true,
        '4, 1': true,
        '5, 1': true,
    });
});

test('Creates random coordinates for an attack without repeating ', () => {
    for (let i = 0; i < 9; i++) {
        player2.randomAttackCoor(1, 3);
    }
    expect(player2.movesMade).toContain('1, 1');
    expect(player2.movesMade).toContain('1, 2');
    expect(player2.movesMade).toContain('1, 3');
    expect(player2.movesMade).toContain('2, 1');
    expect(player2.movesMade).toContain('2, 2');
    expect(player2.movesMade).toContain('2, 3');
    expect(player2.movesMade).toContain('3, 1');
    expect(player2.movesMade).toContain('3, 2');
    expect(player2.movesMade).toContain('3, 3');
});
