let subtasks = [];
let category = [];
let assign = [];

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


function addBg(idOfPicture) {
    document.getElementById(`${idOfPicture}`).style = 'transition: all 225ms ease-in-out; filter: invert(67%) sepia(27%) saturate(4917%) hue-rotate(164deg) brightness(94%) contrast(88%);';
}

function removeBg(idOfPicture) {
    document.getElementById(`${idOfPicture}`).style = 'filter: invert(0%);';
}

function prioCheck(idOfPicture) {
    document.getElementById('lowIcon').style = "";
    document.getElementById('mediumIcon').style = "";
    document.getElementById('urgentIcon').style = "";
    document.getElementById(`${idOfPicture}`).style = 'filter: brightness(0%) saturate(0%) contrast(1000%) invert(100%);';
}
function subtaskInputStar() {
    document.getElementById('subtaskStart').classList.add('d-none');
    document.getElementById('subtaskDelete').classList.remove('d-none');
    document.getElementById('subtaskAdd').classList.remove('d-none');
    document.getElementById('subtask-separator-line').classList.remove('d-none');
}

function subtaskInputDelete() {
    document.getElementById('subtaskInput').value = '';
    document.getElementById('subtaskStart').classList.remove('d-none');
    document.getElementById('subtaskDelete').classList.add('d-none');
    document.getElementById('subtaskAdd').classList.add('d-none');
    document.getElementById('subtask-separator-line').classList.add('d-none');
}

function subtaskInputAdd(idOInput) {
    let subtask = document.getElementById(`${idOInput}`).value;
    if (subtask.length >= 1 ) {
        subtasks.push(subtask);
        showSubstasks();
        subtaskInputDelete();
    } else {
        subtaskInputDelete();
    }
}

function showSubstasks() {
    document.getElementById('subtaskList').innerHTML = '';
    for (let i = 0; i < subtasks.length; i++) {
        document.getElementById('subtaskList').innerHTML += subtaskListHTML(`${i}`);
    }
}

function createTask() {
    console.log('TEST')
}


//****************HTML*****************HTML*************HTML****************HTML */ 

function subtaskListHTML(i) {
    const subtask = subtasks[i];
    return /*html*/`
        <div class="subtask-list-form-check">
            <input class="subtask-list-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="subtask-list-label" for="flexCheckDefault" id=${subtask}>
            ${subtask}
            </label>
        </div>`
}