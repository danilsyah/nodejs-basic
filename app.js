// const fs = require("fs");
// fs.copyFileSync("text.txt", "hasil.txt");
// console.log("source.txt was copied to destination.txt");

// const hero = require("superheroes");

// for (let i = 0; i < 10; i++) {
//   console.log(hero.random());
// }

// import modul buatan sendiri
const modulOperator = require("./module-operator");

const tambah = modulOperator.tambah(5, 3);
const kurang = modulOperator.kurang(5, 3);
const kali = modulOperator.kali(5, 3);
const title = modulOperator.title;

console.log(title);
console.log(tambah);
console.log(kurang);
console.log(kali);
