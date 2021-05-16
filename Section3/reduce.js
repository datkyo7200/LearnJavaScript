// const sumFor = (numberList) => {
//   let sum = 0;
//   //   for (let i = 0; i < numberList.length; i++) {
//   //     sum += numberList[i];
//   //   }
//   for (const number of numberList) {
//     sum += number;
//   }
//   return sum;
// };
array = [1, 2, 3, 4, 5];
// console.log(sumFor(array));

const sumFor = array.reduce(
  (resultFromLastStep, currentNumber) => resultFromLastStep + currentNumber,
  0
);
// console.log(sumFor);

const wordList = ["Hieu", "Kha", "Thanh"];
const findTheLongestWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) return null;
  return wordList.reduce((theLongWord, currentWord) => {
    return theLongWord.length > currentWord.length ? theLongWord : currentWord;
  }, wordList[0]);
};

// console.log(findTheLongestWord(wordList));

const listArray = [
  { id: "key1", value: "value 1" },
  { id: "key2", value: "value 2" },
  { id: "key3", value: "value 3" },
];
const arrayToObject = (listArray) => {
  return listArray.reduce((resultObject, currentObject) => {
    console.log(currentObject.id);
    resultObject[currentObject.id] = currentObject.value;
    return resultObject;
  }, {});
};

// console.log(arrayToObject(listArray));

// EXERCISE

const listNumber = [100, 88, 87, 99, 95, 122];
const findNumberMin = (listNumber) => {
  if (!Array.isArray(listNumber) || listNumber.length === 0) return null;
  return listNumber.reduce((result, currentNumber) => {
    return result > currentNumber ? currentNumber : result;
  }, listNumber[0]);
};

// console.log(findNumberMin(listNumber));

const findMaxEvenNumber = (listNumber) => {
  if (!Array.isArray(listNumber) || listNumber.length === 0) return null;
  return listNumber.reduce((result, currentNumber) => {
    return result > currentNumber && result % 2 === 0 ? result : currentNumber;
  }, listNumber[0]);
};
// console.log(findMaxEvenNumber(listNumber));

//sum object

const listObject1 = {
  a: 1,
  b: 42,
  c: 2,
};

const sumVallueObject = (listObject) => {
  if (typeof listObject !== "object" && listObject === null) return null;

  return Object.values(listObject).reduce((t, value) => t + value, 0);
};

// console.log(sumVallueObject(listObject1));

const listObject2 = { id: "key1", value: "value 1" };

const convertObjectToArray = (listObject) => {
  if (typeof listObject !== "object" && listObject === null) return null;

  return Object.keys(listObject).reduce((resultArr, key) => {
    // resultArr.push(listObject[key]);
    resultArr.push({ id: key, value: listObject[key] });
    return resultArr;
  }, []);
};

console.log(convertObjectToArray(listObject2));
