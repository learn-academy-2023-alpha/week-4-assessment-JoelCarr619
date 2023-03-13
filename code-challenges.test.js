// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// Psuedo Code:
//  Start a function that takes in an array, remove the first item form the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
const expect1 = ["blue", "green", "yellow", "pink"];
const expect2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];

describe("shuffleArray", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(expect1));
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(expect2));
  });
});

// shuffleArray › takes in an array, removes the first item from the array and shuffles the remaining content
// ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.
// Psuedo code:
// declaring a function with one parameter(array of strings "") that will return the array shuffle minus the first index [index 0]
const shuffleArray = (array) => {
  // preforming a removal of the first index [index 0]
  let newArray = array.slice(1);
  // console.log(newArray);= ---> (show me something)
  // using the `for loop` we will look through each index.
  for (
    let currentIndex = newArray.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    // we are getting a random index that is not higher than the current index.
    // As the function runs, the system is grabbing the random index to reassign as the current index.
    // once it hit the last index it will return the shuffle array.
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const tempValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = tempValue;
  }
  return newArray;
};

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// Psuedo code:

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 };
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 };
// Expected output: -31

describe("takeVotesTally" = () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {});
  expect(takeVoteTally(votes1)).toBe(11);
  expect(takeVoteTally(votes2)).toBe(-31);
});

// b) Create the function that makes the test pass.

const takeVotesTally = (votes) => {
  let { upVotes = 0, downVotes = 0 } = votes;
  return upVotes - downVotes;
};

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Psuedo code:

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"];
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("joinedArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    expect(joinedArrays(dataArray1, dataArray2)).toEqual([
      "string",
      "null",
      "Boolean",
      "string",
      "undefined",
    ]);
  });
});

// b) Create the function that makes the test pass.

const joinedArrays = (...arrays) => {
  return [...new Set([].concat(...arrays))];
};
