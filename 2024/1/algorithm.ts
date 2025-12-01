import data from "./data.json";

const partOne = () => {
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
};

// part 2
// combine the two arrays, sort it, stop adding the number when the number changes O((n+m)^3)
const partTwo = () => {
  console.log(
    new Set(data[0])
      .intersection(new Set(data[1]))
      .values()
      .reduce((previous, current) => previous + current, 0),
  );
};

partOne();
partTwo();
