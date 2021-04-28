const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(firstArr=>firstArr%2===0);
const eachElementInFirstIsOdd = firstArray.every(firstArr=>firstArr%2===1);

const eachElementInSecondIsEven = secondArray.every(secondArr=>secondArr%2===0);
const eachElementInSecondIsOdd = secondArray.every(secondArr=>secondArr%2===1);

const eachElementInThirdIsEven = thirdArray.every(thirdArr=>thirdArr%2===0);
const eachElementInThirdIsOdd = thirdArray.every(thirdArr=>thirdArr%2===1);