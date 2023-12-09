import fs from "fs";

const parseStringNumbers = (originalString: string) => {
  let newString = originalString;
  // Replace all numbers with correspodning digits
  // However we cannot strip the beginning and ending charcters because the might be the beginning
  // or end of new words
  newString = newString.replaceAll("one", "o1e");
  newString = newString.replaceAll("two", "t2o");
  newString = newString.replaceAll("three", "t3e");
  newString = newString.replaceAll("four", "f4r");
  newString = newString.replaceAll("five", "f5e");
  newString = newString.replaceAll("six", "s6x");
  newString = newString.replaceAll("seven", "s7n");
  newString = newString.replaceAll("eight", "e8t");
  newString = newString.replaceAll("nine", "n9e");
  return newString;
};

function main() {
  const file = fs.readFileSync("./input.txt", "utf8");
  const lines = file.split("\n");
  let sum = 0;
  for (const line of lines) {
    const newLine = parseStringNumbers(line);
    let firstNum = "";
    let lastNum = "";
    for (const char of newLine) {
      if (!isNaN(parseFloat(char))) {
        if (firstNum === "") {
          firstNum = char;
        } else {
          lastNum = char;
        }
      }
    }
    if (firstNum && !lastNum) {
      lastNum = firstNum;
    }
    let combined = firstNum + lastNum;
    if (combined) {
      sum += parseFloat(combined);
    }
  }
  console.log(sum);
}

main();
