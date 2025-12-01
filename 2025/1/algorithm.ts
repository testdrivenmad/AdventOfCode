import data from "./test-2.json";

let count = 0;

const boundToRange = (value: number) => {
  if (value < 0) {
    return boundToRange(value + 100);
  } else if (value > 99) {
    return boundToRange(value - 100);
  } else {
    return value;
  }
};

data.reduce((previousValue, currentValue) => {
  const addOrSubtract = currentValue[0];
  const amount = Number(currentValue.slice(1));
  let result;
  if (addOrSubtract === "L") {
    result = boundToRange(previousValue - amount);
  } else {
    result = boundToRange(previousValue + amount);
  }
  if (result === 0) count++;
  return result;
}, 50);

console.log(count);
