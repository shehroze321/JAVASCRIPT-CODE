//not efficient
let lecture= 10;
let section= 3;
let title = "JAVASCRIPT";

const course  ={
    lecture: 10,
    section:3,
    title:"JAVASCRIPT",
    notes:{
        introduction: "welcome to javascript course"
    },
    enroll(){
    console.log ("you are successfully enrolled");

    }
}
course.enroll()
console.log(course)
course.price=999