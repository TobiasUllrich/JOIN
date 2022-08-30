let usersTEST = ['.img/edip.png', '.img/Tobias.png', '.img/eugen.png', '.img/gast.png']
let selectedUsersTEST = []


function render() {
    let avatarPicker = document.getElementById('avatarPicker');
    avatarPicker.innerHTML = '';

    for (let i = 0; i < usersTEST.length; i++) {
        const avatar = usersTEST[i];
        avatarPicker.innerHTML += `<img id="user-${i}" onclick="selectUser(${i}) src="${avatar}" class="avatar"`;
    }
}


function selectUser(i) {
    let user = document.getElementById('user-' + i);
    user.classList.toggle('avatar-selected');
    if (selectedUsersTEST.includes(usersTEST[i])) {
        //Löschen
        selectedUsersTEST = selectedUsersTEST.filter(a => a !=user[i]);
    } else {
        selectedUsersTEST.push(usersTEST[i]);
    }
}

function submitAdvice(f) {
    alert('submitting');
    return false;
}

