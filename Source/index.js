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
