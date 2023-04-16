function findDuplicates(array) {
    let result = [];
    let counts = {};
    
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    for (let num in counts) {
      if (counts[num] > 1) {
        result.push(parseInt(num));
      }
    }
    
    return result;
  }

let inputArray = [1, 2, 3, 2, 4, 5, 3, 6];
let outputArray = findDuplicates(inputArray);
console.log(outputArray); // should output [2, 3]

