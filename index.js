function validation(){
    //var a,b;
    //var c = a+b;
    //alert(c);
 var first = document.getElementById("firstname").value;
 var last = document.getElementById("lastname").value;
 var email = document.getElementById("email").value;
 var contact = document.getElementById("contact").value;
 var user = document.getElementById("username").value;
 var pwd = document.getElementById("pwd").value;

 console.log("Before if------------111111111");
 // checks if firstname is empty
 if(first == ""||(!isNaN(first)){
     document.getElementById("firstnameId").innerHTML ="Please Enter the firstname Details in Correct Format***";
     return false;
 }
  // Checks whether the length is between 3 or 15
if ((first.length <= 2)||(first.length>=15)){
     document.getElementById("firstnameId").innerHTML ="Entered First name length should be between 2 or 15***";
     return false;
 }
 // checks if firstname is Not a number
 if(last ==""){
    document.getElementById("lastnameId").innerHTML ="Please Enter the Lastname Details***";
    return false;
}
if((email =="")||(email.indexOf("@")<=0)){
    document.getElementById("emailId").innerHTML ="Please Enter the email***";
    return false;
}
if(email.CharAt(email.length-4)!=".")&&(email.CharAt(email.length-3)!="."){
    document.getElementById("emailId").innerHTML ="Enter Email Id as abc@gmail.com***";
    return false;
}
// checks if contact number entered is number
if((contact =="")||isNaN(contact)){
    document.getElementById("contactId").innerHTML ="Please Enter the Contact details***";
    return false;
}
// Checks for the contact Length
if (contact.length!=10){
    document.getElementById("contactId").innerHTML="Enter the Correct Contact details";
    return false;
}
if(user ==""){
    document.getElementById("UsernameId").innerHTML ="Please Enter the Username Details***";
    return false;
}
if(pwd ==""){
    document.getElementById("password").innerHTML ="Please Enter the password***";
    return false;
}
}