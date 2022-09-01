let usersTEST = ['img/edip.jpg', 'img/Tobias.jpg', 'img/eugen.jpg', 'img/gast.png']
let selectedUsersTEST = []


function renderAddTask() {
    let avatarPicker = document.getElementById('avatarPicker');
    avatarPicker.innerHTML = '';
    
    for (let i = 0; i < usersTEST.length; i++) {    
        const avatar = usersTEST[i];
        avatarPicker.innerHTML += `<img id="user-${i}" onclick="selectUser(${i})" src="${avatar}" class="avatar">`;
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
    };
}


// onsubmit test
function myFunction(){
    console.log('Hello');
    category();
}

// selcet test
function urgency() {
    let urgency = document.getElementById('urgency');
    let index = urgency.options[urgency.selectedIndex];

    console.log(urgency, index);
}


// selcet test
function category() {
    let category = document.getElementById('category');
    let index = category.options[category.selectedIndex];

    console.log(category, index);
}