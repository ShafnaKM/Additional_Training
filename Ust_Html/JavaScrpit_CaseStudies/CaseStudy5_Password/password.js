function ValidatePassword(){
    event.preventDefault();
    // document.getElementById("new").value="Hello Shafna";
    let Password=document.getElementById("password").value;

    if( Password.length==0){
        document.getElementById("invalid").innerHTML="!Please Enter A Password";
        document.getElementById("valid").innerHTML="";
    }
    else if( Password.length>=8 &&  Password.length<=50 &&
        /[A-Z]/.test(Password) && /[a-z]/.test(Password) && /[0-9]/.test(Password)
        && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(Password)){
            document.getElementById("valid").innerHTML="Congratulations! Password is valid";
            document.getElementById("invalid").innerHTML="";
        }
        else{
            document.getElementById("invalid").innerHTML="! Password length must between (8-50) and must contains one uppercase letter, one lowercase letter, one digit and one symbol."
            document.getElementById("valid").innerHTML="";
        }

}