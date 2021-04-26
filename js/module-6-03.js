function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  firstArray.forEach(function(firstArr) {
      if (secondArray.includes(firstArr)){
        commonElements.push(firstArr);
      }
    })
  
    return commonElements;
    // Пиши код выше этой строки
   
}
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])