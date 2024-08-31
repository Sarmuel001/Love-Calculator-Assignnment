//Question1

function lifeInWeeks(age) {
 let t_age= 90 - age ;
 let d_left= t_age * 365; //days left
 let w_left = t_age * 52; // weeks left
let m_left= t_age * 12; // months left

console.log(`You have ${d_left} days, ${w_left} weeks, and ${m_left} months left`
)
}

lifeInWeeks(28)

//Question 2

function loveCalculator(firstinput, secondinput) {
  const matchPercentage = Math.floor(Math.random() * 101);
  
  console.log(`${firstinput} and ${secondinput} are ${matchPercentage}% match!!`)
  
}

loveCalculator("John", "Mary");
