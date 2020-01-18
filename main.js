const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');
var currentdate = new Date(); 
var datetime = " Logged on: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''||emailInput.value===''){
        msg.classList.add('error')
        msg.innerHTML='Please fill all fields';
        setTimeout(()=>msg.remove(),3000)}
        else{
         const li=document.createElement('li');
         li.appendChild(document.createTextNode(
             `${nameInput.value}:${emailInput.value}  ${datetime}`
         ));
         userList.appendChild(li);
         //clear
         nameInput.value='';
         emailInput.value='';
     }   
    
}

