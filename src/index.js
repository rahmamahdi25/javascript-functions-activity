function divides(num1, num2) {
  return num1 % num2 === 0;
}

// RAHMA: Convert the above function to arrow function
const dividesArrow = (num1, num2) => 
  {
  return num1 % num2 === 0
};

// console.log(divides(10, 5));
// console.log(dividesArrow(10, 5));

//THAIS: Write a function that converts Fahrenheit to Celsius C = (F-32) * (5/9)
const FahrenheitToCelsius = temperature => temperature - 32 * 5/9;

//console.log(FahrenheitToCelsius(65));


// SHONTAI: Convert the python function below to a javascript function

// def pairs_with_given_sum(numbers, target):
//     total = 0
//     for i in range(len(numbers)-1):
//         for j in range(i+1, len(numbers)):
//             if numbers[i]+numbers[j] == target:
//                 total += 1
//     return total


const PairsWithGivenSum = (numbers, target) => {
  let total = 0;
  for (let i = 0; i < numbers.length - 1; i++){
    for (let j = i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target) {
        total += 1;
      }
    }
  }
  return total;
};

console.log(PairsWithGivenSum([1, 1, 1], 2 ))
console.log(PairsWithGivenSum([10, 12, 10, 15, -1], 125 ))
console.log(PairsWithGivenSum([1, 5, 7, -1, 5], 6 ))



// Consider printing some output so that you can see that the callback is running.
// setInterval is very similar to the setTimeout function described in Learn, taking the form.

// Using the setInterval function (described below), register a callback function to be called every second.

//TOGETHER:

// const callBackFunction = () => {
//   console.log('I made am finishing this activity');
//   return 
// };

// setInterval(callBackFunction, 5000)

// SOlUTION: Implement setTimeout function as described in Learn 
const timer = setInterval(() => {
  console.log("I made am finishing this activity!");
}, 1000);

setTimeout(( ) => {
  clearInterval(timer);
  console.log("Timer stopped!");
}, 5000);

// setInterval(callBackFunction, intervalInMs)
//   callBackFunction is a reference to the function to be run periodically
//   intervalInMs is how much time should pass between calls to callBackFunction (in millisecond units)
// Check out the MDN documentation for setInterval (and setTimeout) for additional details