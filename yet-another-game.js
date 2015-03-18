var user = prompt("Do you want to FIGHT, RUN or PAY? ").toLowerCase();

switch(user){
    case 'fight': 
        var strong = prompt("Can you take it? YES or NO?").toLowerCase();
        var smart = prompt("Are you smart?YES or NO? ").toLowerCase();
        if(strong == 'yes' || smart == 'yes')
        {
            console.log("Fight on!");
            break;
        }
        else
        {
            console.log("You're too weak!");
            break;
        }
    case 'run' : 
        var run = prompt("Can you even run? YES or NO?").toLowerCase();
        var speed = prompt("Are you fast? YES or NO?").toLowerCase();
        if(run == 'yes' && speed == 'yes')
        {
            console.log("Run Away!");
            break;
        }
        else
        {
            console.log("U will die for sure!");
            break;
        }
    case 'pay':
        console.log("Take out the money and leave!");
        break;
    default:
    console.log("Can't make out the choices!");
}
    
