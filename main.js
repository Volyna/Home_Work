const arr1 = [3, 5, 6, 3, 6, 7, -3, -6, -78, -9, 0, 0, 0];
const arr2 = [-5, -7, -9, 91, -687, 78, -93, 0, 0];
const arr3 = arr1.concat(arr2);
const arr4 = [];
arr3.forEach((item) => {
  if (item < 0) {
    arr4.push(item);
  }
});
arr3.forEach((item) => {
  if (item === 0) {
    arr4.push(item);
  }
});
arr3.forEach((item) => {
  if (item > 0) {
    arr4.push(item);
  }
});

for (let i = 0; i < arr4.length; i++) {
  console.log(`value => ${i} = ${arr4[i]}\n`);
}
//---------------------------- Task 2 ------------------------------
let sum = 0,
  markN;
let mark1 = window.prompt("Imput mark: ");
let mark2 = window.prompt("Imput mark: ");
let mark3 = window.prompt("Imput mark: ");
let mark4 = window.prompt("Imput mark: ");
let mark5 = window.prompt("Imput mark: ");
let mark6 = window.prompt("Imput mark: ");
let mark7 = window.prompt("Imput mark: ");
let mark8 = window.prompt("Imput mark: ");
let mark9 = window.prompt("Imput mark: ");
let mark10 = window.prompt("Imput mark: ");
const marks = [
  mark1,
  mark2,
  mark3,
  mark4,
  mark5,
  mark6,
  mark7,
  mark8,
  mark9,
  mark10,
];
let choice = window.parseInt(
  prompt(
    `Choice function:<br/> 1 Output of marks<br/> 2 Passing the exam<br/>3 Is there a scholarship<br/>`
  )
);

switch (choice) {
  case 1:
    for (let i = 0; i < marks.length; i++) {
      console.log(`mark => ${i + 1} = ${marks[i]}\n`);
    }
    break;
  case 2:
    let numMark = window.prompt(`Enter number mark: `);
    let newMark = window.prompt(`Enter new mark: `);
    let removed = marks.splice(numMark, 1, newMark);
    for (let i = 0; i < marks.length; i++) {
      console.log(`mark => ${i + 1} = ${marks[i]}\n`);
    }
    break;
  case 3:
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
      console.log(`mark => ${i + 1} = ${marks[i]}\n`);
    }
    markN = sum / 10;
    if (markN >= 10.7) {
      document.write("scholarship !!!!");
    } else {
      document.write("study better!");
    }
    break;
  default:
    document.write("Error input");
}
//------------------------------------TASK 3--------------------------------------------

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Game() {
  document.write(
    `Computer: ${getRndInteger(1, 6)},  ${getRndInteger(1, 6)}<br/>`
  );
  document.write(`User:  ${getRndInteger(1, 6)}, ${getRndInteger(1, 6)}`);
}
alert("Game", Game());
