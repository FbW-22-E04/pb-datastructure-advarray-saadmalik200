console.log(`--------------------Q1------------------------`);
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

// REDUCE METHOD

function totalOrders(arr) {
  //   console.log(arr);
  const newArrayReduce = arr.reduce((acc, item) => {
    acc += item.amount;
    return acc;
  }, 0);
  console.log(newArrayReduce);
}

totalOrders(orders);

console.log(`--------------------Q2------------------------`);

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

function increment(arr) {
  const newArrayMap = arr.map((item) => (item += 1));
  console.log(newArrayMap);
}

increment(arrayOfNumbers);

console.log(`--------------------Q3------------------------`);

function filterEvens(arr) {
  const newArrayFilter = arr.filter((item) => {
    if (item % 2 == 0) {
      return item;
    }
  });
  console.log(newArrayFilter);
}

filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]

console.log(`------------Q4 Filter & Map Method----------`);

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

// function filterItems(arr, word) {
//   let result = "";
//   const q4ArrayFilter = arr
//     .filter((item) => item.includes(word))
//     .map((item) => item[0].toUpperCase() + item.slice(1));
//   return q4ArrayFilter;
// }

console.log(`------------Q4 Reduce Method----------`);

function filterItems(arr, word) {
  let result = "";
  const q4ArrayReduce = arr.reduce((acc, item) => {
    if (item.includes(word)) {
      result = item[0].toUpperCase() + item.slice(1);
      acc.push(result);
    }
    return acc;
  }, []);

  return q4ArrayReduce;
}

console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda",

console.log(`--------------------Q5------------------------`);

function sum(arr) {
  const q5NewReduce = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(q5NewReduce);
}

sum([1, 2, 3, 4, 5]); //returns 15
sum([6, 7, 7]); //returns 20
