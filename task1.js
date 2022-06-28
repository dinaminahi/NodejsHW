import readline from "readline";

function reverseStr(str) {
  return [...str].reverse().join("");
}

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  rd.question("", function (str) {
    if (str == "exit") return rd.close();
    const reversedStr = reverseStr(str);
    console.log(reversedStr);
    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();
