let num1, num2, num3, result, action;
num1 = parseInt(prompt("Enter first number: "));
num2 = parseInt(prompt("Enter second number: "));

if (num2 < num1) {
  num3 = num2;
  num2 = num1;
  num1 = num3;
}

action = parseInt(
  prompt(
    "1 = 'even numbers' \n2 = 'not even numbers'\n3 = 'numbers are multiples of 7' "
  )
);

switch (action) {
  case 1:
    for (let i = num1; i <= num2; i++) {
      if (i % 2 == 0) {
        document.write(`this number ${i} even <br/>`);
        console.log(`this number ${i} even <br/>`);
      }
    }
    break;
  case 2:
    for (let i = num1; i <= num2; i++) {
      if (i % 2 == 1) {
        document.write("this number ", i, " not even");
      }
    }
    break;
  case 3:
    for (let i = num1; i <= num2; i++) {
      if (i % 7 == 0) {
        document.write("this number ", i, " are multiples of 7");
      }
    }
    break;
  default:
    document.write("Error");
}
