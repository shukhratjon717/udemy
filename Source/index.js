/**First task */
let tweet = prompt("Insert your tweet!");
let tweetCount = tweet.length;
alert(
  "You have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    "characters remaining"
);

// slicing when it reaches to 140 characters,

var tweet2 = prompt("Insert your tweet!");
let step1 = tweet2.slice(0, 141);
alert(step1);

// Changing first letter of the given name into capial letter and the other into lowercase letters.

let name = prompt("What is your name?");
let step2 = name.slice(0, 1).toUpperCase();
let step3 = name.slice(1, name).toLowerCase();
let step4 = alert("Hello " + step2 + step3);

// Identifying animals age in human perionds.

let dogAge = prompt("What is your dog's age?");
let humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in humanAge");

/** First function */

function buyWater(money) {
  let price = 1.5;
  let action1 = Math.floor(money / price);

  console.log("You can buy " + action1 + " bottles of water");
}
buyWater(4);


// Random Grade maker

let score = Math.random() * 100;
score = Math.floor(score) + 1  // 1 - 100

if (score > 95 ){
    alert("Your score is " + score + "% and You got A+ from this class")
}else if( score > 85 && score < 95) {
    alert("your score is " + score + "% and you got A from this class")
}else if (score > 70 && score < 85){
    alert("Your score is " + score + "% and you got B+ from this class")    
    
} else {
        alert("Your score is " + score + "%")
}

// BMI calculator
function bmiCalculator (weight, height) {
  var bmi = weight / (height * 2);
  
  if (bmi <= 18.5) {
      console.log("Your BMI" + bmi + "so you are underweight");
  }
  else if(bmi >18.5 && bmi <= 24.9) {
      console.log("Your BMI is" + bmi + "you are a notmal weight")     
  }
  else {
      console.log("Your BMI is " + bmi + "You are overweight")
   }
      
  return interpretation;
} 


