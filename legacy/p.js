//Years to months calculator
function ageInMonths(ageInYears) {
  const calcAge = ageInYears * 12;
  console.log(`You are ${calcAge} months old.`);
}
//example
ageInMonths(24);
ageInMonths(3);

//even or odd checker
function checkNum(num) {
  const evalnum = num % 2;

  if (evalnum === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
//example
checkNum(7);
checkNum(4);

//Password strength checker
function checkPassStrength(password) {
  if (password.length < 8) {
    console.log("Your password is weak");
  } else {
    console.log("Your password is strong");
  }
}
//example
checkPassStrength("password");
checkPassStrength("amigonapelucatedindigo");

//Number comparism
function comparenums(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
  } else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
  } else {
    console.log(`${num1} and ${num2} are equal`);
  }
}
//example
comparenums(6, 2);
comparenums(2, 5);
comparenums(4, 4);
comparenums(4, "Scybud");
comparenums("TryTasty", 4);

//Grade calculator
function calcgrade(score) {
  if (isNaN(score) || score < 0 || score > 100) {
    console.log("Bot error🤖: Please enter a number between 1 and 100");
  } else if (score >= 90 && score <= 100) {
    console.log("Congrats, You got an A");
  } else if (score >= 80 && score <= 89) {
    console.log("Congrats, you got a B");
  } else if (score >= 70 && score <= 79) {
    console.log("Congrats, you got a C");
  } else if (score >= 60 && score <= 69) {
    console.log("You got a D. You can do better");
  } else {
    console.log("Unfortunately, you got an F. Better luck next time");
  }
}
//example
calcgrade(96);
calcgrade(42);
calcgrade(81);
calcgrade(74);
calcgrade(62);
calcgrade("gjx");

//loops
function multNum(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
//example
multNum(4);
multNum(2);
multNum(3);
