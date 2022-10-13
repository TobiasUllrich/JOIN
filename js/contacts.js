async function initContacts() {
    await init();
    renderContacts();
}

/**
 *  Initiates the rendering of the individual contacts
 */
function renderContacts(){
    let cC = document.getElementById('contactsContainer');
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(user)
        cC.innerHTML += contactHTML(user);
    }
}