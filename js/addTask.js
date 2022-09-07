let usersTEST = ['img/edip.jpg', 'img/Tobias.jpg', 'img/eugen.jpg', 'img/gast.png']
let selectedUsersTEST = []


// onsubmit test
function myFunction() {
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


function addBackground(idOfPicture) {
    document.getElementById(`${idOfPicture}`).style = 'transition: all 225ms ease-in-out; filter: invert(67%) sepia(27%) saturate(4917%) hue-rotate(164deg) brightness(94%) contrast(88%);';
}

function removeBackground(idOfPicture) {
    document.getElementById(`${idOfPicture}`).style = 'filter: invert(0%);';
}

