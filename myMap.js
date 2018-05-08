function myMap(arr, fun) {
  let result = [];
  for (let item of arr) {
    result.push(fun(item))
  }
  return result
}

let testFunction = el => el * 5;
let testArray = [1, 2, 3];

newArrRes = myMap(testArray, testFunction);

if (newArrRes[0] === 5 &&
    newArrRes[1] === 10 &&
    newArrRes[2] === 15
  ) {
  console.log('All tests pass!');
}
