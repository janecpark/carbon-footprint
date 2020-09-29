/** Helpder function to get the sum of the arguments passed in */

function getTotal(...args) {
  let sum = 0;
  for (let el in args) {
    sum += +args[el];
  }
  return sum.toFixed(2);
}

export default getTotal;
