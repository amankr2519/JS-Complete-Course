// if else

let experience = 1;

if (experience <= 1) {
  console.log("Fresher");
} else if (experience >= 2) {
  console.log("Senior Dev");
} else {
  console.log("Student");
}

let age = 29;
let drivingLicense = true;

if (age > 18 && drivingLicense) {
  console.log("you can drive");
} else {
  console.log("You can't drive");
}

//

let adhar = false;
let pan = true;

if (adhar) {
  console.log("you can open account in our bank - using adhar");
} else if (pan) {
  console.log("you can open account in our bank - using pan card");
} else {
  console.log(
    "you can't open account in our bank because you haven't a adhar and pan id proof"
  );
}

// Switch

let day = 19;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6 :
    console.log("Saturday");
  case 7 :
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input")
    break;
}
