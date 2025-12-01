import data from "./test-2.json";

let count = 0;

const boundToRange = (value: number, previous: number) => {
  if (value < 0) {
    count += Math.floor(Math.abs(value) / 100);
    if (previous > 0) {
      count++;
    }
    return ((value % 100) + 100) % 100;
  } else if (value > 99) {
    count += Math.floor(value / 100);
    if (previous < 0) {
      count++;
    }
    return value % 100;
  } else {
    if (value === 0) count++;
    return value;
  }
};

data.reduce((previousValue, currentValue) => {
  const addOrSubtract = currentValue[0];
  const amount = Number(currentValue.slice(1));
  let result;
  if (addOrSubtract === "L") {
    // subtract from current
    result = boundToRange(previousValue - amount, previousValue);
  } else {
    // add to current
    result = boundToRange(previousValue + amount, previousValue);
  }
  return result;
}, 50);

console.log(count);
