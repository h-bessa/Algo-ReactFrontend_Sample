function increment(number) {
  let length = number.length - 1;

  while (length >= 0) {
    let lastNumber = number[length];
    lastNumber++;

    if (lastNumber > 0 && lastNumber <= 9) {
      number[length] = lastNumber;
      break;
    } else {
      number[length] = 0;
      if (length == 0) {
        // For the case [ 9, 9, 9 ] 
        number.unshift(1);
        break;
      }
      length--;
    }
  }
  return number;
}

console.log(increment([6, 5, 9]));
console.log(increment([9, 9, 9, 9]));
console.log(increment([9, 9, 9]));
console.log(increment([9, 9]));
console.log(increment([9]));
console.log(increment([1, 2, 3]));
