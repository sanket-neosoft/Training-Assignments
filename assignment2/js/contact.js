function validate() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mobile");
    var message = document.getElementById("message");
    var error = document.getElementById("error");
    var success = document.getElementById("success");

    var regfname = /[a-zA-A]{3,12}/;
    var reglname = /[a-zA-Z]{1,12}/;
    var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regmobile = /[6-9][0-9]{9}/;


    if (!regfname.test(fname.value)) {
        error.style.display = "block";
        fname.style.border = "red solid 1px";
        success.style.display = "none";
        error.innerHTML = "First name is invaild length of first name should be between 3-12.. Also numbers are not allowed"
    }
    else if (!reglname.test(lname.value)) {
        error.style.display = "block";
        lname.style.border = "red solid 1px";
        success.style.display = "none";
        error.innerHTML = "Last name is invalid length of last name should between 1-12. Also numbers are not allowed"
    }
    else if (!regemail.test(email.value)) {
        error.style.display = "block";
        email.style.border = "red solid 1px";
        success.style.display = "none";
        error.innerHTML = "Invalid Email address or empty cannot be accepted."
    }
    else if (!regmobile.test(mobile.value)) {
        error.style.display = "block";
        mobile.style.border = "red solid 1px";
        success.style.display = "none";
        error.innerHTML = "Invalid Mobile Number. Mobile number must be of 10 digits and field cannot be empty."
    }
    else if (message.value.length == 0) {
        error.style.display = "block";
        message.style.border = "red solid 1px";
        success.style.display = "none";
        error.innerHTML = "Message cannot be empty."
    }
    else {
        success.style.display = "block";
        error.style.display = "none";
        success.innerHTML = "Message Submitted.";
        fname.value = "";
        lname.value = "";
        email.value = "";
        mobile.value = "";
        message.value = "";
    }
}