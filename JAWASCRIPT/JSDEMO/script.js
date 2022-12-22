let welcomeBtn=document.querySelector('button');
welcomeBtn.addEventListener('click' , inputMsg);

function inputMsg(){
    let name=prompt('Enter Name of Student');
    welcomeBtn.textContent='roll No.1'+name;
}