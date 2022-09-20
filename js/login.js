let guest = {
    "name": "Guest",
    "picture": "randomprofilepicture.webp",
    "email": "Guest@nowhere.de",
    "phone": "",
    "password": "none123"
}

//Logo-Animation
function loginAnimation() {
    

    let breite = document.getElementById('center-container').clientWidth;
    if (breite < 901) 
    {document.getElementById('animatedlogo').classList.add('d-none');
     document.getElementById('animatedlogo2').classList.remove('d-none');
     document.getElementById('mobilelogo').classList.add('animate-mobile');
     document.getElementById('mobilelogo').classList.add('d-none');
    }
    else
    {document.getElementById('animatedlogo').classList.add('animate-logo');}

}

//Reset-PW-Animation
function resetPwAnimation() {
    document.getElementById('reset-info').classList.add('animate-resetPw');
    document.getElementById('resetpw-box').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('reset-info').classList.remove('animate-resetPw');
        document.getElementById('resetpw-box').classList.add('d-none');
        showLoginForm2(); //Login-Screen without animation
    }, 1000);
}

//Wrong-Email-Animation
function animateMessage(message) {
    document.getElementById('alert-text').innerHTML = message;
    document.getElementById('alert-info').classList.add('animate-Wrong');
    document.getElementById('alert-box').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('alert-info').classList.remove('animate-Wrong');
        document.getElementById('alert-box').classList.add('d-none');
    }, 1000);
}

//Login-Screen with animation
function showLoginForm() {
    window.location.href = 'index.html';
}

//Login-Screen without animation
function showLoginForm2() {
    window.location.href = 'index2.html';
}

//SignUp-Screen
function showSignUpForm() {
    window.location.href = 'signup.html';
}

//PasswordForgotten-Screen
function showPasswordForgottenForm() {
    window.location.href = 'sendemail.html';
}

//PasswordReset-Screen
function showResetPasswordForm() {
    let emailtochangepw = document.getElementById('forgotpassword-email').value;
    window.location.href = `setpassword.html?msg=${emailtochangepw}`;
};

//Login as Guest
function loginAsGuest() {
    setArray ('arrayOfactUser',guest); //Save Guest-User-Object in local Storage
    if (innerWidth<901)
    {window.location.href = 'summary2.html';} // For Mobile
    else 
    {window.location.href = 'summary.html';}; // Not Mobile
}

//Go to Help-Section
function showHelpPage() {
    window.location.href = 'help.html';
}

//Go to LegalNotice-Section
function showLegalNoticePage() {
    window.location.href = 'legalnotice.html';
}


//Try to Login
function tryLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (checkifEMailexists(email) && checkifPasswordMatches(email, password)) { 
        if (innerWidth<901)                        //Password & Email correct
        {window.location.href = 'summary2.html';} // For Mobile
        else 
        {window.location.href = 'summary.html';}; // Not Mobile
        let actuser = getUserAsObject(email);
        setArray ('arrayOfactUser',actuser); //Save User-Object in local Storage
    }
    else if (!checkifEMailexists(email)) 
    { animateMessage('E-Mail not found!'); //Email incorrect
    }
    else 
    { animateMessage('Wrong Password!'); //Password incorrect
    }
}

//Try to Signup
async function trySignup() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let object = {
        "name": name,
        "picture": "randomprofilepicture.webp",
        "email": email,
        "phone": "",
        "password": password
    }

    if (checkifEMailexists(email)) {
        //Email already in Database
        animateMessage('E-Mail already exists!');
    }
    else {
        //Signed up successfully
        await addUser(object);
        showLoginForm2();
    }
}

//Try to send Email
function tryToSendEmail() {
    let email = document.getElementById('forgotpassword-email').value;

    if (checkifEMailexists(email)) { } //Email sent 
    else 
    {
        animateMessage('E-Mail not found!') //Email not sent

        event.preventDefault();  //<- "action" eines Formulars wird immer nach "onsubmit" ausgeführt
    }                            //<- Über die Funktion die bei "onsubmit" ausgeführt wird, kann man action stoppen
                                 //<- event.preventDefault(); stoppt eine weitere Verarbeitung des Formulars und damit auch die Ausführung von "action"  
}

//Password reset after request
async function resetPassword() {

    const urlParams = new URLSearchParams(window.location.search);
    let email = urlParams.get('msg');

    let pw1 = document.getElementById('reset-pw').value;
    let pw2 = document.getElementById('reset-pw2').value;

    if (!email)
    {
        animateMessage('E-Mail not found!'); //Check if qry contained in URL
    }
    else if (!checkifEMailexists(email)) //Check if Email exists
    {
        animateMessage('E-Mail not found!');
    }
    else if (pw1 == pw2) //Check Pws are equal
    {
        await setPasswordForUser(email, pw1);
        resetPwAnimation();
    }
    else 
    {
        animateMessage('Unequal Passwords!');
    }
}

//Animation for Mobile (900px or less)
function mobileAnimation(){
    
}


// Password benötigt mindestens einen Großbuchstaben, Kleinbuchstaben und eine Zahl
// Liefert true -> Test bestanden; Liefert false -> Test nicht bestanden!
function checkPasswordSyntax(str) { // at least one number, one lowercase and one uppercase letter
    // at least six characters that are letters, numbers or the underscore
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(str);
}

