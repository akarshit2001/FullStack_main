

function validate(){

    var name= document.getElementById("name");

var email= document.getElementById('useremail')
var Password= document.getElementById('pass')
    console.log(Password.value)
var confpass= document.getElementById('confpass')

    console.log(name.value)
   
if(name.value.trim()===""){


document.getElementById("name-fails").style.visibility="visible";
    document.getElementById("uname").style.visibility="visible";
document.getElementById("uname").innerHTML="Username not empty";
    document.getElementById("uname").style.fontWeight="bold";
    document.getElementById("uname").style.fontSize="20px"
name.style.border="2px solid red";
return false;
}
else {


 if(name.value.trim().match(/^[a-z0-9]+$/g)){

     document.getElementById("name-check").style.visibility="visible";
     name.style.border="2px solid green";
}
else {
     document.getElementById("uname").style.visibility="visible";
     document.getElementById("name-fails").style.visibility="visible";
     document.getElementById("uname").innerHTML="Username not correct";
     name.style.border="2px solid red";
     return false;


}
}


    if (email.value.trim()==="") {
        document.getElementById("uemail").innerHTML = "It can't be empty";
        email.style.border = "3px solid red";
        document.getElementById("email-fails").style.visibility = "visible";
        return false;
    }
    else {
        if (email.value.trim().match(/^([A-Za-z0-9\.-_]+)@([a-z]+)\.([a-z]{2,3})\.([a-z]{2,5})$/)|| email.value.trim().match(/^([A-Za-z0-9\.-_]+)@([a-z]+)\.([a-z]{2,3})$/)) {
            email.style.border = "3px solid green";


            document.getElementById("email-check").style.visibility = "visible";


        } else {
            email.style.border = "3px solid red";
            document.getElementById("uemail").innerHTML = "Format is invalid";
            document.getElementById("email-fails").style.visibility = "visible";

            return false;
        }


    }
console.log(Password.value)


if(Password.value.trim()===""){
    document.getElementById("uerror").innerHTML = "It can't be empty";
    Password.style.border = "3px solid red";
    document.getElementById("pass-fails").style.visibility = "visible";
    return false;
}

else{
    if(Password.value.trim().length<=4){
        document.getElementById("uerror").style.visibility="visible";
        document.getElementById("uerror").innerHTML = "Password's length must be greater than 4";
        Password.style.border = "3px solid red";
        document.getElementById("pass-fails").style.visibility = "visible";
        return false;
    }
    else {
        Password.style.border = "3px solid green";


        document.getElementById("pass-check").style.visibility = "visible";
    }
}


    if(confpass.value.trim()===""){
        document.getElementById("ucerror").style.visibility="visible";
        document.getElementById("ucerror").innerHTML = "It can't be empty";
        confpass.style.border = "3px solid red";
        document.getElementById("conf-fails").style.visibility = "visible";
        return false;
    }
else {
    if(confpass.value.trim()===Password.value.trim()){
        confpass.style.border = "3px solid green";


        document.getElementById("conf-check").style.visibility = "visible";
    }
    else {
        document.getElementById("ucerror").style.visibility="visible";
        document.getElementById("ucerror").innerHTML = "Password not matched.";
        confpass.style.border = "3px solid red";
        document.getElementById("conf-fails").style.visibility = "visible";
        return false;
    }
    }


alert("Sucessfully submit");










return true;

}

