const characters = [

    {
        name: "shehroze",
        height: "177",
        mass:  "70",
        eye_color: "brown",
        gender: "male"
    },
    {
        name: "shahraiz",
        height: "167",
        mass:  "75",
        eye_color: "carry",
        gender: "male",
    },
    {
        name: "shahiaman",
        height: "165",
        mass:  "60",
        eye_color: "brown",
        gender: "male",
    },
    {
        name: "ansha",
        height: "155",
        mass:  "55",
        eye_color: "black",
        gender: "female",
    },
    {
        name: "sonia",
        height: "157",
        mass:  "66",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "zain",
        height: "127",
        mass:  "40",
        eye_color: "blue",
        gender: "male",
    },
]

 //  1---Get an array of all names----(by map method)
 const names = characters.map(ch  => ch.name)
 //console.log(names);

 //  1-- Get an array of objects with just name and height property---
 const propertiesofCh  =  characters.map(ch => {
    return {
        name: ch.name,
        height:ch.height}
 })
 //console.log(propertiesofCh);

//  3--Get the total height of all characters----- (by array reduce method)
const totalHeight = characters.reduce((prevHeight,characters)  =>{
    return prevHeight + Number(characters.height);   //(conversion of string to number)
},0); 
//console.log(totalHeight);

// 4--Get characterd with mass grater than 55---(now we use filter to find more than one value)
const graterThanMass = characters.filter(character => character.mass > 55);
//console.log(graterThanMass);

// 5--Get all male Characters
const maleCh = characters.filter(character => character.gender ==="male");
  //console.log(maleCh);

// 6--sort by name ---------- 
const sortByName = characters.sort((character1,character2)  =>{
    if (character1.name > character2.name) {
        return -1;
      }
      if (character1.name < character2.name) {
        return 1;
      }
      return 0;
    
});
//console.log(sortByName);

// 7--sort by gender-----------
const sortByGender = characters.sort((character1,character2)  =>{
    if (character1.gender > character2.gender) {
        return -1;
      }
      if (character1.gender < character2.gender) {
        return 1;
      }
      return 0;
    
});
//console.log(sortByGender);

//  8--Does every  character have mass more than 55--------
const chMass = characters.every(character => character.mass >30)
//console.log(chMass);

//  9--Does every character have blue eyes?-----

const chEyes = characters.every(character => character.eye_color === "blue")
//console.log(chEyes);

//  10--is there at least one male character---------- (we use some to check at least)
const chMale = characters.some(character => character.gender === "male")
//console.log(chMale);
// same function can also be perform as--
//console.log(characters.some(character => character.gender === "male"))

//  11--is at least one character  taller than 200?----
console.log(characters.some(character => character.height  >1 00))





