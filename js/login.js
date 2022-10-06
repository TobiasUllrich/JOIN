/**
 * Object used if someone logs in as guest
 */
let guest = {
    "name": "Guest",
    "picture": "randomprofilepicture.webp",
    "email": "Guest@nowhere.de",
    "phone": "",
    "password": "none123"
}

/**
 * Makes arrow black if mobile-version
 * @param {*} arrowelement ID of the arrow-element
 * @param {*} containerforwidth ID of container with 100vw (to check if mobile-version is active)
 */
function setArrow(arrowelement,containerforwidth){
    let breite = document.getElementById(`${containerforwidth}`).clientWidth;

    if (breite < 927) // Mobile
    {document.getElementById(`${arrowelement}`).src=`img/black-arrow.png`;
    }
    else // Desktop
    {document.getElementById(`${arrowelement}`).src=`img/backarrow-icon.png`;}
  }

/**
 * Logo-Animation in desktop-version OR mobile-version 
 */
function loginAnimation() {
    let breite = document.getElementById('center-container').clientWidth;
    if (breite < 927) // Mobile
    {
     document.getElementById('animatedlogo').classList.add('animate-logo-mobile');
     document.getElementById('animatedlogo-mobile').classList.add('animate-logo'); 
     document.getElementById('mobilelogo').classList.add('animate-mobile');   
    }
    else // Desktop
    {document.getElementById('animatedlogo').classList.add('animate-logo');
     document.getElementById('animatedlogo-mobile').classList.add('animate-logo');
    }
}

/**
 * Plays animation if you reseted your password and redirects you to login2.html
 */
function resetPwAnimation() {
    document.getElementById('reset-info').classList.add('animate-resetPw');
    document.getElementById('resetpw-box').classList.remove('d-none');

    setTimeout(function () {
        document.getElementById('reset-info').classList.remove('animate-resetPw');
        document.getElementById('resetpw-box').classList.add('d-none');
        showLoginForm2(); //Directs to login2.html (without animation)
    }, 1000);
}

/**
 * Animates a message for the user
 * @param {*} message Message-variable with the text that will be displayed
 */
function animateMessage(message) {
    document.getElementById('alert-text').innerHTML = message;
    document.getElementById('alert-info').classList.add('animate-Wrong');
    document.getElementById('alert-box').classList.remove('d-none');

    setTimeout(function () { //Lets the message disappear after 1 second
        document.getElementById('alert-info').classList.remove('animate-Wrong');
        document.getElementById('alert-box').classList.add('d-none');
    }, 1000);
}

/**
 * Directs to index.html (with animation) to login
 */
function showLoginForm() {
    window.location.href = 'index.html';
}

/**
 * Directs to index2.html (without animation) to login
 */
function showLoginForm2() {
    window.location.href = 'index2.html';
}

/**
 * Directs to signup.html to register at JOIN
 */
function showSignUpForm() {
    window.location.href = 'signup.html';
}

/**
 * Directs to sendemail.html to request an email to reset your password
 */
function showPasswordForgottenForm() {
    window.location.href = 'sendemail.html';
}

/**
 * Directs to setpassword.html to reset your password
 */
function showResetPasswordForm() {
    let emailtochangepw = document.getElementById('forgotpassword-email').value;
    window.location.href = `setpassword.html?msg=${emailtochangepw}`;
};

/**
 * Lets you login as Guest and redirects you to summary.html
 */
function loginAsGuest() {
    setArray ('arrayOfactUser',guest); //Save Guest-User-Object in local Storage
    window.location.href = 'summary.html';
}

/**
 * Directs you to help.html for help
 */
function showHelpPage() {
    window.location.href = 'help.html';
}

/**
 * Directs you to legalnotice.html for legalnotice
 */
function showLegalNoticePage() {
    window.location.href = 'legalnotice.html';
}

/**
 * Try to Login
 */
function tryLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (checkifEMailexists(email) && checkifPasswordMatches(email, password)) {    
        let actuser = getUserAsObject(email);
        setArray ('arrayOfactUser',actuser); //Save User-Object in local Storage
        window.location.href = 'summary.html';  //Password & Email correct
    }
    else if (!checkifEMailexists(email)) 
    { animateMessage('E-Mail not found!'); //Email incorrect
    }
    else 
    { animateMessage('Wrong Password!'); //Password incorrect
    }
}

/**
 * Try to Signup
 */
async function trySignup() {
    let fullname = document.getElementById('signup-name').value;
    let name=fullname.slice(0,fullname.indexOf(' '));
    let surname=fullname.slice(fullname.indexOf(' ')+1,fullname.length);
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    console.log(name, ' ', surname);
    let object = {
        "name": name,
        "surname": surname,
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

/**
 * Try to send Email
 */
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

/**
 * Password reset after request
 */
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

