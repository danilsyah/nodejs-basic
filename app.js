// const fs = require("fs");
// fs.copyFileSync("text.txt", "hasil.txt");
// console.log("source.txt was copied to destination.txt");

const hero = require("superheroes");

for (let i = 0; i < 10; i++) {
  console.log(hero.random());
}
