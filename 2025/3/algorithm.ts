import data from "./test-2.json";

const algorithmOne = () => {
  const aggregate = data.reduce((joltageAggregator, currentBank) => {
    const currentBankArray = `${currentBank}`.split("");
    let highestJoltage = 0;
    let secondHighestJoltage = 0;
    let highestJoltageIndex = 0;
    for (
      let batteryIndex = 0;
      batteryIndex < currentBankArray.length - 1;
      batteryIndex++
    ) {
      if (Number(currentBankArray[batteryIndex]) > highestJoltage) {
        highestJoltage = Number(currentBankArray[batteryIndex]);
        highestJoltageIndex = batteryIndex;
      }
    }

    for (
      let batteryIndex = highestJoltageIndex + 1;
      batteryIndex < currentBankArray.length;
      batteryIndex++
    ) {
      if (Number(currentBankArray[batteryIndex]) > secondHighestJoltage) {
        secondHighestJoltage = Number(currentBankArray[batteryIndex]);
      }
    }

    return joltageAggregator + highestJoltage * 10 + secondHighestJoltage;
  }, 0);
  console.log("solution", aggregate);
};

const algorithmTwo = () => {
  const aggregate = data.reduce((previousValue, currentValue) => {
    previousValue;
    currentValue;
    return previousValue;
  }, 0);
  console.log("solution", aggregate);
};

algorithmOne();
