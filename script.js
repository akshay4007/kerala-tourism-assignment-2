let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");


function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let regpass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let regname= /^[A-Za-z]+$/;

    let result = true;

    if(!regname.test(firstname.value.trim())){
        firstname.style.border = "2px solid red";
        result = false ;
        
    }
    else{
        firstname.style.border = "2px solid green";
    
    }


    if(!regname.test(lastname.value.trim())){
        lastname.style.border = "2px solid red";
        result = false ;
        
    }
    else{
        lastname.style.border = "2px solid green";
    
    }

    if(!regexp.test(email.value)){
        email.style.border = "2px solid red";
        result = false ;
        
    }
    else{
        email.style.border = "2px solid green";
    
    }


    if(!regno.test(number.value)){
        number.style.border ="2px solid red";
        result = false;

    }
    else{
        number.style.border = "2px solid green";
        
    }

    if(!regpass.test(password.value)){
        password.style.border = "2px solid red";
        result = false;

    }
    else{
        password.style.border = "2px solid green";
    
    }

    if(confirmpassword.value != password.value){
        confirmpassword.style.border = "2px solid red";
        result = false;
    }
    else{
        confirmpassword.style.border = "2px solid green";
    
    }
    
    return result;


}

function stren(){
    var strength = document.getElementById("strength");
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");

    if (password.value.length == 0) {
        strength.innerHTML = '';
    }else if (false == enoughRegex.test(password.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(password.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(password.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}