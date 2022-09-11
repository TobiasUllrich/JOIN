//Logo-Animation
function loginAnimation() {
    document.getElementById('animatedlogo').classList.add('animate-logo');
}

//Reset-PW-Animation
function resetPwAnimation() {
    document.getElementById('reset-info').classList.add('animate-resetPw');
    document.getElementById('resetpw-box').classList.remove('d-none');
    //console.log('New Password is ', document.getElementById('reset-pw').value);
    //console.log('Confirmed Password is ', document.getElementById('reset-pw2').value);

    setTimeout(function () {
        document.getElementById('reset-info').classList.remove('animate-resetPw');
        document.getElementById('resetpw-box').classList.add('d-none');
        console.log('Now you should be able to login');
        showLoginForm2();
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
    setArray ('picOfActUser',['randomprofilepicture.webp']);
    console.log('Now logged in as Guest');
    window.location.href = 'summary.html';
}

//Try to Login
function tryLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    //checkifEMailexists(email);
    //checkifPasswordMatches(email, password);
    if (checkifEMailexists(email) && checkifPasswordMatches(email, password)) { 
        window.location.href = 'summary.html'; 
        
        // NEW NEW
        let actuser = getUserAsObject(email);
        let actpic = actuser['picture'];
        setArray ('picOfActUser',[actpic]);
        // NEW NEW
        console.log('DURCHLASSEN!'); 

    }
    else if (!checkifEMailexists(email)) { animateMessage('E-Mail not found!'); console.log('This E-Mail is not registered!'); }
    else { animateMessage('Wrong Password!'); console.log('The password you entered is incorrect!'); }
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
    console.log(object);
    if (checkifEMailexists(email)) {
        console.log(checkifEMailexists(email));
        animateMessage('E-Mail already exists!');
    }
    else {
        await addUser(object);
        showLoginForm2();
    }
}

//Try to send Email
function tryToSendEmail() {
    let email = document.getElementById('forgotpassword-email').value;
    //console.log(email);
    if (checkifEMailexists(email)) { }
    else {
        animateMessage('E-Mail not found!')
        event.preventDefault();  //<- "action" eines Formulars wird immer nach "onsubmit" ausgeführt
    }                            //<- Über die Funktion die bei "onsubmit" ausgeführt wird, kann man action stoppen
                                 //<- event.preventDefault(); stoppt eine weitere Verarbeitung des Formulars und damit auch die Ausführung von "action"  
}


async function resetPassword() {
    // Der Funktion URLSearchParams() muss ein String übergeben werden
    // The window.location.search property contains the query string portion (=search-part) of a specific query of the current url
    const urlParams = new URLSearchParams(window.location.search);
    let email = urlParams.get('msg');
    //console.log(email);
    //console.log(checkifEMailexists(email));

    let pw1 = document.getElementById('reset-pw').value;
    let pw2 = document.getElementById('reset-pw2').value;
    // console.log(email);
    // console.log(pw1,pw2);
    if (!email)
    {
        animateMessage('E-Mail not found!');
    }
    else if (!checkifEMailexists(email))
    {
        animateMessage('E-Mail not found!');
    }
    else if (pw1 == pw2) {
        await setPasswordForUser(email, pw1);
        resetPwAnimation();
    }
    else {
        animateMessage('Unequal Passwords!');
    }
}

async function setUserpic(){
    let ar = [];
    // console.log(ar);
    // console.log(getArray ('picOfActUser'));
    ar = getArray ('picOfActUser')
    // console.log(ar);
    // console.log(`img/${ar[0]}`);
    // document.getElementById('footer-picture').src=`img/${ar[0]}`;
    // document.getElementById('footer-picture').src = 'img/Tobias.jpg';

    //Ohne setTimeout versucht er src zu beschreiben bevor die Seite fertig geladen ist (Tipp: sr="" als Standard beim zu beschreibenden Element)
    setTimeout(function () {
        document.getElementById('footer-picture').src=`img/${ar[0]}`;         
    }, 500);
}



// Password benötigt mindestens einen Großbuchstaben, Kleinbuchstaben und eine Zahl
// Liefert true -> Test bestanden; Liefert false -> Test nicht bestanden!
function checkPasswordSyntax(str) { // at least one number, one lowercase and one uppercase letter
    // at least six characters that are letters, numbers or the underscore
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(str);
}

