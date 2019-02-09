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
 if(first == ""){
     console.log("1111111111111111111111111");
     document.getElementById("usernameId").innerHTML ="Please Enter the Username Details***";
     return false;
 }
 if(last ==""){
    console.log("2222222222222222222222");
    document.getElementById("lastnameId").innerHTML ="Please Enter the Username Details***";
    return false;
}
if(email ==""){
    console.log("3333333333333333333");
    document.getElementById("emailId").innerHTML ="Please Enter the Username Details***";
    return false;
}
if(contact ==""){
    console.log("44444444444444444");
    document.getElementById("contactId").innerHTML ="Please Enter the Username Details***";
    return false;
}
if(user ==""){
    console.log("5555555555555");
    document.getElementById("UsernameId").innerHTML ="Please Enter the Username Details***";
    return false;
}
if(pwd ==""){
    console.log("666666666666666666666");
    document.getElementById("password").innerHTML ="Please Enter the password***";
    return false;
}
}