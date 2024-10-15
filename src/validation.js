export default function uservelidation(custnames,useremail,password){
    var nameregex = /^[a-zA-Z'-]+(?:\s[a-zA-Z'-]+)*$/;
    var userEmailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
    
    const error ={}


    var isValid = true;

    if(custnames === ""|| !nameregex.test(custnames)){
        error.custnames = "Name is not Correct Format. Please Try Again ";
        isValid = false;
    }
    if(useremail ===""|| !userEmailregex.test(useremail)){
        error.useremail = "Please Enter Correct Email Address ";
        isValid = false;
 
    }
    if(password ===""|| !passwordregex.test(password)){
        error.password = "Enter Strong Password";
        isValid = false;
    }
    return {isValid, error};

}