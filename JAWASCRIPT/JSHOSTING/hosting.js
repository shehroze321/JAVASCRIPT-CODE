// JS Hosting (our memory is allocated before code execuation this is called code execuation  ) (if a variable is empty then it is not defined , if it declare but not have vlaue then it is undefined , if it declare and also have value then it is defined)  


//console.log(i);

//var sayHello = function (){
  //  console.log("hello");
//}
//sayHello();

// var i = 10;








//------------(now we discuss how scope work in let and const variable)

// ---Varibale shadowing----
//(if we make a variable and also make another variabe with same name in another scope )

//let foo = " bar";
//var bar = "foo";


//function sayHello (){
  //  let foo = "baz";
//var bar = "foobar";

  //  console.log(foo);
    //console.log(bar);

//}
//sayHello();
//console.log(foo);
//console.log(bar);









// ---Varibale illegal shadowing----



//let foo = " bar";
//var bar = "foo";

//
//if(true){
  //  let foo = "baz";
//var bar = "foobar";

  //  console.log(foo);
    //console.log(bar);

//}

//console.log(foo);
//console.log(bar);




// const keyword ------(in const keyword value initilization is compulsory otherwise it show error  but in let and var keyword value initilazation is not compulsory)


let foo 
var bar 
const baz = 40;