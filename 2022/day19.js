let input = `
Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.`;

ainput = `
Blueprint 1: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 2 ore and 15 obsidian.
Blueprint 2: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 12 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 4: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 3 ore and 12 obsidian.
Blueprint 6: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 3 ore and 11 obsidian.
Blueprint 7: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 8: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 17 obsidian.
Blueprint 11: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 9 clay. Each geode robot costs 2 ore and 9 obsidian.
Blueprint 12: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.
Blueprint 13: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 14: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 15: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 13 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 17: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 2 ore and 19 obsidian.
Blueprint 18: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 19: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 10 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 20: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 6 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 21: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 23: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 17 clay. Each geode robot costs 3 ore and 19 obsidian.
Blueprint 24: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 3 ore and 15 obsidian.
Blueprint 25: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 10 obsidian.
Blueprint 26: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 4 ore and 10 obsidian.
Blueprint 29: Each ore robot costs 2 ore. Each clay robot costs 2 ore. Each obsidian robot costs 2 ore and 8 clay. Each geode robot costs 2 ore and 14 obsidian.
Blueprint 30: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 3 ore and 8 obsidian.`;


function ints(line) {
  return line.match(/(-?\d+)/g).map(i => Number(i));
}

function getAllPermutations(array) {
  const list = [];
  for (let p of permute(array)) {
    list.push(p);
  }
  return list;
}

function* permute(arr, m = []) {
  if (arr.length === 0) {
    yield m;
  } else {
    for (let i = 0; i < arr.length; i++) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);
      // if (Array.from({ length: 15 }).some((_, l) => skipPermutation[m.slice(0, l).join('-')])) {
      //   return;
      // }
      yield* permute(curr.slice(), m.concat(next))
    }
  }
}

const blueprints = {};
const robots = { ore: 1, clay: 0, obsidian: 0, geode: 0 };
input.trim().split('\n').map(line => {
  [id, oreCost, clayCost, obsidianOreCost, obsidianClayCost, geodeOreCost, geodObsidianCost] = ints(line);
  blueprints[id] = {
    blueprintId: id,
    globalMax: 0,
    costs: [{ o: oreCost }, { o: clayCost }, {o: obsidianOreCost, c: obsidianClayCost }, { o: geodeOreCost, ob: geodObsidianCost }]
  };
})

const robotOrderMap = {
  R: 0,
  C: 1,
  O: 2,
  G: 3
}

function canProduceRobot(blueprintId, robotLetter, counts) {
  const costs = blueprints[blueprintId].costs[robotOrderMap[robotLetter]];
  const canHaveRobot = counts[0] >= (costs.o || 0) && counts[1] >= (costs.c || 0) && counts[2] >= (costs.ob || 0);

  if (canHaveRobot) {
    return [
      counts[0] - (costs.o || 0),
      counts[1] - (costs.c || 0),
      counts[2] - (costs.ob || 0),
      counts[3]
    ]
  }

  return null;
}

let maxValueForStack = {};
function recurse(blueprintId, counts, robots, minute, stackOrder) {
  if (counts[3] >= blueprints[blueprintId].globalMax) {
    blueprints[blueprintId].globalMax = Math.max(counts[3], blueprints[blueprintId].globalMax);

    [...Array(stackOrder.length)].map((_, l) => {
      maxValueForStack[stackOrder.slice(0, l)] = Math.max(maxValueForStack[stackOrder.slice(0, l)], counts[3]);
    })

    blueprints[blueprintId].maxSequence = stackOrder;
  }

  if (minute === 25) {
    console.log(stackOrder, counts[3], blueprints[blueprintId].globalMax);
    return counts[3];
  }

  // if (stackOrder.search('--C-C-C---OC--O--G') !== -1) {
  //   console.log('hero');
  // }

  const predictiveMaxGeodeCount = (25 - minute) * (25 - minute + 1) / 2 + (25 - minute) * robots[3] + counts[3];
  if (predictiveMaxGeodeCount < blueprints[blueprintId].globalMax) {
    console.log(stackOrder, counts[3], blueprints[blueprintId].globalMax);
    return 0;
  }

  if ([...Array(stackOrder.length)].some((_, l) => maxValueForStack[stackOrder.slice(0, l)] >= predictiveMaxGeodeCount)) {
    console.log(stackOrder, counts[3], blueprints[blueprintId].globalMax);
    return counts[3];
  }

  let results = [];
  // Don't buy wait
  let newCountsPlusChanges = [
    counts[0] + robots[0],
    counts[1] + robots[1],
    counts[2] + robots[2],
    counts[3] + robots[3]
  ];

  let newStackOrder = `${stackOrder}-`;
  maxValueForStack[newStackOrder] = Math.max(maxValueForStack[newStackOrder] || 0, counts[3]);
  results.push(recurse(blueprintId, newCountsPlusChanges, robots, minute + 1, newStackOrder));

  // and buy
  const recommendedBuy = ['G', 'O', 'C', 'R'].find(robotToBuy => canProduceRobot(blueprintId, robotToBuy, counts));
  if (recommendedBuy) {
    const newCounts = recommendedBuy ? canProduceRobot(blueprintId, recommendedBuy, counts) : counts;

    newCountsPlusChanges = [
      newCounts[0] + robots[0],
      newCounts[1] + robots[1],
      newCounts[2] + robots[2],
      newCounts[3] + robots[3]
    ];

    const newRobots = robots.slice(0);
    if (recommendedBuy) {
      newRobots[robotOrderMap[recommendedBuy]]++;
    }

    newStackOrder = `${stackOrder}${recommendedBuy}`;
    maxValueForStack[newStackOrder] = Math.max(maxValueForStack[newStackOrder] || 0, counts[3]);
    results.push(recurse(blueprintId, newCountsPlusChanges, newRobots, minute + 1, newStackOrder));
  }
  return Math.max(...results);
}

let geodeSum = 0;
for (const blueprint of Object.values(blueprints).slice(1)) {
  maxValueForStack = {};
  const orderPurchaseListSum = recurse(blueprint.blueprintId, [0, 0, 0, 0], [1, 0, 0, 0], 1, '');
  console.log(blueprint.maxSequence, orderPurchaseListSum);
  geodeSum += orderPurchaseListSum * blueprint.blueprintId;
}


console.log(geodeSum);
