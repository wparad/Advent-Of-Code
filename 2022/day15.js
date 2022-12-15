let input =`Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`;

input = `Sensor at x=3482210, y=422224: closest beacon is at x=2273934, y=-202439
Sensor at x=3679395, y=2737332: closest beacon is at x=4104213, y=2980736
Sensor at x=3173475, y=3948494: closest beacon is at x=3494250, y=3554521
Sensor at x=27235, y=3642190: closest beacon is at x=-190885, y=3635525
Sensor at x=3851721, y=1754784: closest beacon is at x=3145586, y=2167751
Sensor at x=327074, y=3250656: closest beacon is at x=-190885, y=3635525
Sensor at x=3499970, y=3186179: closest beacon is at x=3494250, y=3554521
Sensor at x=150736, y=2522778: closest beacon is at x=-85806, y=2000000
Sensor at x=3000768, y=3333983: closest beacon is at x=2564067, y=3163630
Sensor at x=1751302, y=1660540: closest beacon is at x=3145586, y=2167751
Sensor at x=2591068, y=2923079: closest beacon is at x=2564067, y=3163630
Sensor at x=48946, y=3999178: closest beacon is at x=-190885, y=3635525
Sensor at x=3695475, y=3863101: closest beacon is at x=3494250, y=3554521
Sensor at x=1504031, y=2760: closest beacon is at x=2273934, y=-202439
Sensor at x=3021186, y=2667125: closest beacon is at x=3145586, y=2167751
Sensor at x=1514629, y=3771171: closest beacon is at x=2564067, y=3163630
Sensor at x=234064, y=616106: closest beacon is at x=-85806, y=2000000
Sensor at x=3990843, y=3393575: closest beacon is at x=4104213, y=2980736
Sensor at x=768875, y=2665271: closest beacon is at x=-85806, y=2000000`;

function ints(line) {
    return line.match(/(-?\d+)/g).map(i => Number(i));
}

const sensors = [];
const beacons = {};
input.split('\n').map(line => {
    const s = {
        x: ints(line)[0],
        y: ints(line)[1],
        bx: ints(line)[2],
        by: ints(line)[3]
    };

    if (!beacons[s.bx]) {
        beacons[s.bx] = {};
    }
    beacons[s.bx][s.by] = true;

    s.beaconDistance = Math.abs(s.x - s.bx) + Math.abs(s.y -s.by);
    sensors.push(s)
});

const rowXNoBeacon = {};

// const globalMaxX = 20;
const globalMaxX = 4000000;
// sensors.map(s => {
//     // part 1
//     // const minY = 20;
//     // const maxY = 20;

//     // part 2
//     const minY = Math.max(0, s.y - s.beaconDistance);
//     const maxY = Math.min(globalMaxX, s.y + s.beaconDistance);

//     for (let yRow = minY; yRow <= maxY; yRow++) {
//         const distanceToRow = Math.abs(s.y - yRow);
//         const minX = Math.max(0, s.x - (s.beaconDistance - distanceToRow));
//         const maxX = Math.min(globalMaxX, s.x + (s.beaconDistance - distanceToRow));

//         for (let x = minX; x <= maxX; x++) {
//             console.log('hello', x, yRow);
//             if (!rowXNoBeacon[x]) {
//                 rowXNoBeacon[x] = {};
//             }
//             if (!beacons[x] || !beacons[x][yRow]) {
//                 rowXNoBeacon[x][yRow] = true;
//             }
//         }
//     }
// });


// part 2
// it needs to be out of range of each sensor, but to prevent there from being more than one point, it also needs to be exactly right outside the range
async function a() {
    for (let sensorToCheckIndex = 0; sensorToCheckIndex < sensors.length; sensorToCheckIndex++) {
        const sFocus = sensors[sensorToCheckIndex];
        const minX = sFocus.x - sFocus.beaconDistance;
        const maxX = sFocus.x + sFocus.beaconDistance;

        // left to top
        let y = sFocus.y;
        for (let x = minX; x <= sFocus.x; x++) {
            y++;
            let found = true;
            for (let sensorIndex = 0; sensorIndex < sensors.length; sensorIndex++) {
                const s = sensors[sensorIndex];
                if (Math.abs(s.x - x) + Math.abs(s.y - y) <= s.beaconDistance) {
                    found = false;
                    break;
                }
            }
            if (found && x >= 0 && x <= globalMaxX && y >= 0 & y <= globalMaxX) {
                return { x, y }
            }
        }

        // top to right
        for (let x = sFocus; x <= maxX; x++) {
            y--;
            let found = true;
            for (let sensorIndex = 0; sensorIndex < sensors.length; sensorIndex++) {
                const s = sensors[sensorIndex];
                if (Math.abs(s.x - x) + Math.abs(s.y - y) <= s.beaconDistance) {
                    found = false;
                    break;
                }
            }
            if (found && x >= 0 && x <= globalMaxX && y >= 0 & y <= globalMaxX) {
                return { x, y }
            }
        }

        // right to bottom
        for (let x = maxX; x >= sFocus.x; x--) {
            y--;
            let found = true;
            for (let sensorIndex = 0; sensorIndex < sensors.length; sensorIndex++) {
                const s = sensors[sensorIndex];
                if (Math.abs(s.x - x) + Math.abs(s.y - y) <= s.beaconDistance) {
                    found = false;
                    break;
                }
            }
            if (found && x >= 0 && x <= globalMaxX && y >= 0 & y <= globalMaxX) {
                return { x, y }
            }
        }

        // bottom to right
        for (let x = sFocus; x >= minX; x--) {
            y++;
            let found = true;
            for (let sensorIndex = 0; sensorIndex < sensors.length; sensorIndex++) {
                const s = sensors[sensorIndex];
                if (Math.abs(s.x - x) + Math.abs(s.y - y) <= s.beaconDistance) {
                    found = false;
                    break;
                }
            }
            if (found && x >= 0 && x <= globalMaxX && y >= 0 & y <= globalMaxX) {
                return { x, y }
            }
        }
    }
}

a().then(({ x, y }) => {
    console.log('PART2: ', x, y, x * 4000000 + y);
});