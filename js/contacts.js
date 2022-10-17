async function initContacts() {
    await init();
    users.sort((a, b) => a.surname.localeCompare(b.surname));
    renderLettersList();
    renderContacts();

}

function renderLettersList(){
    let cCC = document.getElementById('childContactsContainer');
    for (let i = 0; i < users.length; i++) {
        let user = users[i]['surname'];
        let firstSurnameLetter = user.match(/\b(\w)/g).join('');
        cCC.innerHTML += firstLetterListHTML(firstSurnameLetter);
    }
}


/**
 *  Initiates the rendering of the individual contacts
 */
function renderContacts(){
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let firstSurnameLetter = user['surname'].match(/\b(\w)/g).join('');
        let firstSurLetterID = document.getElementById(firstSurnameLetter);
        firstSurLetterID.innerHTML += contactHTML(user);
    }
}


function contactInformation(fullName, userColor, userEmail , userPhone ){
    let cInformation = document.getElementById('contactInformation');
    cInformation.innerHTML = '';
    cInformation.innerHTML = contactInformationHTML(fullName, userColor, userEmail , userPhone);
}
