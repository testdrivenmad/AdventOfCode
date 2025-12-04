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
  const aggregate = data.reduce((aggregator, current) => {
    return aggregator;
  }, 0);
  console.log("solution", aggregate);
};

algorithmOne();
