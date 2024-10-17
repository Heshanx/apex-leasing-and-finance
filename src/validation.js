var nameregex = /^[a-zA-Z'-]+(?:\s[a-zA-Z'-]+)*$/;
var userEmailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
var mobileregex = /^\+?\d{1,3}?\d{10}$/;
var companyregx = /^[a-zA-Z\s]+$/;
var addressregx = /^[a-zA-Z0-9\s,.'-]{3,}$/;
var ziprege = /^\d{5}(-\d{4})?$/; 
var nic =  /^\+?\d{1,3}?\d{10}$/;
var wordsonly = /^[a-zA-Z]+$/;
var numberonly = /^[0-9.]+$/;

export default function uservelidation(formData)
{
    const error ={};
    var isValid = true;
    if(!nameregex.test(formData.firstName)){
        error.firstName = "Name is not Correct Format. Please Try Again ";
        isValid = false;
    }
    if(!userEmailregex.test(formData.useremail)){
        error.userEmail = "Please Enter Correct Email Address ";
        isValid = false;
 
    }
    if(!passwordregex.test(formData.password)){
        error.userPassword = "Enter Strong Password";
        isValid = false;
    }
    if(!mobileregex.test(formData.phone)){
        error.phone = "Wrong Phone number"; 
        isValid = false;
   }
   if(!companyregx.test(formData.company)){
        error.company = "Please Enter Company Name";
        isValid = false;
   }
   if(!addressregx.test(formData.address)){
    error.address = "Invalid Address Name"; 
    isValid = false;
   }
   if(!ziprege.test(formData.zip)){
    error.zip = "Please Enter Valid Zip Code";
    isValid = false;
   }

    return {isValid, error}
}