function ints(line) {
    return line.match(/(-?\d+)/g).map(i => Number(i));
}


let input = `>>><<><>><<<>><>>><<<>>><<<><<<>><>><<>>`;

ainput = `>>><<>>><<<>>>><<>>><<<<>>>><<<>>>><<<>>><<<<>><<><>><<<>>>><<<<>><<<>><<<<>>><<<<>>><>><<>><<<>>>><<<<>>><<<<>>>><<<><>>>><><<>>>><<><>>>><<<>><<<>>><<<<>><<><<<<>><<><>><<<>><>>>><<<>>>><<>>>><<><<<>><<>>>><>><<<<>>>><>>><<<>><<<<>>>><<>><<<<><<><<<>>><<<<><<>>>><<><<<>><<<<><<<><<>>>><>><<<<>><>>>><<><><>>><>>>><<<><<>>>><<<><<<<>><<<>>><>>><<>>>><>>><<>><<<<>>>><<<>><<>>><<<<><<<>><>>>><<<<>><<<<><>><<<<>>><>>><<<<>>><<<<>>><<<<>>><<<>><<<>>><<<>><>>><<<<><>><<<<>>>><<<<>><<<>>>><<<<>><<<<>><<<<>>>><<<<>><<<>><<<>><<<>><<>>><<>>>><<<>>>><>>>><>><<<>>>><>><<<><<<<><<<>>>><<><<>>><>><>>>><<<>>><<<<>>><>>>><>>><<<><<>>><<<<><<>>>><<<><>><>>>><<<>><<<>><<<><<<<>><>><<<<>>><>>>><<>>><<>><>>>><<<<><>>><>><><>>>><<<><<<>>>><><<<<><<<><<<<>>><<<>><<<<>>><>>><<<<>>><<>><<<>>><<>><<<<><<<<><<<<>><<<>>><<>>>><>><<<<>>><><<>>><<<>>>><>>>><>>><<<<>>><<<<>><<<<><><>><<<<>><<>>>><>>>><<><<>>>><><<<>>><<>>>><<<>>><<<<>><<<<>>>><<<<>><<<><<>>>><<<<>>>><<<>>><<><<<>>><><<<>>>><<<<>>><>>><>>>><<<<>><<<>><<><<<>><>><>><<<><<<>>>><>><><>>>><<>>><<>><>><<<>><><<<<>>>><<>>><<>>><<>><<<>>><<<<>><<<<>>>><>>><<<<>><><<<>>>><<>><>>>><>>>><>>>><>>>><>>><<<<>><><<<<>>>><<<<>><><<<<><>><<>>><>>><<<>><><<>>>><<<>>><<<<>>>><<<>><<<<>>>><<<>>>><<<<>>>><<><<<<>>>><<<><<<>><<<<><<<>>><><<<>><<>><<<>>><<<><<<>>>><<<<>><<<<>><<>><<<<>><>><>>><<<<><>>>><<>><<<><<>><<<<><<><<<<>><>>><>><<<>>><<<>><<<<>>>><<<<>>>><<<>>><<<<>><>>><<>><<<><<<<>>>><<>>>><<<<>><<<<>><<<>>>><<>>>><><><<>><><<<><<<>>><>>><<<<>>>><<<>><<<<>>><<<<>><<<>>><<<<>>>><<><>><<<<><<<<>><<<><<><><><<<<>><<<<>>><<<>><>>>><>>><<<<>>><<<<><<>>><<<<><<>><<<><<<<>><<>>>><>><>><<<>>>><<<<>>><<<><<<>>>><<<><<<>>>><<<>><>>><<>>><<<><<<<>>>><>>>><<<<><<>><<>>><<><>>>><>>><><<>>>><>>><><>><<<>>>><<<><>><<>>>><<<<>>><<><<>>>><>><<>>><<<<><<>>>><<><>>><<<><<><<<<>><<<<>>>><<>><>><<>><>>>><<<>>>><<<<>><><<>>>><<<><<>>><<<>>>><<<>>><<>>>><<<<>>><>>><<<><<>>><><>>><<<>>>><<<<>>><<>>>><<>>><<<<>>>><<<>><><<>><<<>>><<>><<<>>>><<>><<>>><<>>>><<<>>>><<<>>><>>>><<><<<<><<<>>><<<><<<>>><<>>>><>><<<>><<>>>><><>>>><>>><<<>><<<>>>><<>>><<>><><<<>><<<<>><>>><>>>><<<<>><<<>>><<>>><<>>><<<<>>>><<>>>><>>><<<<>>><<<>><<<><<<>><<<<><<>>>><<>><>>><<<>>>><<><<<<>>>><<<>>>><<<><<<>><<<<><<<<><<>>>><<<<>>>><<<><<<<>>><<<<>><<><<<<>>>><>>><<<<>><<>><<<<>>>><<<>><<>>><<<><<<<>>><<>>>><<>>>><<<<>><>>>><<<<><>><>><<>>>><>>>><<<<>>><<<<>>><<<>>>><<<>>><<>>><<<<><><<>>><<><<<<>>><<>><<<>><<>><>><<<><<><<>>><<>>><<>>>><<>><<<><<<<>>><<<>>><<><>>><<<<>><<<<>>><<<>><>><<<<>><<<<>><<<<><>><>>><><>><<<>><>><>><<>><>>>><<<<>>><>><<>><<<<><<<>>>><<<<>>>><<<<><>>>><<<<><<<<>>>><>>>><><>>>><>>><<<<><<<<>>>><<<<><<<<>><<<<><<<<><<<>><<<>>><<>>>><<<<>>><><<>>>><<<><>>>><<<>><<<>>><<<>>>><>>><<<<><>>><>>>><<>>><>><<<<>><>><>><>>>><<<<><<>><<<>>><<<<>><<<<><<<<>><<<>><<>>>><<<>>><<><<><<<<>>>><<<>>>><<<>>><>><<<<>>>><<<<><<<<>>><<><<<<>>>><<<>><>>><>>>><<<>>>><<>>><>>><<<>><<<<>>><<><<<><<<<><<<<>><<<<>>><<>>>><<>><<>><<<<>>>><<<>>><<<<>>>><><<><<<>>>><><<>>><><><<<><<<<><><>>>><<<>>>><<><><<>><<>>><<>>><<<<>>>><<>><<<<>>><<<>>>><<<<>>><<>>>><<<>>>><>>><>>><<<><>><<<<>><<<>>>><<<<>><><<>>>><<<><<>><>><<<<><<><<<>>>><<><<>><<>><<<<>>>><<<>><<>>>><<>>>><<>>><>>><<<<>><<<<>>>><<<<>>>><><<<<>>>><<<>>>><><>>>><<<>>><>>><>>>><>>><<>><<<>><>>><>>><<<<>>><<>>>><<<>><<>>><<><<<<>>><<<><<<<>>>><>><<<>><<<>><>>><<<>>><<<<>>><<>><<<<>>><>>>><><<<>><<<<>>><<>>><<<<>>>><<<>><<<<>>><>><<<<><<<>>><<><<<<>>><<<>>><>>><>>><<>>>><<<<><<<>>>><<<>>>><>>>><<>>>><<<<>>>><<<>>><<<<>><<<<>><>>><<<<>>>><>>><<<>>>><><<<<>>>><<<>><>><<<<><>><>><<<<>>>><>>><<<<>><>><<><>>>><<<>>>><<<><>><<<<>><<><><<<>><<>>><<<>>>><>>><<>>><<<<><>>><<><>>>><<><<>><<<><<>><>>>><>>>><<><<<<>><<>>><<<<>><<<>>><<<<>>><>>>><>>><>>><<<<>>>><<<<>>>><<><>><<<<>>>><<>>><<<<><<>><<<<>>>><>><>><<<>>><>>><<>>>><<<<>><<><<<>>><><<<<><<<>><<<>>>><<<>>><>><<<<><<<<><<<<><>>>><<<<>><<>>><<>>>><<>>><><<<<>>><<>><<<>><<><<>>>><<<<>>>><<<<>>><<><<><<>>>><<>>><>>>><<<<>>>><<<>><<><<<>>><<<<>>><><<<>>>><<<><>>><<<>>>><<<<>>>><<>>><>>><<<<>>><<>><<<>>><>>>><><<>><>>>><<<<>>><>>>><<<><>>><<<<>>><><<<>>>><<<<>><<<<><><<<<>><<<>>>><>>><<>><<><<<<>><>>>><>>><<>>>><<<<>><<<<><<>>>><<>>>><>>>><<>><<<<>>><<<<>>><<><<>>>><>>><<<<>>>><<<>>>><><<<>><<<><>>>><<>><<>>>><<>><<<<>><><<>>>><<>>>><<>>>><<>>>><<<<>>><>><<<>>><<>><<>>>><<>>>><><<<><<<>>><<>><<><>><><<>>><><<<>>>><<><<<<>>>><<<<>><><<<>><>>><<<>>><<><>>>><><>><<<>>>><<>><<>><<>>><>>><<<>>><<<>>>><<<<><<><<<<>>>><<<>>>><<<><<<<>>><<<>>>><<>><<<>><><<<>>>><<<><><<>>><<<<>><<>>><>>><<<<>>><>>><<<>><>>>><<>><<<>><<<<>>><><<><<>>><<>><<<<><<<>>>><<<>>><<>><<<<>>><<<<>><<>>>><><><<<<>>><<<<>>><>>>><<>>><>>>><<<<>><<<<><<<>><>><<<>><>>>><><<<>>>><<<>>><<<>>>><>>><<<<>><>>><<<<>>><<<>><>><<<>>><<><<>>>><<>>><<<><<<<>>>><<>><>><<>><>>>><<<<>>>><<<>>><>><<<>><>><<<>><><<<<>>><<<<><<<<><<>>>><>>>><<>>><>><>><<<>>>><>><<>>>><<<<>><<<<><<<>>>><>>>><<<<>><<<>>>><<>>><<<><<<><<<<>><<<<><><<><<<>><<<<>><<<<>>><<<><>><<<>>><<>>>><><<<<>><<<>>>><<<<>>><<<<>>><>>><<<<>>>><<>><<<<><<<<>><>><<<>>>><>>><>><<<<>>>><<<<>><<>><<<<>>><<>>>><<>><<<>>>><<<<>>><<>>>><>>><>>><<<>><<<>>><>><<<<>><<<>>><>>>><<>>><<<<><<<><>><>><<<<>><<<<>>><><<<><<<>>><>><<<<>><<<<><<<>>><<>>><<<<>><<<>>>><<>>>><<<>>>><<<>><<<>>>><<>><<><<<>>>><<>>>><<><<<<>>>><<<<><<<>><<>>><><<<<>>>><<><<<<>>><<<>>><<<<>><<>>><<<>><<<>>><<<<>>>><<<>>><>>>><<<<><<<>>>><<<<>><>><<<<>>>><<<>><<<><<>>><><><<>>><<<<>>><<<><>>>><<<>>><<<<><<><><<>>>><<<<>><<<>>>><<<>><<><<<<>><<>>>><<<>>><>><>>><<<<>>>><><>><<><<>>>><<<>>><><<<>>>><<<<>><<<>>>><<<<>>>><<<<>><><>>><<<>>>><<<>>><<>><<<>><>><<>>><<<>>>><<>>>><<<<><>><<><<<<><<<><<<><>>>><<<><<<><<<>>>><<<>>>><<<>>><><<>>>><<<>>><<<>>><<<<><<<<>><<<<>><<<><<>>>><<<<><>>>><><<<>>>><<<>>><<<>><>>><<>>><<<>><><>>><<>><<<<>><<<<>><<>>>><><<<<>>><>>><<<>>><<<<>>>><<<<><<<><>><<<<><<<<><<<<><<<<>>>><<><<>>>><<>>><>><<>>><<<>>>><><>>><>><<<>>><<>>><>>>><<>><<>>>><<>><<<>>>><<<>>><<<<>>><<>>>><<<<><<<<>>><<<<>>>><<>><<<>>><<<<>>><>><<<<>><<<>>><<<>>><<<>>>><<<>>><<>><>>>><<<<><<>><<>>>><>>><<<>>>><<<<>>><<<>>><<>>>><<<<>>><<>>><<<<>>>><>>><<<<><<><>>>><<<<>>>><>><<><<<>>>><<>>>><>>>><<<><<<<>>>><<<>>>><<>>><<<<>><<>>><>><>>>><<<<><<<<>>>><<>>><<<>><<>><>><<>><<>>><<>>>><<>><<<>>>><><<><><<<>><<<<><<<>>>><>>><<>>><<<>><>>><<>><<<>>><>>>><<<>>><<>>><<>><>>><<><<<>>>><<<<>>>><<<>>><<>><<><<<>>>><<<<>><>>><<<<><<<<>>>><<<>>><<<>><<<<>>><<<<>>>><<<><<>><<>>>><<><<>><<>>><<<>><<><>>><>>><>><<<>>><<>><<>>>><><<<>>>><<>>>><<>>><>>>><<>>><<<><<>><<<>>>><<<<><<<<><<>>>><<<><>>><<<><<>><<<>>><<<><><<>>><<>>><<<<><>><<>><<<><<>>><<><>>><<<<>>>><>>>><<<<><<><<<>>>><<<>><<>>>><<<><<>>>><>>><<<>>>><<<<>>>><<><<<<>>>><<>>><>>>><<<><<<<><<<<>>><<<>><<<<>><<<>><<><<<>>><<<>>><<<>><<<<><<<<>><<<<>>><<<>><>>><<<<><<>>><>><<>>><<<<>>>><>>><>><<<>>><<>>><<>>>><<<><<>><>><>><<<>>>><>>>><><>><>>><<<>><<<<><<<<>><><<<>><<<>>><<<<><<>><<<<>>><><<><<<>>><<<>><>>>><>>>><<<>>><<<<>><<>>><<<<>><<>><><<<>><<>>><<>>><<<>>><<<<><<<<>>>><>>>><<<<>>><<<<>>><<<<>>><>><<><<>>><<<>><>>><<>>>><<<>>>><<>>><>>>><>><<>>><><<<<>><<<<><<<<><<<>>><<<<>>><<>><<<<>>><<<>>>><><<>><>><>>>><<<<>>><<<<>>>><<<<><<>><<<<>>>><<<>><<<<>>><<<<>>>><>>>><<<>><>>><<<<>>>><<<<><<<<>>>><<>><<<<>>><<<<><<><<<<>><>>><<<>>><<<>>><<<>>><<<>><<<<>>>><<<>>><>>>><<<<>>>><<>>><><<>><>><>><>><>>>><<<<>>>><<<>>>><<<<>><<<<>><<<<>>><<><>>>><>>><<<<>><<<>><<<<>><<>><><><<<>>><>><><<>><>>><<<><>>><>>>><<><<<<>>>><<>><<>><<<><<>>><<>>>><<<<>>><<<>><<>>><<<<><<<>>>><<<<>>>><><>>>><>><<>>><<<<>>><<>><<<>>><<<<>><>>><<>><<><<>><<>>>><<<<><<<<>><<<<>>>><<<<><<<<><><>>>><<>>><><<>>>><<<><>>>><<<<>>><<<<>>>><<<<>><<<>>>><<<<>><<<><<<<>>><<<<>>>><>><>>><<<><><<<>>>><<<<>>><>><>>><<>>><<>><<>>>><>>><<><<><><<>><<<>><>>><>>>><>>><>>><<>>><<<<><>><<><<<>><<<<>>><<<><>>><<>><>><<<<>>><>><<<<>>>><>>>><>>><>><<<><<>>><<>><<<<>>><<<<>><<><<<<><<>><<<><<<><><<<<>><<>><<<<><<<<>><>><<>><>><<<<>>><><><<<<>><<<>><<<>>><<<<>>>><<<><><<<><<><>><<<<>>>><><>><>>>><<><>>>><<>>><>><<>>>><<<>>><>>>><<>>>><<>>><<<><<<<>>>><<<<><<<>>>><<>><<<<>>>><<<><>>>><<<><<<><<<>><<<>><<<>><<<>><<>>>><<<>>><<>><<<<>><<><<>>><<<<><><<<<><>>>><<>><<>>><<<>><<<>>><<<>>>><<<>>>><<<<><<<><<<<>>><<>><<<><<<<>><<<>>>><<<><>>>><>>><<<><>><<<>>>><<<<>><<<<>>><<<<>>><>>><<<>><<<>>>><>>><<><<><<<>><<<>>>><<><<><>>>><<><<<<>>><<<<>>><<<>>>><<>>>><<<><<<<>>><<><<<>>>><<>><<<<>>><><<<<><<>><<<>>><<<>>>><<<<>>><><><<<>>><<<>>>><>>><>>><>>>><<<<>>>><>>><<<<><<><<<>>>><<<<><<<>><>><<<><<<><<>>><<<<>>><<>>><<<><<<<>>><<<<><<<<>><<><<<<>>><<>>>><>><<>>>><<<>>><><>>>><<<<>>><>><<<>>>><<><<>><<>>>><<<<>>>><<<<>>><>>><<<<>>>><<>>>><<<>>><<<<>><<>>>><<>>><>>><<<<>>><<<<>><>>><>>>><><><<>><<<<>>><<<>><<<>>><<>>><<><>>><>>>><<>><<<<>>><<<>>>><<>><>>>><<<<><>>>><<>><<><<<>>>><<<<><<<>>>><<<<>>><<<<>><><>>><><<<<>>><<<><<>>>><<<>>><<>>><<<<>>>><>>><>><>>>><>><<>>>><<<><<>>>><<<<><>><<>>><<>>>><<>><<>>>><>>>><<>>>><<<>>><<<<>>><<<<>>>><<<<>>><<>>>><<>>>><<<>><>>>><<<<>>>><<<<><<><<<<>>>><<<>><>><<>>>><<><><<<<>><<<<>><<<>>>><<<<>><<>>>><<<><<<<>>><>>><<<<><<<>>><<<>>>><<<><>><>><>>>><<<<>>>><<<>><<<<>><<<><<<<>>>><<<>><>>>><<<<>>><<<>>><<>><<<<>>><<<>><<<><>>>><>>><<<<><><><<<<>><<>><<<>>><<<<>><<>>><<>>>><<<>><<<><<>>><<<>>>><<>>><<<<>><<>>>><>><><<<<>><<<<>>>><>>>><<<>>>><<<<><<>>>><>>>><<<><<<>>>><<<>>>><<>><<>><<<>>>><>>><<<>>>><<<<>>><>>><<><<<><<<<>>><<>><<<<>>>><<<<>>>><<>><>><<>>><<<<><>>>><<<>>><<><<<<>>><>>><<>><<<<><<<>>><<<>><<<><<<>><<><>>>><<<><<<><<<>><<>>>><>>>><>><<<<>>>><<>><<<><><<>>>><<>>>><<<>><<<><<<>>>><<<>>><<>><<<>>>><<<<><<<<>><<>>><><<>>>><<<<>><<<<><<<><<<>><<>>>><<<<>>><<<><<<>>>><<<>>>><<>><<<><<<<>>><>>>><<<<><<<<>>><<<<>><<<><<<>>><<>>>><<>>>><<<<>>><<<>>>><<<<><><<<<>>><<<<>><<>><<><<>><<>><<<>><>>>><<<>><>><>><<<<>><><><>><><<<<>>><<<>>>><<>>>><<<>><<><<<>><<<>>>><>>><<<><>>>><>>>><<><>>>><<<>><<<>>><<<<>><<>><<<<>>>><<<>>><<>>>><<>>><<<><<<<><<>>><<<<>>>><<>>>><>><<>>><<<<>>>><<<>>><<>><<>>>><<<>><<>>>><<>>>><<<<>>><><<<>>>><<<<>>>><><<>>><<<>><>>><>>><<<<>>><><<>><<<<><<>>>><>>>><<<>>><<>><>><<<<>>><><<<<><>>><<<><<<>>><<<>>>><>><<<<>>><<<>>><<<>><>><<<<><<>>>><<<<>><>>>`;

