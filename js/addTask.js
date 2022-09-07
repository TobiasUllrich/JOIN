let usersTEST = ['img/edip.jpg', 'img/Tobias.jpg', 'img/eugen.jpg', 'img/gast.png']
let selectedUsersTEST = []


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
