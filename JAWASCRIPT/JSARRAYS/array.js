const array = new Array(1,2,3,4,5,6,7,8,9);
// Basicc operations-------------


//  1--Push---(add value at last)


array.push(10)

//  2--unshift----(add value at start)
array.unshift(0)/

//  3--Pop--------(remove value from last)
array.pop()

//  4--Shift------(remove value from start)
array.shift()

//  5---using indexof method---------(show from start)
const names = ["ali","mazz","asghar","babar","sana","majid","sana"];
names.indexOf("sana");

//  6--- using lastindexof method-----(show from last)
names.lastIndexOf("asghar");

//  7--using includes method ---for premptive data type----(exist or not exist means T/F) 
names.includes("majid")

//  8---using find method ----  used for refference data type

let channels = [
    { name :"apna college ",
    subscriber:10000
    }, 
    {name :"apni kaksha",
    subscriber: 20000

    },
    {name : "aman daathearwal",
    subscriber:30000

    }
];

    //-------arrow function--------

    //------ inline  callback function---------    
//console.log(channels.find(function(element){    -- 
   // return element.name === "apni kaksha"
//}))
    

 //  9--- using Concat method------ (to combine or break arrays)
       let names1 = [ "sana","ali","mazz"]
       let names2 = [ "adeeb","zain","hassan"]

 //  10-- using slice method--------(to remove values befor and after selected number)

       //let names3 =  names1.concat(names2)

 // 11--- using spread operator ----(used  by ... to combine arrays)
       let names3 = [...names1,...names2]

    



//------Now we use loop-------


 // 12--For  Loop in Arrays---------

 
 for (let i = 0; i<names.length;i++){
    //console.log(names[i])
 }

 // 13--For of Loop in Arrays---------
 for(let name of names){
   // console.log(name)
 }

//  14--ForEach Method----(for each not an loop in JS rather it is an method, we pass an function in for each loop)
names.forEach(function(name,index){
    //console.log(name,index);
})
//  15--- using join method----(to join single characters)
  let student = ["s","h","i","v","a"]
  //console.log(student.join("-"))

//  16--using split method---------(reverse of jion)  
 student = student.join("-");
 //console.log(student.split("-"))

//  17-- using filiter method----(similiar to find but filterd the strings , objects . we use backfunction or arrow function in filter method)

let cities = [
{name : "lahore",population:8000000},
{name : "karachi",population:9000000},
{name : "faisalabad",population:4000000},
{name : "nankana",population:3000000},
{name : "Gujrat",population:6000000},
{name : "isalamabad",population:5000000},



];
//console.log(cities.filter(city => city.population > 5000000))

//  18--using Map Method------
console.log(cities.map(city => city.population*3))
