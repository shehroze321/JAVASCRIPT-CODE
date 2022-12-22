//  1------The scope is by default global
//var name = "Shari";
//unction sayName(){
   // var marks = 10;
    //console.log(name);
//}
//sayName()
//console.log(marks);






var x = 0;

//  2----Global Scoope-----------

//function first(){
// local scope  #1
//var x = 1;
//console.log(x);
//function childOfFirst(){
  //  var x = 2;
    //console.log(x);
    // local scope  #2

//}
//childOfFirst()
//}
//first()
// global scope
//function  second(){
  //  console.log(x);
    // local scope  #3

//}
//second()

















//  3---- Block scope ------------
 
//var x = 10;
//{
  //  var x = 1;
    //console.log(x);
//}

//console.log(x);










//if (true) {
    // this 'if' conditional block does not create a new scope
  //  var foo = 'bar';
//}
//console.log(foo);





// -- Lexical Scope---(concept of inhertiance means proper of parent class inherit to child class)

function Dada(){
    var name = "Akbar Ali";
    //likes is not not accesssible here---\

    function Papa(){
        console.log(name);
        // namae is not accessible here 
    //likes is not not accesssible here---\
        function Beta(){
            // inner most level of the scope chain
            // name is also accessible here
            var likes = "coding";
        }
        console.log(likes);n
        Beta()
    }
    Papa()
}
Dada()









