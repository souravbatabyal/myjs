//Person constructor takes the name and age 
function Person(name, age){
    this.name = name;
    this.age = age;
}
var family = new Array(); //Array to store the objects of type Person
family[0] = new Person("alice" , 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle" , 8);
family[3] = new Person("timmy", 6);
// Printing out the "name" of the Person!
for( var i = 0 ; i < 4 ; i++ )
{
    console.log(family[i].name);
}

