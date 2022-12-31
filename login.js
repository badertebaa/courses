var Username=document.getElementById("Username");
    var error1=document.getElementById("error1");
    var emailF=document.getElementById("emailF");
    var error2=document.getElementById("error2");
    var password=document.getElementById("password"); 
    var error3=document.getElementById("error3");
    var Cpassword=document.getElementById("Cpassword"); 
    var error4=document.getElementById("error4");
   
    function validateU(){
    if(Username.value==""){
        error1.innerHTML="Username cannot be blank"; 
        Username.style.borderColor="red";
        return false;
    }
    if(!Username.value.match(/^[A-Za-z]{3,25}$/)){
        error1.innerHTML="Username must be between 3 and 25 characters"; 
        Username.style.borderColor="red";
        return false;
    }
    
    error1.innerHTML="";
    Username.style.borderColor="green";
    return true;
   }  
   function validateE(){
    if(emailF.value==""){
        error2.innerHTML="Email cannot be blank"; 
        emailF.style.borderColor="red";
        return false;
    }
    if(!emailF.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error2.innerHTML="Email is not valid"; 
        emailF.style.borderColor="red";
        return false;
    }
     
    error2.innerHTML="";
    emailF.style.borderColor="green";
    return true;
   } 

   function validateP(){
    if(password.value==""){
        error3.innerHTML="Password can not be blank"; 
        password.style.borderColor="red";
        return false;
    }
    if(!password.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        error3.innerHTML="Passwoed must has at least 8 characters that include at least 1 lowercase,\n 1 uppercase characters,1 number,and 1 special character in (!@#$%^&*)  "; 
        password.style.borderColor="red";
        return false;
    }
     
    error3.innerHTML="";
    password.style.borderColor="green";
    return true;
   }  
     
   function validateCP(){
    if(Cpassword.value==""){
        error4.innerHTML="Password can not be blank"; 
        Cpassword.style.borderColor="red";
        return false;
    }
    if(Cpassword.value !=password.value){
        error4.innerHTML="The password does not match"; 
        Cpassword.style.borderColor="red";
        return false;
    }
     
    error4.innerHTML="";
    Cpassword.style.borderColor="green";
    return true;
   }  
    function sub(){
      if(validateU()==true&&validateE()==true&&validateP()==true&&validateCP()==true){
        document.querySelector("form").setAttribute("action","home.html");
  
}
      
    }