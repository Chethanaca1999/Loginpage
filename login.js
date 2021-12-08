function validateLogin(){
    var username=document.getElementById("uName").value;
    var password=document.getElementById("pass").value;

    if(username!=""){
        if(password!=""){
            if(username.length >=6){
                    if(password.length>=6){
                        if(username.match(/^[a-zA-z]/)){
                            document.getElementById("elem").innerHTML= "Validating please wait........................";
                        }
                        else{
                            document.getElementById("elem").innerHTML="user name must be a character";
                        }
                    }
                    else{
                        document.getElementById("elem").innerHTML="password must be more than 6";
                    }
            }
            else{
                document.getElementById("elem").innerHTML="name must be more than 6 character";
            }
        }
        else{
            document.getElementById("elem").innerHTML="Please enter the password";
        }
    }    
    else{
        document.getElementById("elem").innerHTML= "Invalid Name";
    }
}
