const arr = ['99999999991d99', '555', '799', '8'];
// fffffffffffff
const rand = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));
// yyyuuuuuuuuuuuu
const getRandElemFromArr = arr[rand(0, 3)];
// yyyyyyyyyy
console.log(getRandElemFromArr);

//

