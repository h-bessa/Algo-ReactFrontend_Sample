function fizzbuzz(number) {
  for (i = 1; i <= number; i++) {
    switch (true) {
      case i % 5 === 0 && i % 3 === 0:
        console.log("FizzBuzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
}
fizzbuzz(15);