/* 
1 ####

2
.#.
###
.#.

3
..#
..#
###

4
#
#
#
#

5
##
##
*/

const rockTypes = [
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    [{ x: 1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 2, y: -1 }, { x: 1, y: -2 }],
    [{ x: 2, y: 0 }, { x: 2, y: -1 }, { x: 2, y: -2 }, { x: 0, y: -2 }, { x: 1, y: -2 }],
    [{ x: 0, y: 0 }, { x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }],
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: -1 }]
];

const grid = [...Array(7)].reduce((acc, _, i) => { acc[i] = { 0: true }; return acc; }, { });
const maxGrid =  [...Array(7)].reduce((acc, _, i) => { acc[i] = 0; return acc; }, {});

const movementList = input.split('');
let movementIndex = 0;
let currentLeftX = 2;
let currentTopY = 3;
let rock = rockTypes[0];
for (let rockIndex = 0; rockIndex < 1000000000000; rockIndex++) {
    rock = rockTypes[rockIndex % 5];
    currentLeftX = 2;

    const bottomEdge = Math.min(...rock.map(r => r.y));
    currentTopY = Math.max(...Object.values(maxGrid)) + 3 - bottomEdge + 1;
    while (true) {
        const nextMovement = movementList[movementIndex++ % movementList.length];
        potentialNextX = currentLeftX + (nextMovement === '<' ? - 1 : + 1);

        const rightOffset = Math.max(...rock.map(r => r.x));
        if (potentialNextX >= 0 && rightOffset + potentialNextX <= 6 && rock.every(pos => !grid[pos.x + potentialNextX] || !grid[pos.x + potentialNextX][pos.y + currentTopY])) {
            currentLeftX = potentialNextX;
        }

        // Freeze the rock an dselect the next rock
        if (rock.some(pos => grid[pos.x + currentLeftX]?.[pos.y + currentTopY - 1])) {
            rock.forEach(rockPos => {
                grid[currentLeftX + rockPos.x][currentTopY + rockPos.y] = true;
                maxGrid[currentLeftX + rockPos.x] = Math.max(maxGrid[currentLeftX + rockPos.x], currentTopY + rockPos.y);
            });
            break;
        }

        // otherwise move the rock down one
        currentTopY--;
    }
}

console.log(Math.max(...Object.values(maxGrid)))