const course = {
    title: "javascript",
    enroll(){
        console.log("you are successfully enrolled");
    }
}

//for loop

 //for(let key in course ){
   //  console.log(key,course[key]);
//}

//forin loop

const course_1={}; 
for(let key of Object.keys(course)){
    course_1[key] = course[key]

}
