let input = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

input = `Monkey 0:
Starting items: 52, 60, 85, 69, 75, 75
Operation: new = old * 17
Test: divisible by 13
  If true: throw to monkey 6
  If false: throw to monkey 7

Monkey 1:
Starting items: 96, 82, 61, 99, 82, 84, 85
Operation: new = old + 8
Test: divisible by 7
  If true: throw to monkey 0
  If false: throw to monkey 7

Monkey 2:
Starting items: 95, 79
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 5
  If false: throw to monkey 3

Monkey 3:
Starting items: 88, 50, 82, 65, 77
Operation: new = old * 19
Test: divisible by 2
  If true: throw to monkey 4
  If false: throw to monkey 1

Monkey 4:
Starting items: 66, 90, 59, 90, 87, 63, 53, 88
Operation: new = old + 7
Test: divisible by 5
  If true: throw to monkey 1
  If false: throw to monkey 0

Monkey 5:
Starting items: 92, 75, 62
Operation: new = old * old
Test: divisible by 3
  If true: throw to monkey 3
  If false: throw to monkey 4

Monkey 6:
Starting items: 94, 86, 76, 67
Operation: new = old + 1
Test: divisible by 11
  If true: throw to monkey 5
  If false: throw to monkey 2

Monkey 7:
Starting items: 57
Operation: new = old + 2
Test: divisible by 17
  If true: throw to monkey 6
  If false: throw to monkey 2`;


const monkeys = [];
let currentMonkey = {};

function executeOperation(old, rawOperation) {
    let operation = rawOperation.replace('new = ', '');
    return eval(operation);
}
let monkeyId = 0;
for (const line of input.split('\n')) {
    if (line.match(/^Monkey/)) {
        currentMonkey = { monkeyId };
        monkeyId++;
        monkeys.push(currentMonkey);
    }

    if (line.match('Starting items')) {
        currentMonkey.items = line.split(':')[1].split(',').map(t => Number(t.trim()));
    }

    if (line.match('Operation')) {
        currentMonkey.operation = line.split(':')[1].trim();
    }

    if (line.match(/^Test/)) {
        currentMonkey.divisor = Number(line.split('by')[1].trim());
    }

    if (line.match('If true:')) {
        currentMonkey.trueTarget = Number(line.split('monkey')[1].trim());
    }

    if (line.match('If false:')) {
        currentMonkey.falseTarget = Number(line.split('monkey')[1].trim());
    }
}

const totalModulus = Object.values(monkeys).reduce((acc, m) => acc * m.divisor, 1);
const inspections = {}
for (let round = 1; round < 10001; round++) {
    console.log(round);
    for (const monkey of monkeys) {
        console.log(monkey);
        let item
        while (item = monkey.items.pop()) {
            inspections[monkey.monkeyId] = (inspections[monkey.monkeyId] || 0) + 1;
            const newValue = executeOperation(item, monkey.operation) % totalModulus;
            if (newValue % monkey.divisor === 0) {
                monkeys[monkey.trueTarget].items.push(newValue);
            } else {
                monkeys[monkey.falseTarget].items.push(newValue);
            }
        }
    }
}

const max = Object.values(inspections).sort((a, b) => b - a)
console.log(max[0] * max[1]);