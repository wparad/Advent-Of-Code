function ints(line) {
    return line.match(/(-?\d+)/g).map(i => Number(i));
}

function* permute(arr, m = []) {
  if (arr.length === 0) {
    yield m;
  } else {
    for (let i = 0; i < arr.length; i++) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);
      if (Array.from({ length: 15 }).some((_, l) => skipPermutation[m.slice(0, l).join('-')])) {
        return;
      }
      yield* permute(curr.slice(), m.concat(next))
    }
  }
}

let input = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`;

input = `Valve EF has flow rate=22; tunnels lead to valves FK, HT, DE
Valve WT has flow rate=0; tunnels lead to valves XJ, XR
Valve RQ has flow rate=0; tunnels lead to valves VG, AV
Valve HF has flow rate=17; tunnels lead to valves EO, PQ, GX
Valve ZH has flow rate=0; tunnels lead to valves VG, RU
Valve AV has flow rate=0; tunnels lead to valves RQ, VQ
Valve AH has flow rate=12; tunnels lead to valves DF, FC, DE, MV, YC
Valve PQ has flow rate=0; tunnels lead to valves CF, HF
Valve DP has flow rate=18; tunnels lead to valves RD, OP, DR
Valve RU has flow rate=16; tunnels lead to valves ZH, VJ, AQ, SG
Valve AQ has flow rate=0; tunnels lead to valves RU, WE
Valve KO has flow rate=0; tunnels lead to valves VQ, HQ
Valve EY has flow rate=0; tunnels lead to valves WE, VQ
Valve RC has flow rate=14; tunnels lead to valves QK, BL, EO
Valve AA has flow rate=0; tunnels lead to valves XV, MS, BG, RT, HQ
Valve IH has flow rate=0; tunnels lead to valves VQ, VJ
Valve CK has flow rate=0; tunnels lead to valves SG, KG
Valve BG has flow rate=0; tunnels lead to valves DY, AA
Valve UJ has flow rate=0; tunnels lead to valves AF, OY
Valve HQ has flow rate=0; tunnels lead to valves AA, KO
Valve XV has flow rate=0; tunnels lead to valves AA, YL
Valve BL has flow rate=0; tunnels lead to valves DY, RC
Valve YL has flow rate=0; tunnels lead to valves WE, XV
Valve RT has flow rate=0; tunnels lead to valves VG, AA
Valve MV has flow rate=0; tunnels lead to valves AH, OM
Valve WE has flow rate=5; tunnels lead to valves AQ, YL, OM, ZU, EY
Valve HN has flow rate=0; tunnels lead to valves OP, XJ
Valve UR has flow rate=0; tunnels lead to valves NZ, OY
Valve FK has flow rate=0; tunnels lead to valves OY, EF
Valve GE has flow rate=0; tunnels lead to valves DF, XE
Valve GX has flow rate=0; tunnels lead to valves HF, DY
Valve YC has flow rate=0; tunnels lead to valves QC, AH
Valve XR has flow rate=0; tunnels lead to valves DY, WT
Valve MS has flow rate=0; tunnels lead to valves AA, DR
Valve EO has flow rate=0; tunnels lead to valves HF, RC
Valve VQ has flow rate=9; tunnels lead to valves NZ, KO, EY, AV, IH
Valve DY has flow rate=23; tunnels lead to valves XR, GX, BL, BG
Valve XJ has flow rate=24; tunnels lead to valves QK, HN, WT
Valve RD has flow rate=0; tunnels lead to valves VG, DP
Valve ZU has flow rate=0; tunnels lead to valves VG, WE
Valve AF has flow rate=0; tunnels lead to valves KG, UJ
Valve DR has flow rate=0; tunnels lead to valves MS, DP
Valve NZ has flow rate=0; tunnels lead to valves VQ, UR
Valve DE has flow rate=0; tunnels lead to valves EF, AH
Valve OP has flow rate=0; tunnels lead to valves DP, HN
Valve QK has flow rate=0; tunnels lead to valves XJ, RC
Valve CF has flow rate=20; tunnel leads to valve PQ
Valve FC has flow rate=0; tunnels lead to valves KH, AH
Valve KG has flow rate=25; tunnels lead to valves HT, AF, KH, CK
Valve XE has flow rate=11; tunnel leads to valve GE
Valve OY has flow rate=7; tunnels lead to valves FK, UJ, UR, QC
Valve OM has flow rate=0; tunnels lead to valves MV, WE
Valve QC has flow rate=0; tunnels lead to valves YC, OY
Valve DF has flow rate=0; tunnels lead to valves AH, GE
Valve KH has flow rate=0; tunnels lead to valves KG, FC
Valve SG has flow rate=0; tunnels lead to valves CK, RU
Valve VG has flow rate=3; tunnels lead to valves ZH, ZU, RQ, RD, RT
Valve HT has flow rate=0; tunnels lead to valves KG, EF
Valve VJ has flow rate=0; tunnels lead to valves IH, RU`;

const nodes = {};

input.split('\n').map(line => {
    const [_, valve, rate, tunnels] = line.match(/^Valve\s(\w{2}).*rate=(\d+);.*valves?\s(.*)/);
    nodes[valve] = Object.assign({ from: [], open: false, valve, rate: Number(rate), tunnels: tunnels.split(',').map(t => t.trim()) }, nodes[valve]);
})

const Graph = require('node-dijkstra');
const graph = new Graph();

Object.values(nodes).map(n => {
  const edges = new Map();  
  n.tunnels.map(t => {
    edges.set(t, 1);
  })

  graph.addNode(n.valve, edges);
})

const valvesWithRate = Object.keys(nodes).filter(n => nodes[n].rate);

// let testPermute = ['DD', 'BB', 'JJ', 'HH', 'EE', 'CC'].reverse();
let max = 0;
let counter = 0;

const cache = {};
const skipPermutation = {};

t = Date.now();
for (const permutation of permute(valvesWithRate)) {
  if (counter++ % 100000 === 0) {
    console.log(counter, max); // , Date.now() - t, (Date.now() - t) / counter * 1.2E12 / 3600 / 24);
  }

  if (Array.from({ length: 15 }).some((_, l) => skipPermutation[permutation.slice(0, l).join('-')])) {
    continue;
  }

  let currentLocation = 'AA';
  let totalPressureReleased = {};
  let minute = 0;
  let newLocation;
  let totalForPermutation;
  const reveredPermutation = permutation.slice(0).reverse();

  let skipIteration = false;

  while (newLocation = reveredPermutation.pop()) {   
    const key = `${currentLocation}-${newLocation}`
    const cost = cache[key] = cache[key] || graph.path(currentLocation, newLocation, { cost: true });
    minute += cost.cost + 1;
    currentLocation = newLocation;
    if (minute > 26) {
      reveredPermutation.push(newLocation);
      if (totalForPermutation * 2 * Math.max(1, 26 / minute) <= max) {
        skipPermutation[permutation.slice(0, permutation.findIndex(a => a === newLocation) + 1).join('-')] = true;
        skipIteration = true;
      }
      break;
    }
    totalPressureReleased[newLocation] = minute;
    totalForPermutation = Object.keys(totalPressureReleased).reduce((sum, k) => sum + (26 - totalPressureReleased[k]) * nodes[k].rate, 0);
    if (minute > 10 && totalForPermutation * 2 * Math.max(1, 26 / minute) < max) {
      skipPermutation[permutation.slice(0, permutation.findIndex(a => a === newLocation) + 1).join('-')] = true;
      skipIteration = true;
      break;
    }
    // console.log('LL: ', Date.now() - t);
  }

  if (skipIteration) {
    continue;
  }

  currentLocation = 'AA';
  minute = 0;
  while (newLocation = reveredPermutation.pop()) {  
    const key = `${currentLocation}-${newLocation}`
    const cost = cache[key] = cache[key] || graph.path(currentLocation, newLocation, { cost: true });
    minute += cost.cost + 1;
    currentLocation = newLocation;
    if (minute > 26) {
      if (totalForPermutation * Math.max(1, 26 / minute) <= max) {
        skipPermutation[permutation.slice(0, permutation.findIndex(a => a === newLocation) + 1).join('-')] = true;
      }
      break;
    }
    totalPressureReleased[newLocation] = minute;
    totalForPermutation = Object.keys(totalPressureReleased).reduce((sum, k) => sum + (26 - totalPressureReleased[k]) * nodes[k].rate, 0);
    if (minute > 10 && totalForPermutation * Math.max(1, 26 / minute) < max) {
      skipPermutation[permutation.slice(0, permutation.findIndex(a => a === newLocation) + 1).join('-')] = true;
      break;
    }
    // console.log('LL: ', Date.now() - t);
  }
  // console.log('E', Date.now() - t);
  max = Math.max(totalForPermutation, max);
}

console.log(max);