/*
## Javascript Challenge - Find the grade💪🏾

##### Your Task 😃:

1. Create a variable `grade` and give it a value between 1 and 100
2. Create an if statement that does the following

- if grade is between `100` and `90` the if statement shall console log `You got an A grade`
- if grade is between `90` and `75` the if statement shall console log `You got an B grade`
- if grade is between `75` and `60` the if statement shall console log `You got an C grade`
- if grade is less than `60` the if statement shall console log `You got an FAILED`

Good Luck 😀
*/

let grade = 90;

if (grade <= 100 && grade >90){
    console.log(`You got an A grade`);
}

else if (grade <= 90 && grade > 75){
    console.log(`You got an B grade`)
}
else if (grade <= 75 && grade > 60){
    console.log(`You got an B grade`)
}
else if (grade<60){
    console.log(`you failed`)
}
