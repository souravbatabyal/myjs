var slaying = true; // checks if we are still slaying!
var youHit = Math.floor(Math.random() * 2); //checks if we hit the dragon!
var damageThisRound = Math.floor(Math.random()*5 + 1); //checks how much damage has been done to the dragon
var totalDamage = 0; //keeps track of total damage
while(slaying){
    if(youHit == 1)
    {
        console.log("You hit the dragon!");
        totalDamange += damageThisRound;
        if(totalDamage >= 4)
        {
            console.log("You slew the dragon!");
            slaying = false;
        }
        else
        {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else
    {
        console.log("The dragon hit you!");
        slaying = false;
    }
    
}
