//factory function  (camel)
function createCourse(title){
    return  {
    
        title:title,
        enroll(){
        console.log ("you are successfully enrolled");
    
        }
    }

}
//const course = createCourse("javascript");
//course.enroll()
//console.log(course)




//  Constructer function (pascal)
function Course(title){
this.title  = title,
this.enroll  = function(){
console.log("you are successfully enrolled");
}
}

const  course = new Course("javascript");
delete course.title;
course.checkEnrollement= function(){
    console.log("30 users are enrolled")
}
course.enroll()
console.log(course);


