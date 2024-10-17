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

export default function registrationform(formData)
{
    const error ={};
    var isValid = true;
    if(!wordsonly.test(formData.employmentStatus)){
        error.employmentStatus = "Please Fil the Status";
        isValid = false;
    }
    if(!numberonly.test(formData.monthlyIncome)){
        error.monthlyIncome = "Please Enter Valid Number";
        isValid = false;
    }
    if(!numberonly.test(formData.loanAmount)){
        error.loanAmount = "Please Enter Valid Number";
        isValid = false;
    }
    if(!numberonly.test(formData.otherIncome)){
        error.otherIncome = "Please Enter Valid Number";
        isValid = false;
    }
    if(!numberonly.test(formData.nic)){
        error.nic = "Please Enter Valid Number";
        isValid = false;
    }
    if(!numberonly.test(formData.tin)){
        error.tin = "Please Enter Valid Number";
        isValid = false;
    }
    if(!nameregex.test(formData.fullName)){
        error.fullName = "Name is not Correct Format. Please Try Again ";
        isValid = false;
    }
    if(!userEmailregex.test(formData.email)){
        error.email = "Please Enter Correct Email Address ";
        isValid = false;
    }
    if(!mobileregex.test(formData.contactNumber)){
        error.phone = "Wrong Phone number"; 
        isValid = false;
   }
   if(!addressregx.test(formData.address)){
    error.address = "Invalid Address Name"; 
    isValid = false;
   }
   if(!numberonly.test(formData.loanTerm)){
    error.loanTerm = "Invalid Address Name"; 
    isValid = false;
   }
    return {isValid, error}
}