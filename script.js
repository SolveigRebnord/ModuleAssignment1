console.log("Heihei")


// Oppg 1
var myNumber = 8;
var myMeaning = true;
var myString = "Solveig er kul";


//--------------------------------------------------------------------------------------------------------------------------------
// Oppg 2 

var firstName = "Solveig";
var lastName = "Rebnord";

var fullName = (firstName + " " + lastName);

console.log (fullName); //Gir svaret Solveig Rebnord i konsoll


//--------------------------------------------------------------------------------------------------------------------------------
// Oppg 3

console.log(typeof ("frog")); // Gir svaret string i konsoll

var typeOfAnimal = (typeof("frog"));

console.log("The type of frog is " + typeOfAnimal); //Gir svaret The type of frog is string


//--------------------------------------------------------------------------------------------------------------------------------
//Oppg 4

var orderHasShipped = false;

if (orderHasShipped == true) {
    console.log("The Order Shipped");
}

else {
    console.log("The order did not ship");
}

// Endrer svar i konsoll om false eller true endres i var orderHasShipped


//--------------------------------------------------------------------------------------------------------------------------------
//Oppg 5


for (var i = 7; i <= 13; i++) {
    console.log ("The number is now " + i);
}
// Konsoll viser en telling fra tallet 7-13 