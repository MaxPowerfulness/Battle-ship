const createShip = require('../src/ships');

test('registers ship getting hit', () => {
    expect(createShip(3).hit()).toBeTruthy();
});

test('tracks number of hits', () => {
    const ship = createShip(3);
    ship.hit();
    ship.hit();
    expect(ship.getNumHits()).toBe(2);
});

test('registers a ship as sunk', () => {
    const ship = createShip(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});

test('registers ship as not sunken', () => {
    const ship = createShip(3);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy;
});
