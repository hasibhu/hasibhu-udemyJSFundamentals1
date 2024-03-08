// 5 falsy values: 0, "", undefined, null, and NaN

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));



// const money = 0;
const money = 1000;

if (money) {
    console.log(`don not spend all.`);
}
else {
    console.log(`Get a job`);
}


/** 
 CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.



👋 OPTIONAL: You can watch my solution in video format in the next lecture

This topic is covered in

**/

/**
 * solution
 */

let dolphinsScores = 96 + 108 + 89;
let scoreDolphins = dolphinsScores / 3;

let koalasScore = 88 + 91 + 110;

let scoreKoalas = koalasScore / 3;


if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}


