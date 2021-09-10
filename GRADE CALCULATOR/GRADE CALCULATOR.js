var grade1 = 10;
var grade2 = 8;
var grade3 = 10;

var average = (grade1 + grade2 + grade3) / 3;

var gradeletter = "";

if (average >= 10) {
  gradeletter = "A+";
} else if (average >= 9) {
  gradeletter = "A";
} else {
  gradeletter = "Keep studying, I trust in you!";
}

console.log(average);
console.log(gradeletter);

switch (gradeletter) {
  case "A+":
    console.log("You're a genius!");
    break;
  case "A":
    console.log("You're almost a genius!");
    break;
  case "Keep studying, I trust in you!":
    console.log("You can become a genius, trust me!");

  default:
    console.log("Let's see...");
    break;
}
