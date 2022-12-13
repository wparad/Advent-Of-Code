let input = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

input = `
abccccccccccccccccccccaaaaaaaacccccccccccccaacaaaaacccccccccccccccccccccaaaaaacccccaaaaaccccccccccccccccccccaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaa
abcccccccccccccccccccaaaaaaaaacccccccccccccaaaaaaaaccccccccccccccaacccccaaaaaaaaaaaaaaaaccccccccccccccccccccaaaccccccccccccccccccccccccaccaccccccccccccccccccccccccccccaaaaaa
abccccccccccccccccccaaaaaaaaaacccccaacccccccaaaaaccccccccccccccaaaaaacccaaaaaaaaaaaaaaaaccccccccccccccccccaacaaaaacccccccccccccccccccccaaaaccccccccccccccccccccccccccccaaaaaa
abccccccccccaaacaaacaaacaaacccccacaaaccccccccaaaaacccccccccccccaaaaaacaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaccccccccccccccccccccaaaaaccccccccaaaccccaaaccccccccccaaacaa
abccccccccaaaaaccaaaaaccaaaccccaaaaaaaacccccaaacaaccccccccccccccaaaaccaaaaaaaaccccaaaaaacccccccccccccccccccaaaaaccccccccccccccccccccccaaaaaacccccccaaaacccaaaccccccccccccccaa
abccccccccaaaaaaccaaaaaaaaaaaccaaaaaaaaccccccaacccccccccccccccccaaaacaaaacaaaacccccaaacccccccaacaaccccccccccaaaaacccaaccccccccccccccccaaaaaaccccccccaaaaaaaacccccccccccccccaa
abccccccccaaaaaaaaaaaaaaaaaaacccaaaaaaccccccccccccccccccccccccccaccaccccccaaaaaccccccccccccccaaaaacccccccccaaacaacaaaaaaccccccccccccccccaacccccccckkkkkkaaaaccccccccccccccccc
abccccccccaaaaacaaaaaccaaaaaaaacaaaaaccccccccccccccccccccccccccccccccccccccaaaccccccccccccccccaaaaacccccccccaaccccaaaaaaccccccccccccccccccccccccckkkkkkklaaccccccccaacccccccc
abccccccccaaaaacaacaaacaaaaaaaacaaaaaacccccccccccccccccccccaacccccccccccccccaaaccccccccccccccaaaaaacccccccccccccccaaaaaacccccccccccccccccccccccckkkkkkkklllccccccccccaaaacccc
abcaaccccccccccccccaaaccaaaaaaaccccaaccccccccccccccccccaaccaacccccccccccccccccccaacccccccccccaaaacccccccccccccccccaaaaacccccccaaaacccccccccccccckkkoppppllllllccccccccaaccccc
abcaacccccccccccccccccccaaaaaccccccccccccccccccccccccccaaaaaacccccccccccccccccaaaaaacccccccccccaaccccccccccccccccccaaaacccccccaaaaacccccccccccckkkooppppplllllllllccccdaccccc
abaaaccccccaaacccccccccaaaaaaccccccccaaaccccccccccccccccaaaaaaacccccccccccccccaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaccccccccccccjkoooopuppplllllllmmmddddacccc
abaaaaaccccaaaaacccccccccccaaaaacccccaaaaccccccccccccccccaaaaaaccccccccccccccccaaaacccccccccccccccccaaaccccccccccccccccccccccaaaaaacccccccccccjjjooouuuuppppppqqmmmmmdddacccc
abaaaaacccaaaaaacccaacaaacccaaaaaacccaaaacccccccccccccccaaaaaccccccccccaaccccccaaaaccccccaacccccacccaaccccccccccaacaaccccccccaaaaaacccaaaccccjjjjoouuuuuuppppqqqqqmmmdddacccc
abaaccacccaaaaaacccaaaaaacccaaaaaacccaaacccccccccccccccaaaaaaccccccccaaaaaaccccaccacccccaaaacccaaaaaaaccccccccccaaaaaccccccccccaacacccaaccccjjjjooouuuxuuupppqqqqqmmmdddccccc
abaaaccccccaaaaacccaaaaaacccaaaaaccccccccccccccccccccccccccaaccccccccaaaaaacccccccccccccaaaaccccaaaaaaaaccccccccaaaaaaccccccccccccaaaaaaacjjjjjoooouuxxxuuvvvvvvqqqmmdddccccc
abaaaccccccaacaacccaaaaaaacccaaaaacccccccccccccccaaacccccccccccccccccaaaaaccccaaacccccccaaaaccccaaaaaaaaacccccccaaaaaaccccccccccccaaaaaacjjjjjoooouuuxxxuuvvvvvvqqqmmdddccccc
abccccccccccccccccaaaaaaaacccaaaaacccccccccccccccaaaccccccccccccccccccaaaaacccaaacacccccccccccccaaaaaaaaacccccccaaaaaccccccaacccccaaaaaaajjjnoooottuuxxxxvyyyvvvqqmmmdddccccc
abccccccccccccccccaaaaaaaacccccccccccccccccaaaaaaaaaccaaccccccccccccccaaaaacaacaaaaaccccccccccccaaaaaaaaccccccccccaaacccccaaaaccccaaaaaajjjnnnntttttxxxxyyyyyvvvqqmmmdddccccc
abccccccaaaccccccccccaaacccaaccccccccccccccaaaaaaaaaaaaaaaccccccccaaacccccccaaaaaaaacccccccccccaaaaaaaaccccccccccccaacccccaaaaacacaaaaaaiiinnntttxxxxxxxyyyyyvvqqqmmdddcccccc
SbccccccaaaaaccccccccaaccccaaaccccccccccccccaaaaaaaaaaaaaacccccccaaaaaaccccccaaaaaccccccccacccaaaccaaacccccccccaaacaaccaaaaaaaaaaaaaaaaaiiinnntttxxxEzzzzyyyvvqqqmmmeeecccccc
abcccccaaaaaacccccccccccaaaaaaaaccccccccccccaaaaaaaaaaaaaccccccccaaaaaacccccccaaaaacccccccaacaaaccccaaacccccccccaaaaaccaaaaaaaaaacaccaaaiiinnntttxxxxxyyyyyvvvqqqnnneeecccccc
abaacccaaaaaacccccccccccaaaaaaaaccccaaaccccaaaaaaaaaaaaaaacccccccaaaaaccccccccaacaaaaaccccaaaaacccccccccccccccccaaaaaaaccaaaaaacccccccaaiiinnnttttxxxxyyyyyyvvvrrnnneeecccccc
abaaaaaaaaaaaccccccccccccaaaaaaccccaaaacccaaaaaaaaaaaaacaaccccccccaaaaacccccccaaccccaaaacccaaaaaacaacaaccccccccaaaaaaaaccaaaaaaccccccccciiiinnnttttxxwyywyyyyvvrrrnneeecccccc
abaaaaacaacaaccccccccccccaaaaaaccccaaaacccaaacaaaacaaaccccccccccccaacaaccccaacccccaaaaaacaaaaaaaacaaaaacccccaaaaaaaaaaaccaaaaaacccccccccciiiinnnttttwwyywwywwwvrrrnneeecccccc
abaaaacccccccccccccccccccaaaaaacccccaaacccccccaaacccacaaccccccccccccccccccaaccccccaaaaaccaaaaaaaaaaaaaccccccaaaaaaaaacccaaaaaaaacccccccccciiinnnnntswwywwwwwwwwrrrnnneecccccc
abaaaaaccccccccccccccccccaacaaacccccccccccccccaacaaacaaacccccccccccccccaaaaacaaccccaaaaaccccaacccaaaaaacccccaaacaaaaaccccacccccccaaacccccciiiiinnmsswwwwwswwwwrrrrnnneecccccc
abaaaaaaccaaaccccccccccccccccccccccccccccccccccccaaaaaaaccccccccaaaccccaaaaaaaaccccaaccaccccaacccccaaaaccaaaaaaaaaaccccccccccccccaaaaacccccciihmmmsswwwwssrrrrrrrrnnneecccccc
abaaccaacaaaaccccccccccccccccccccccccccccccccccccaaaaaacccccccccaaaaaccccaaaaacccccccccccccccccccccacccccaaaaaaaaacccccccaaccaacaaaaacccccccchhhmmssswwsssrrrrrrrnnneeecccccc
abaacccccaaaacccccccccccccccccccccccccccccccccccccaaaaaaaacccccaaaaaacccaaaaacccccccccccccccccccccccccccccaaaaaaaccccccccaaaaaacaaaaacccccccchhhmmssssssslllllllnnnnfeecccccc
abccccccccaaacccccccccccccccaaccccccccccccccaaaccaaaaaaaaacccccaaaaaacccaacaaaccccccccccccccccccccccccaacccaaaaaaccccccccaaaaacccaaaaaccccccchhhmmmssssslllllllllnnfffeaacccc
abcccccccccccccccccccccccacaaaccccccccccccccaaaaaaaaaaaaaaccaaccaaaaaccccccaaccaacccccccccccccccccccccaaaccaaaaaaacccccccaaaaaaccaaccccccccccchhhmmmmsmllllllllllfffffaaacccc
abccccccccccccccccccccccaaaaaaaaccccccccccccaaaaaaacaaacaaaaaaccaaaaccccccccccaaaacccccccccccccccccaaaaaaaaaaacaaaccccccaaaaaaaacccccccccccccchhhmmmmmmlllggfffffffffaacccccc
abccccccccccccccccccccccaaaaaaaaccccccccccccaaacccccaaacaaaaacccccccccccaaacccaaaacccccccccccccccccaaaaaaaaaacccccccccccaaaaaaaaccccccccccccccchhhmmmmmlggggffffffffaaacccccc
abccccccccccccccccaaaacccaaaaaacccccccccccccccccccccaaacaaaaaaccccccccccaaacccaaaaccccccacccccccccccaaaaaacccccccccccccccccaacccaaccccccccccccchhhhgmgggggggffaccccccaacccccc
abccccccccccccccccaaaacccaaaaacccccccccccccccccccccccccaaaaaaaacccccccccaaaaccaaacccccccaaacaaacccccaaaaaacccccccccccccccccaaccaaccccccccccccccchhhgggggggaaaaacccccccccccccc
abccccccccccccccccaaaacccaaaaaaccccccccccccccccccccccccaaaaaaaaccccccccccaaaaaaaaaccccccaaaaaaacccccaaaaaaccccccccccccccccccaaaaacaaccccccccccccchggggggaacccccccccccccccccca
abcccccccccccccccccaacccccccaaccccccccccccccccccccccccccccaacaccaaacccaacaaaaaaaacccccccaaaaaaccccccaaccaacaaaccacccccaaccccaaaaaaaaccccccccccccccccccaaaccccccccccccccccccca
abcccccaaccccccccccccccccaaccccccccaacccccccccaaacccccccccaacaaaaaacccaaacaaaaaacccccccaaaaaaacccccccccccccaaaaaacccaaaaccccccaaaaaccccaaacccccccccccccaaccccccccccccccaaaaaa
abccccaaaacccccccccccccccaaaacccaaaaccccccccccaaaacccccccccccaaaaaaccaaaaaaaaaacccccccaaaaaaaaaaccccccccccccaaaaacccaaaaaacccaaaaacccccaaaacccccccccccaaccccccccccccccccaaaaa
abccccaaaacccccccccccccaaaaaacccaaaaaaccccccccaaaaccccccccccaaaaaaaacaaaaaaaaaaaaaccccaaaaaaaaaaccccccccccaaaaaaaacccaaaaccccaacaaaccccaaaacccccccccccccccccccccccccccccaaaaa`;

