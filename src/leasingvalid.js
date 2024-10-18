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
var reginumber = /^[a-zA-Z0-9\s,.'-]{3,}$/;

export default function leaseValidation(formData)
{
    const error ={};
    var isValid = true;
    if(!wordsonly.test(formData.vehicleMake)){
        error.vehicleMake = "Please Fil This Filed";
        isValid = false;
    }
    var isValid = true;
    if(!wordsonly.test(formData.vehicleModel)){
        error.vehicleModel = "Please Fil This Field";
        isValid = false;
    }
    if(!numberonly.test(formData.manufactureYear)){
        error.manufactureYear = "Please Enter Valid Year";
        isValid = false;
    }
    if(!numberonly.test(formData.leaseAmount)){
        error.leaseAmount = "Please Enter Valid Number";
        isValid = false;
    }
    if(!numberonly.test(formData.leaseTerm)){
        error.leaseTerm = "Please Enter Valid Number";
        isValid = false;
    }
    if(!reginumber.test(formData.vehicleRegNumber)){
        error.vehicleRegNumber = "Please Enter Vehicle Registration Number";
        isValid = false;
    }
    if(!numberonly.test(formData.nic)){
        error.nic = "Please Enter Valid Number";
        isValid = false;
    }
    if(!numberonly.test(formData.downPayment)){
        error.downPayment = "Please Enter Valid Number";
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
   
   return {isValid, error}
}