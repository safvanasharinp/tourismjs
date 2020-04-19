function display(){
 var forgot=document.getElementById("forgot");
 forgot.innerHtml="re sign up please";
}
let email=document.getElementById("email");
let error=document.getElementById("error");
let password=document.getElementById("password");
let phone=document.getElementById("phone");
let regexpemail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
let regexpphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regexppass=/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})$/;
let strength=document.getElementById("strength");
let show=document.getElementById("show");
let msg=document.getElementById("msg");

function validate(){
   
if(regexpemail.test(email.value))
{
    
    
}
else{
    alert("email invalid");
    return false;
    
}
if(regexppass.test(password.value))
{
   

    
    
    
}
else{
    alert("password invalid");
    return false;
}

if(regexpphone.test(phone.value))
{
    return true;
    
}
else{
    alert("phone invalid");
   return false;
}
}
function logvalidate()
{
    if((regexpemail.test(email.value))&&(regexppass.test(password.value)))
    {
        
        return true;
    }
    else
    {
        alert("either one of fields or both are invalid");
        return false;
    }
}
function strengthvalidate(){

   if(password.value.length<=8)
     {
         msg.style.color="red";
         //alert("weak password")
        msg.innerHTML="weak  password";
         return false;
     }
     else if((password.value.length<10)&&(password.value.length>8)){
         msg.style.color="orange";
        // alert("medium");
        msg.innerHTML="medium password";
         return false;


     }
     else{
         msg.style.color="green";
        // alert("strong");
         msg.innerHTML="strong password";
         return false;
     
}
}