const graphMinDistance = {};
const area = {};

let startXpos = 0;
let startYpos = 0;
let endXpos = 0;
let endYpos = 0;

input.trim().split('\n').map((row, rowIndex) => {
    row.trim().split('').map((colValue, colIndex) => {
        if (!graphMinDistance[rowIndex]) {
            graphMinDistance[rowIndex] = {};
        }

        if (!area[rowIndex]) {
            area[rowIndex] = {};
        }

        area[rowIndex][colIndex] = colValue;

        if (colValue === 'S') {
            startXpos = rowIndex;
            startYpos = colIndex;
        }

        if (colValue === 'E') {
            endXpos = rowIndex;
            endYpos = colIndex;
        }
    });
});

const width = Object.keys(area).length;
const height = Object.keys(area[0]).length;

function getHeight(posX, posY) {
    return (area[posX][posY] === 'S' ? 'a' : (area[posX][posY] === 'E' ? 'z' : area[posX][posY])).charCodeAt(0);
}


const Graph = require('node-dijkstra');
const graph = new Graph();

function search2({ posX, posY, previousX, previousY }, newDistance) {
    const currentMinDistanceToPosition = graphMinDistance[posX][posY] || 9999999999999;

    if (currentMinDistanceToPosition <= newDistance) {
        return currentMinDistanceToPosition;
    }

    const currentLetter = getHeight(posX, posY);
    // if (currentLetter === 'E') {
    //     console.log('*******', newDistance);
    // }
    graphMinDistance[posX][posY] = newDistance;

    
    console.log('****', currentLetter, newDistance);

    const searches = [];
    const threshold = currentLetter + 1;
    if (posX > 0 && getHeight(posX - 1, posY) <= threshold) {
        searches.push(search({ posX: posX - 1, posY }, newDistance + 1 ));
    }

    if (posX < width - 1 && getHeight(posX + 1, posY) <= threshold) {
        searches.push(search({ posX: posX + 1, posY }, newDistance + 1 ));
    }

    if (posY > 0 && getHeight(posX, posY - 1) <= threshold) {
        searches.push(search({ posX, posY: posY - 1 }, newDistance + 1 ));
    }

    if (posY < height - 1 && getHeight(posX, posY + 1) <= threshold)  {
        searches.push(search({ posX, posY: posY + 1 }, newDistance + 1 ));
    }

    return Math.min(...searches);
}

