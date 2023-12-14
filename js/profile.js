
/* Sample JSON object with user information*/
var userData = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",

    companyName: "Example Company",
    industry: "Technology",
    foundedYear: "2000",
    website: "https://www.example.com",

    addressLine1: "123 Main Street",
    addressLine2: "Apt 456",
    country: "United States",
    city: "Cityville",
    postalCode: "12345",

    currentPassword: "currentPassword123",
    newPassword: "newPassword456",
    confirmPassword: "newPassword456"

};


function displayUserInfo() {
    displayPersonalInfo();
    displayCompanyInfo();
    displayAddressInfo();
    displayPassword();

}


function displayPersonalInfo() {
    document.getElementById("firstNameValue").textContent = userData.firstName;
    document.getElementById("lastNameValue").textContent = userData.lastName;
    document.getElementById("phoneNumberValue").textContent = userData.phoneNumber;
    document.getElementById("emailValue").textContent = userData.email;
}


function displayCompanyInfo() {
    document.getElementById("companyNameValue").textContent = userData.companyName;
    document.getElementById("industryValue").textContent = userData.industry;
    document.getElementById("foundedYearValue").textContent = userData.foundedYear;
    document.getElementById("websiteValue").textContent = userData.website;
}


function displayAddressInfo() {
    document.getElementById("addressLine1Value").textContent = userData.addressLine1;
    document.getElementById("addressLine2Value").textContent = userData.addressLine2;
    document.getElementById("countryValue").textContent = userData.country;
    document.getElementById("cityValue").textContent = userData.city;
    document.getElementById("postalCodeValue").textContent = userData.postalCode;
}


function displayPassword() {
    document.getElementById("currentPasswordValue").textContent = userData.currentPassword;
    document.getElementById("newPasswordValue").textContent = userData.newPassword;
    document.getElementById("confirmPasswordValue").textContent = userData.confirmPassword;
}


function editPersonalInfo() {
    editFields("personalInfoForm");
}


function savePersonalInfo() {
    saveFields("personalInfoForm");
}


function editCompanyInfo() {
    editFields("companyInfoForm");
}


function saveCompanyInfo() {
    saveFields("companyInfoForm");
}


function editAddressInfo() {
    editFields("addressInfoForm");
}


function saveAddressInfo() {
    saveFields("addressInfoForm");
}


function editPassword() {
    editFields("passwordForm");
}


function savePassword() {
    saveFields("passwordForm");
}


function editProfilePic() {

    console.log("Edit profile picture");
}


function saveProfilePic() {

    console.log("Save profile picture");
}


function editFields(formId) {
    var form = document.getElementById(formId);
    var fields = form.querySelectorAll("div");
    fields.forEach(function (field) {
        var input = document.createElement("input");
        input.value = field.textContent.trim();
        field.textContent = "";
        field.appendChild(input);
    });
}


function saveFields(formId) {
    var form = document.getElementById(formId);
    var fields = form.querySelectorAll("div");
    fields.forEach(function (field) {
        var input = field.querySelector("input");
        field.textContent = input.value;
    });
}

displayUserInfo();
