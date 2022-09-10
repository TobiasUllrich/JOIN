let animationPlayed = false;

//Logo-Animation
function loginAnimation(){

    if (animationPlayed == false)
    {
        console.log('Animation abspielen ',  animationPlayed);
        document.getElementById('animatedlogo').classList.add('animate-logo');
        animationPlayed = true;
        console.log('Animation abspielen ',  animationPlayed);
    }
}

//Reset-PW-Animation
function resetPwAnimation(){
    document.getElementById('reset-info').classList.add('animate-resetPw');
    document.getElementById('resetpw-box').classList.remove('d-none');
    console.log('New Password is ', document.getElementById('reset-pw').value); 
    console.log('Confirmed Password is ', document.getElementById('reset-pw2').value); 

    setTimeout(function (){
        document.getElementById('reset-info').classList.remove('animate-resetPw');
        document.getElementById('resetpw-box').classList.add('d-none');
        document.getElementById('login-Box').classList.remove('d-none');
        console.log('Now you should be able to login');
        showLoginForm();
    }, 1000);    
}

//Wrong-Email-Animation
function animateMessage(message){
    document.getElementById('alert-text').innerHTML=message;
    document.getElementById('alert-info').classList.add('animate-Wrong');
    document.getElementById('alert-box').classList.remove('d-none');

    setTimeout(function (){
        document.getElementById('alert-info').classList.remove('animate-Wrong');
        document.getElementById('alert-box').classList.add('d-none');     
    }, 1000);    
}

//Login-Screen
function showLoginForm(){
    window.location.href = 'index.html';
}

//SignUp-Screen
function showSignUpForm(){
    window.location.href = 'signup.html';
}

//PasswordForgotten-Screen
function showPasswordForgottenForm(){
    window.location.href = 'sendemail.html';
}

//PasswordReset-Screen
function showResetPasswordForm(){
    let emailtochange = document.getElementById('forgotpassword-email').value;
    window.location.href = `setpassword.html?msg=${emailtochange}`;
};

//Login as Guest
function loginAsGuest(){
    console.log('Now logged in as Guest'); 
    window.location.href = 'summary.html';
}

//Try to Login
function tryLogin(){
let email=document.getElementById('login-email').value;
let password=document.getElementById('login-password').value;

checkifEMailexists(email);
checkifPasswordMatches(email,password);
if (checkifEMailexists(email) && checkifPasswordMatches(email,password))
{window.location.href = 'summary.html';console.log('DURCHLASSEN!');}
else if (!checkifEMailexists(email))
{animateMessage('E-Mail not found!');console.log('This E-Mail is not registered!');}
else
{animateMessage('Wrong Password!');console.log('The password you entered is incorrect!');}
}

//Try to Signup
async function trySignup(){
    let name=document.getElementById('signup-name').value;
    let email=document.getElementById('signup-email').value;
    let password=document.getElementById('signup-password').value;
    let object={
        "name": name,
        "picture": "randomprofilepicture.webp",
        "email": email,
        "phone":"",
        "password": password
      }
    //console.log(object);
    if(checkifEMailexists(email))
    {
    animateMessage('E-Mail already exists!');
    }
    else
    {
    addUser(object);
    emptySignUpForm();
    showLoginForm();
    }


    // console.log('Now trying to signup');
    // console.log('Name is ', document.getElementById('signup-name').value);  
    // console.log('Email is ', document.getElementById('signup-email').value);  
    // console.log('Password is ', document.getElementById('signup-password').value);  
      
    }

//Try to send Email
async function tryToSendEmail(){
    let email = document.getElementById('forgotpassword-email').value;

    if(checkifEMailexists(email))
    {   // Hier muss E-Mail geschickt werden
        // E-Mail enthält den Link zur nächsten Seite (wird jetzt automatisch geöffnet)
        console.log('Email should have been sent');
        console.log('Email is ', document.getElementById('forgotpassword-email').value);
        showResetPasswordForm();   
    }
    else
    {
        animateMessage('E-Mail not found!');
    }     
}

function resetPassword(){
    // Der Funktion URLSearchParams() muss ein String übergeben werden
    // The window.location.search property contains the query string portion (=search-part) of a specific query of the current url
    const urlParams = new URLSearchParams(window.location.search); 
    const myParam = urlParams.get('msg');

    if(myParam){
       document.getElementById('msgBox').innerHTML=myParam;
       msgBox.innerHTML=myParam; // ist div-ID laut Junus
    }
    else{
       //display none
    }


    let email = document.getElementById('forgotpassword-email').value;
    let pw1 = document.getElementById('reset-pw').value;
    let pw2 = document.getElementById('reset-pw2').value;
    // console.log(email);
    // console.log(pw1,pw2);
    if (pw1 == pw2)
    {
    setPasswordForUser(email,pw1);
    resetPwAnimation();
    emptyResetPWForm();    
    }
    else
    {
    animateMessage('Passwords have to be equal!');  
    }
}

function emptySignUpForm(){
    document.getElementById('signup-name').value='';
    document.getElementById('signup-email').value='';
    document.getElementById('signup-password').value='';
}

function emptyResetPWForm(){
    document.getElementById('forgotpassword-email').value='';
    document.getElementById('reset-pw').value='';
    document.getElementById('reset-pw2').value='';
}

// Password benötigt mindestens einen Großbuchstaben, Kleinbuchstaben und eine Zahl
// Liefert true -> Test bestanden; Liefert false -> Test nicht bestanden!
function checkPasswordSyntax(str) 
{ // at least one number, one lowercase and one uppercase letter
  // at least six characters that are letters, numbers or the underscore
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
  return re.test(str);
}

function testFunktion(){
    consolge.log('FOKUS');
}