function makeArray(firstArray, secondArray, maxLength) {
  let newArray = [];
  
  for (let i = 0; i < firstArray.length; i++) {
    newArray.push(firstArray[i]);
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    newArray.push(secondArray[i]);
  }
  
  if (maxLength === 0) {
    return [];
  }
  
  let finalArray = [];
  for (let i = 0; i < maxLength && i < newArray.length; i++) {
    finalArray.push(newArray[i]);
  }
  
  return finalArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []