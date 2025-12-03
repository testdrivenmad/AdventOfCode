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
      let dumb = "";
      const currentString = `${current}`;
      for (const currentDigit of currentString) {
        dumb += currentDigit;
        const multiplier = currentString.length / dumb.length;
        if (
          dumb.length !== currentString.length &&
          Number.isInteger(multiplier) &&
          dumb.repeat(multiplier) === currentString
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
