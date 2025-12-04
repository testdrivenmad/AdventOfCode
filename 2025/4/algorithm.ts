import data from "./test-2.json";

const algorithmOne = () => {
  const aggregate = data.reduce((pullableRolls, shelf, shelfIndex) => {
    shelf.forEach((slot, slotIndex) => {
      if (slot === "@") {
        let numSiblings = 0;
        if (data[shelfIndex - 1] && data[shelfIndex - 1]![slotIndex - 1] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex - 1] && data[shelfIndex - 1]![slotIndex] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex - 1] && data[shelfIndex - 1]![slotIndex + 1] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex]![slotIndex - 1] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex]![slotIndex + 1] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex + 1] && data[shelfIndex + 1]![slotIndex - 1] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex + 1] && data[shelfIndex + 1]![slotIndex] === "@") {
          numSiblings++;
        }
        if (data[shelfIndex + 1] && data[shelfIndex + 1]![slotIndex + 1] === "@") {
          numSiblings++;
        }
        if (numSiblings < 4) {
          return pullableRolls++;
        }
      }
    });
    return pullableRolls;
  }, 0);
  console.log("solution", aggregate);
};

const algorithmTwo = () => {
  const pullAndCount = (data: string[][]) => {
    return data.reduce((pullableRolls, shelf, shelfIndex) => {
      shelf.forEach((slot, slotIndex) => {
        if (slot === "@") {
          let numSiblings = 0;
          if (data[shelfIndex - 1] && data[shelfIndex - 1]![slotIndex - 1] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex - 1] && data[shelfIndex - 1]![slotIndex] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex - 1] && data[shelfIndex - 1]![slotIndex + 1] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex]![slotIndex - 1] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex]![slotIndex + 1] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex + 1] && data[shelfIndex + 1]![slotIndex - 1] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex + 1] && data[shelfIndex + 1]![slotIndex] === "@") {
            numSiblings++;
          }
          if (data[shelfIndex + 1] && data[shelfIndex + 1]![slotIndex + 1] === "@") {
            numSiblings++;
          }
          if (numSiblings < 4) {
            data[shelfIndex]![slotIndex] = ".";
            return pullableRolls++;
          }
        }
      });
      return pullableRolls;
    }, 0);
  };
  let aggregate = 0;
  while (true) {
    const result = pullAndCount(data);
    if (result === 0) {
      break;
    } else {
      aggregate += result;
    }
  }
  console.log("solution", aggregate);
};

algorithmTwo();
