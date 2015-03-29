//First Entry in the address book
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
//Second Entry
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
//A single array of objects to store all contacts
var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
//Prints out the names of the people on the entire contact list
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

//To search for a contact using the lastname
function search(lastName) {
    for( var i = 0; i < contacts.length; i++ ) {
        if( contacts[i].lastName == lastName ) {
            printPerson(contacts[i]);
        }
        else {
            console.log("Invalid Search Query");
        }
    }
};
// To add new items into the contact list
function add (firstName, lastName, phoneNumber, email) {
    contacts[contacts.length]  = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
};
//Adding my details to the contact list
add("Sourav", "Batabyal",  "(91) 89027-64405" , "souravbatabyal@hotmail.com");
list();
