let form = document.querySelector("form")


// Inputs
let firstname =document.querySelector("#name");
let lastname =document.querySelector("#last");
let email =document.querySelector("#mail");
let MobileNumber =document.querySelector("#number");
let password =document.querySelector("#passcode");

//Errors
let fNameError =document.querySelector("#f-name error");
let lNameError =document.querySelector("#l-name error");
let emailError =document.querySelector("#email error");
let numberError =document.querySelector("#number error");
let passwordError =document.querySelector("#password error");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    clearErrors();
    let fName = firstName.value.trim();
    let lName = lastName.value.trim();
    let mail = email.value.trim();
    let phone = phoneNumber.value.trim();
    let pass = password.value.trim();

    if(
        fNameValidation(fName) &&
        lNameValidation(lName) &&
        emailValidation(mail) &&
        phoneValidation(phone) &&
        passwordValidation(pass)
    ){
        alert("Form submitted successfully");
        clearInputs();
    }
});

// First Name Validation
const fNameValidation = (input) => {
    if(input.length < 2){
        fNameError.innerText ="First Name Must be atleast 2 Character long";
        return false;
    }
    const isValidName =/^[a-zA-Z]*$/;
    if (!isValidName.test(input)){
        fNameError.innerText ="Invalid First Name";
        return false;
    }
    return true;
};

// Last Name Validation 
const lNameValidation =(input) => {
    if(input.length < 2){
        lNameValidation.innerText ="Last Name must be atleast 2 character long";
        return false;
    }
    const isValidName = /^[a-zA-Z]*$/;
    if (!isValidName.test(input)){
        lNameError.innerText ="Invalid Last Name";
        return false;
    }
    return true;
};

// Email Validation 

let emailValidation =(input) => {
    const isValidEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!isValidEmail.test(input)) {
        emailError.innerText = "Enter a Valid Email";
        return false;
      }
      return true;
};

// Phone Number Validation
const phoneValidation = (input) => {
    const isValidPhone =
      /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
  
    if (!isValidPhone.test(input)) {
      phoneError.innerText = "Enter a valid Mobile Number";
      return false;
    }
    return true;
  };


//password validation
const passwordValidation =(input) => {
    let isvalidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,20}$/;
    if(!isvalidPassword.test(input)){
        passwordError.innerText ="Enter valid password";
        return false;
    
    }
    return true;
};

const clearErrors = () => {
    fNameError.innerText ="";
    lNameError.innerText ="";
    emailError.innerText ="";
    phoneError.innerText ="";
    passwordError.innerText ="";
};

const clearInputs = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phoneNumber.value = "";
    password.value = "";
};