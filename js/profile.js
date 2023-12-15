//Example user//

   var userData = {
    firstName: "Jens",
    lastName: "Jensen",
    phoneNumber: "25458723",
    email: "jensjensen@bestseller.dk",
    
    companyName: "Bestseller",
    industry: "Clothing",
    foundedYear: "2008",
    website: "https://www.bestseller.dk",
   
    addressLine1: "123 Vejlevej",
    addressLine2: "10",
    country: "Denmark",
    city: "Aarhus",
    postalCode: "8000",
   
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


//The following code would display the user info fetched from the json and apply to the document

document.addEventListener('DOMContentLoaded', function () {
function fetchUserInfo(userId) {
    fetch('users.json')
    .then(response => response.json())
    .then(data => {
        const user = data.user.find(user => user.id === parseInt(userId));
        if (product) {
            displayUserInformation(user);
        } else {
            console.error('User not found');
        }
        })
        .catch(error => console.error('Error fetching user information:', error));
}

// Demonstration purpose: the information for user with ID 1
fetchUserInfo(1);

const profileContent = document.getElementById('#profile-content')

function displayUserInformation(user)
 {
    var firstName = profileContent.querySelector('firstNameValue');
    var lastName = profileContent.querySelector('lastNameValue');
    var phoneNumber = profileContent.querySelector('phoneNumberValue');
    var email = profileContent.querySelector('emailValue');
    var companyName = profileContent.querySelector('companyNameValue');
    var industry = profileContent.querySelector('industryValue');
    var profilePictureUrl = profileContent.querySelector('profilePic');


    firstName.textContent = `${user.first_name}`;
    lastName.textContent = user.last_name;
    phoneNumber.textContent = user.phone_number;
    email.textContent = user.email;
    companyName.textContent = user.company_name;
    industry.textContent = user.industry;
    profilePictureUrl.textContent = "";
 }
});