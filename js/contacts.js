letter = [];

async function initContacts() {
    await init();
    users.sort((a, b) => a.surname.localeCompare(b.surname));
    renderLettersList();


}

function renderLettersList() {
    let cCC = document.getElementById('childContactsContainer');
    for (let i = 0; i < users.length; i++) {
        let user = users[i]['surname'];
        let firstSurnameLetter = user.match(/\b(\w)/g).join('');
        if (!letter.includes(firstSurnameLetter)) {
            letter.push(firstSurnameLetter);
            cCC.innerHTML += firstLetterListHTML(firstSurnameLetter);
        };
    }
    renderContacts();
}


/**
 *  Initiates the rendering of the individual contacts
 */
function renderContacts() {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let firstSurnameLetter = user['surname'].match(/\b(\w)/g).join('');
        let firstSurLetterID = document.getElementById(firstSurnameLetter);
        firstSurLetterID.innerHTML += contactHTML(user);
    }
}


function contactInformation(fullName, userColor, userEmail, userPhone) {
    let cInformation = document.getElementById('contactInformation');
    cInformation.innerHTML = '';
    cInformation.innerHTML = contactInformationHTML(fullName, userColor, userEmail, userPhone);
}

function closeAddContact() {
    let element = document.getElementById('tampletContainer');
    element.classList.add('d-none');
    element.innerHTML = '';
}

function openAddContactContainer() {
    let element = document.getElementById('tampletContainer');
    element.classList.remove('d-none')
    element.innerHTML = '';
    element.innerHTML = addNewContactHTML();
}

function openEditContact(fullName, email, phone, color){
    let element = document.getElementById('tampletContainer');
    element.classList.remove('d-none')
    element.innerHTML = '';
    element.innerHTML = editContactHTML(fullName, email, phone, color);
}

async function createNewContact() {
    let fullname = document.getElementById('newName').value;

    let surname = fullname.slice(fullname.indexOf(' ') + 1, fullname.length);
    let email = document.getElementById('newEmail').value;
    let phone = document.getElementById('newPhone').value;
    let color = colors[generateRandomInteger(colors.length - 1)];
    let object = {
        "name": fullname,
        "surname": surname,
        "picture": "randomprofilepicture.webp",
        "email": email,
        "phone": phone,
        "password": "0000",
        "color": color
    };
    await addUser(object);
    location.reload();
}


async function newEditContact(oldEmail){
    let fullname = document.getElementById('editName').value;
    let surname = fullname.slice(fullname.indexOf(' ') + 1, fullname.length);
    let email = document.getElementById('editEmail').value;
    let phone = document.getElementById('editPhone').value;
    let object = {
        "name": fullname,
        "surname": surname,
        "email": email,
        "phone": phone,
        "oldEmail":oldEmail
    };

    await changeUser(object);
    location.reload();
}