const visited = {};
function visit({ posX, posY }) {
    if (visited[posX] && visited[posX][posY]) {
        return;
    }
    if (!visited[posX]) {
        visited[posX] = {};
    }
    visited[posX][posY] = true;

    const searches = [];

    const currentLetter = getHeight(posX, posY);
    const threshold = currentLetter + 1;
    const edges = new Map();
    if (posX > 0 && getHeight(posX - 1, posY) <= threshold) {
        edges.set(`${posX - 1}-${posY}`, 1);
        visit({ posX: posX - 1, posY });
    }

    if (posX < width - 1 && getHeight(posX + 1, posY) <= threshold) {
        edges.set(`${posX + 1 }-${posY}`, 1);
        visit({ posX: posX + 1, posY });
    }

    if (posY > 0 && getHeight(posX, posY - 1) <= threshold) {
        edges.set(`${posX}-${posY - 1}`, 1);
        visit({ posX: posX, posY: posY - 1 });
    }

    if (posY < height - 1 && getHeight(posX, posY + 1) <= threshold)  {
        edges.set(`${posX}-${posY + 1}`, 1);
        visit({ posX: posX, posY: posY + 1 });
    }

    if (edges.size > 0) {
        graph.addNode(`${posX}-${posY}`, edges);
    }
}

visit({ posX: startXpos, posY: startYpos }, 0);

const startPosHeight = getHeight(startXpos, startYpos);
console.log(startPosHeight);
const values = [];
for (let posX = 0; posX < width; posX++) {
    for (let posY = 0; posY < height; posY++) {
        if (getHeight(posX, posY) === startPosHeight) {
            values.push(graph.path(`${posX}-${posY}`, `${endXpos}-${endYpos}`, { cost: true }).cost);
        }
    }
}


console.log(Math.min(...values.filter(v => v)), values);