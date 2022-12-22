let bread1 = prompt("which bread would you like to have:-");
let vaggies1 = prompt("what are your favourite vaggies");
let sauce1 = prompt("which sauce would you like to have:-");

function makeSandwich(bread, vaggies, sauce){
let sandwich = bread + " bread " + vaggies + " " + sauce + " sandwich is ready ";
return sandwich;
}
let vegSandwich = makeSandwich(bread1, vaggies1, sauce1);
console.log(vegSandwich);


