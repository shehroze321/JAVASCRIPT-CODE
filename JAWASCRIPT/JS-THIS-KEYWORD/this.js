//let counter = createCounter();
//let counter1 = createCounter();

//function createCounter (){
  //  return {
    //    count : 0,
      //  increment: function (){
        //    this.count++;
        //}
   // }
//}

//counter1.increment();
//counter1.increment();
//counter1.increment();
//counter1.increment();
//counter1.increment();

//console.log(counter1);




//var count = 0;
//function incrementCounter(){
  //  this.count++;
    //console.log(this);
//}
//incrementCounter();
//incrementCounter();

//incrementCounter();
//incrementCounter();

console.log(this);  //(because in global context our object is window)










function Car(name){
    this.name  = name;
    this.start  = function(){
        console.log(this.name  + "started");
        console.log(this);
    }
}

let Swift =  Car("Swift");  //(now keyword make an new object and declare all propertied of parent item in it)
//Swift.start();
console.log(this.name);  //(this reffer to an wondow object)