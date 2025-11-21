import data from "./data.json";

const first = data[0]!.sort();
const second = data[1]!.sort();

// part 1
console.log(
  first.reduce(
    (previous, current, currentIndex) =>
      Math.abs(current! - second[currentIndex]!) + previous,
    0,
  ),
);
