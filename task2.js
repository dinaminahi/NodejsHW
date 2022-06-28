import csv from "csvtojson";
import fs from "fs";

const csvFilePath = "./csv/nodejs-hw1-ex1.csv";
const txtFilePath = "./txt/test.txt";

const jsonArray = await csv().fromFile(csvFilePath);

const file = fs.createWriteStream(txtFilePath);

jsonArray.forEach((row) => {
  const line = JSON.stringify(row) + "\n";
  try {
    file.write(line);
  } catch (err) {
    console.log(err);
  }
});

file.end();
