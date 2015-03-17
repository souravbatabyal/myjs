var userChoice = prompt("Do you choose rock, paper or scissors?"); //Prompt user to enter either "rock" or "paper" or "scissors"

var computerChoice = Math.random();//Random number generator between 0 and 1 



/* check conditions to decide which choice the computer chooses....its all 
completely random! */

if(computerChoice >=0 && computerChoice <=0.33)
{
    computerChoice = "rock";
}
else if(computerChoice >= 0.34 && computerChoice <= 0.66)
{
    computerChoice = "paper";
}
else
{
    computerChoice = "scissors";
}
console.log(computerChoice); //Registers output on console!
