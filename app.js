// Frontend Algorithms Task(Frontend Task 4)

//Q1: Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

const convertFahrToCelsius = (fahr) => {
  if (fahr === null || fahr === undefined) {
    console.log(`enter a value for farenheit`);
  }
  if (fahr instanceof Array) {
    console.log(
      `${JSON.stringify(fahr)} is not a valid number but a/an array.`
    );
  } else if (fahr instanceof Object) {
    console.log(
      `${JSON.stringify(fahr)} is not a valid number but a/an object.`
    );
  } else if (
    (typeof fahr === 'number' || typeof fahr === 'string') &&
    /^[0-9]+$/.test(fahr)
  ) {
let myFahr = fahr * (9 / 5) + 32;
    console.log(myFahr.toFixed(4));
  } else {
    console.log(typeof fahr);
    console.log(`${JSON.stringify(fahr)} is not a valid number but a string.`);
  }
};

convertFahrToCelsius([1, 2, 3]);
