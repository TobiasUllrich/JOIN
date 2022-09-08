//Logo-Animation
function loginAnimation(){
    document.getElementById('animatedlogo').classList.add('animate-logo');
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

//Login-Screen
function showLoginForm(){
    document.getElementById('login-Box').classList.remove('d-none');
    document.getElementById('login-notajoinuser').classList.remove('d-none');
    document.getElementById('signup-Box').classList.add('d-none');
    document.getElementById('resetpassword-Box').classList.add('d-none');
    document.getElementById('forgotpassword-Box').classList.add('d-none');
}

//SignUp-Screen
function showSignUpForm(){
    document.getElementById('login-Box').classList.add('d-none');
    document.getElementById('login-notajoinuser').classList.add('d-none');
    document.getElementById('signup-Box').classList.remove('d-none');    
}

//PasswordForgotten-Screen
function showPasswordForgottenForm(){
    document.getElementById('login-Box').classList.add('d-none');
    document.getElementById('login-notajoinuser').classList.add('d-none');
    document.getElementById('signup-Box').classList.add('d-none');
    document.getElementById('resetpassword-Box').classList.add('d-none');
    document.getElementById('forgotpassword-Box').classList.remove('d-none');
}

//PasswordReset-Screen
function showResetPasswordForm(){
    document.getElementById('login-Box').classList.add('d-none');
    document.getElementById('login-notajoinuser').classList.add('d-none');
    document.getElementById('signup-Box').classList.add('d-none');
    document.getElementById('resetpassword-Box').classList.remove('d-none');
    document.getElementById('forgotpassword-Box').classList.add('d-none');
};


//Login as Guest
function loginAsGuest(){
    console.log('Now logged in as Guest'); 
    window.location.href = 'summary.html';
}

//Try to Login
function tryLogin(){
console.log('Now trying to login');
console.log('Email is ', document.getElementById('login-email').value);  
console.log('Password is ', document.getElementById('login-password').value);  
}

//Try to Signup
function trySignup(){
    console.log('Now trying to signup');
    console.log('Name is ', document.getElementById('signup-name').value);  
    console.log('Email is ', document.getElementById('signup-email').value);  
    console.log('Password is ', document.getElementById('signup-password').value);  
    showLoginForm();  
    }

//Try to send Email
function tryToSendEmail(){
    console.log('Email should have been sent');
    console.log('Email is ', document.getElementById('forgotpassword-email').value);  
    showResetPasswordForm();  
}    