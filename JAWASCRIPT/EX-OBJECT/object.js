// 1-- area of squre


//let square = {
  //  side :10,
    //get area (){
      // return this.side*this.side  //(can also be write as return this.side**2)

    //}
//}

//square.side  =10
//console.log(square.area);




//  2--- join function------

//function stringConcat(separator,...strings){
  //  let returnVal = ""
    //strings.forEach((string,i)  => {
      //  if ( i == strings.length -1){
        //    returnVal += string;
        //}
       // else{
     //returnVal += string +separator ;  // =+ combine the values
       // }

    //} )
   // return returnVal;
//}



//console.log(stringConcat("+","this","is","invalid"))








// exersise #3
//arr = [1,2,3,4,5,6,7,8]
//let first = arr[0];
//let second = arr[1];
//let third = arr[2];
//let other = arr.slice(3);

//---------now by destructuring method----
 //let [first,second,third,...other]  =[1,2,3,4,5,6,7,8] 
//console.log(first)
//console.log(second)
//console.log(third)
//console.log(other)
















// 4--ex# 4 ( how many houses formed)

function matchHouses(step){
    if ( step === 0 ){
        return 0;
    }else{
        return (step *6)- (step-1)
    }
}

console.log(matchHouses(0));
console.log(matchHouses(4));
console.log(matchHouses(87));

function matchHouses(house){
    if (house <=0){
        return 0;
    }else{
        return house*6  - house +1  //(because one is common in each)
        
    }
}
