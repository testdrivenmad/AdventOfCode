import data from "./test-2.json";

const algorithmOne = () => {
  const aggregate = data.reduce((previousValue, currentValue) => {
    const [first, last] = currentValue.split("-") as [string, string];
    const numFirst = Number(first);
    const numLast = Number(last);
    let addedValue = 0;
    for (let current = numFirst; current < numLast + 1; current++) {
      const currentStr = `${current}`;
      if (
        currentStr.length % 2 === 0 &&
        currentStr.substring(0, currentStr.length / 2) ===
          currentStr.substring(currentStr.length / 2)
      ) {
        addedValue += current;
      }
    }
    return previousValue + addedValue;
  }, 0);
  console.log("solution", aggregate);
};

const algorithmTwo = () => {
  const aggregate = data.reduce((previousValue, currentValue) => {
    const [first, last] = currentValue.split("-") as [string, string];
    const numFirst = Number(first);
    const numLast = Number(last);
    let addedValue = 0;
    for (let current = numFirst; current < numLast + 1; current++) {
      let pattern = "";
      const currentString = `${current}`;
      if (
        currentString.length % 2 === 0 &&
        currentString.substring(0, currentString.length / 2) ===
          currentString.substring(currentString.length / 2)
      ) {
        addedValue += current;
        continue;
      }
      for (const currentDigit of currentString) {
        pattern += currentDigit;
        if (pattern.length > currentString.length / 2) {
          break;
        }
        const multiplier = currentString.length / pattern.length;
        if (
          Number.isInteger(multiplier) &&
          pattern.repeat(multiplier) === currentString
        ) {
          addedValue += current;
          break;
        }
      }
    }
    return previousValue + addedValue;
  }, 0);
  console.log("solution", aggregate);
};

algorithmTwo();
