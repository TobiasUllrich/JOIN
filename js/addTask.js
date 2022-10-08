let addTaskSubtasks = [];
let selectedSubtasks = [];
let addTaskCategorys = ['Sales', 'Backoffice'];
let addTaskCategoryColors = ['8aa4ff', 'ff0000', '2ad300', 'ff8a00', 'e200be', '0038ff'];
let usedColors = ['fc71ff', '1fd7c1 ']
let assignUsers = [];
let selectedUsers = [];
let selectedPrio;



function rendernTask() {
  addedToBoard();
  let taskTitle = document.getElementById('titelInput').value;
  let taskDescription = document.getElementById('description').value;
  let taskCategory = document.getElementById('categoryInput').value;
  let taskCategoryColor = document.getElementById('colorInput').value;
  let taskDueDate = document.getElementById('dueDate').value;
  let TASK = {
    id: tasks.length,
    title: taskTitle,
    description: taskDescription,
    category: taskCategory,
    categoryColor: '#' + taskCategoryColor,
    assignedTo: selectedUsers,
    dueDate: taskDueDate.split("-").reverse().join("-"),
    priority: selectedPrio,
    subTasks: selectedSubtasks,
    status: "To do",
  };
  // console.log(TASK)
//  addTask(TASK);
}


function addedToBoard(){
  let addedToBoard = document.getElementById('addedToBoard')
  addedToBoard.classList.toggle('d-none');
  addedToBoard.classList.toggle('added-to-board');
}


async function loadAddTastk() {
  await init();
  loadCategory();
  loadAssigned();
  loadUser();
  renderAssingUser();
}

function loadUser() {
  for (let i = 0; i < users.length; i++) {
    const userFullname = users[i].name;
    assignUsers.push(userFullname);
    console.log(assignUsers);
  }
}

function loadCategory() {
  let categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = loadCategoryHTML();
  clearInputValueCategory();
  loadCategorys();
}

function loadAssigned() {
  let assignedContainer = document.getElementById('assignedContainer');
  assignedContainer.innerHTML = '';
  assignedContainer.innerHTML = loadAssignedHTML();
}

function clearInputValueCategory() {
  let categoryValue = document.getElementById('categoryInput');
  let colorValue = document.getElementById('colorInput');
  categoryValue.value = '';
  colorValue.value = '';
}

function loadCategorys() {
  let allCategorys = document.getElementById('allCategorys');
  allCategorys.innerHTML = '';
  for (let i = 0; i < addTaskCategorys.length; i++) {
    allCategorys.innerHTML += allCategoryHTML(`${i}`);
  }
}


function addBg(idOfPicture) {
  document.getElementById(`${idOfPicture}`).style = 'transition: all 225ms ease-in-out; filter: invert(67%) sepia(27%) saturate(4917%) hue-rotate(164deg) brightness(94%) contrast(88%);';
}

function removeBg(idOfPicture) {
  document.getElementById(`${idOfPicture}`).style = 'filter: invert(0%);';
}

function prioChangeColor(idOfPicture) {
  document.getElementById('lowIcon').style = "";
  document.getElementById('mediumIcon').style = "";
  document.getElementById('urgentIcon').style = "";
  document.getElementById(`${idOfPicture}`).style = 'filter: brightness(0%) saturate(0%) contrast(1000%) invert(100%);';
}

function selecedPrio(prioStatus) {
  if (prioStatus == 'Urgent') {
    selectedPrio = 'Urgent'
  }
  if (prioStatus == 'Medium') {
    selectedPrio = 'Medium'
  }
  if (prioStatus == 'Low') {
    selectedPrio = 'Low'
  }

}



/**
 * Is activated via the input or Img and changes the subtaskStart Img to Delete and Add Img 
 */
function subtaskInputStart() {
  document.getElementById('subtaskStart').classList.add('d-none');
  document.getElementById('subtaskDelete').classList.remove('d-none');
  document.getElementById('subtaskAdd').classList.remove('d-none');
  document.getElementById('subtask-separator-line').classList.remove('d-none');
}

/**
 * 
 */
function subtaskInputDelete() {
  document.getElementById('subtaskInput').value = '';
  document.getElementById('subtaskStart').classList.remove('d-none');
  document.getElementById('subtaskDelete').classList.add('d-none');
  document.getElementById('subtaskAdd').classList.add('d-none');
  document.getElementById('subtask-separator-line').classList.add('d-none');
}

function subtaskInputAdd(idOfInput) {
  let subtask = document.getElementById(`${idOfInput}`).value;
  if (subtask.length >= 1) {
    addTaskSubtasks.push(subtask);
    selectedSubtasks = [];
    showSubstasks();
    subtaskInputDelete();
  } else {
    subtaskInputDelete();
  }
}

function showSubstasks() {
  document.getElementById('subtaskList').innerHTML = '';
  for (let i = 0; i < addTaskSubtasks.length; i++) {
    document.getElementById('subtaskList').innerHTML += subtaskListHTML(`${i}`);
  }
}

function clearSubtasksArray() {
  addTaskSubtasks = [];
  document.getElementById('subtaskList').innerHTML = '';
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openCategory() {
  document.getElementById('categoryDropdown').classList.toggle('show');
  document.getElementById('dropbtnCategory').classList.toggle('dropdown-border-bottom-none');
  document.getElementById('categoryDropdown').classList.toggle('dropdown-border-top-none');
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openAssign() {
  document.getElementById('assignDropdown').classList.toggle('show');
  document.getElementById('dropbtnAssign').classList.toggle('dropdown-border-bottom-none');
  document.getElementById('assignDropdown').classList.toggle('dropdown-border-top-none');
}

function renderAssingUser() {
  let assingUser = document.getElementById('assignDropdown');
  assingUser.innerHTML = "";
  for (let i = 0; i < assignUsers.length; i++) {
    const userName = assignUsers[i];
    assingUser.innerHTML += userInAssignedHTML(userName, i)
  };
}

function subtasksCheckbox(indexOfSubtask) {
  let subtask = addTaskSubtasks[indexOfSubtask];
  let clickedSubtask = document.getElementById(`${subtask}-${indexOfSubtask}`);

  if (clickedSubtask.checked == false) {
    clickedSubtask.checked = true;
    subtasksCheckboxPushable(indexOfSubtask);
  } else {
    subtasksCheckboxRemoveable(indexOfSubtask);
    clickedSubtask.checked = false;
  }

}

function subtasksCheckboxPushable(indexOfSubtask) {
  if (!selectedSubtasks.includes(addTaskSubtasks[indexOfSubtask])) {
    selectedSubtasks.push(addTaskSubtasks[indexOfSubtask]);
  }
}

function subtasksCheckboxRemoveable(indexOfSubtask) {
  for (let r = 0; r < selectedSubtasks.length; r++) {
    if (selectedSubtasks[r] === addTaskSubtasks[indexOfSubtask]) {
      selectedSubtasks.splice(r, 1);
    }
  }
}


function assingCheckbox(idOfCheckbox) {
  let clickedCheckbox = document.getElementById(`checkbox-${idOfCheckbox}`);

  if (clickedCheckbox.checked == false) {
    clickedCheckbox.checked = true;
    checkIfWorkerPushable(idOfCheckbox);
  } else {
    checkIfWorkerRemoveable(idOfCheckbox);
    clickedCheckbox.checked = false;
  }
  checkValiCheckbox();
}

function checkIfWorkerPushable(idOfCheckbox) {
  if (!selectedUsers.includes(users[idOfCheckbox])) {
    selectedUsers.push(users[idOfCheckbox].email);
  }
}

function checkIfWorkerRemoveable(idOfCheckbox) {
  for (let p = 0; p < selectedUsers.length; p++) {
    if (selectedUsers[p] === users[idOfCheckbox].email) {
      selectedUsers.splice(p, 1);
    }
  }
}

function checkValiCheckbox() {
  let checkboxAssignedTo = document.getElementById('assignedInput');
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);

  if (checkedOne == false) {
    checkboxAssignedTo.required = true;
  }
  if (checkedOne == true) {
    checkboxAssignedTo.required = false;
  }
}

function addNewCategory() {
  clearInputValueCategory();
  let categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = newCategoryInputHTML();
  categoryColorPicker();
}

function switchToSearchInput() {
  let assignedContainer = document.getElementById('assignedContainer');
  assignedContainer.innerHTML = '';
  assignedContainer.innerHTML = searchEmailInputHTML();
}


function categoryColorPicker() {
  document.getElementById('category-color-picker').innerHTML = '';
  for (let i = 0; i < addTaskCategoryColors.length; i++) {
    document.getElementById('category-color-picker').innerHTML += categoryColorPickerHTML(`${i}`);
  };
}


function pushNewCategory() {
  let category = document.getElementById('newCategoryInput').value;
  let getSelectedValue = document.querySelector('input[ name = "color" ]:checked');
  let errorMessage = document.getElementById('errorMessage');
  errorMessage.innerHTML = '';
  if (category.length >= 1) {
    if (getSelectedValue != null) {
      usedColors.push(document.querySelector('input[ name = "color" ]:checked').value);
      addTaskCategorys.push(category);
      loadCategory();
    } else {
      errorMessage.innerHTML = errorMessageHTML();
    }

  } else {
    errorMessage.innerHTML = errorMessageHTML();
  }
}

/**
 * *
 * @param {number} categoryNumber
 */
function currentCategory(categoryNumber) {
  let categoryContainer = document.getElementById('dropbtnCategory');
  let categoryValue = document.getElementById('categoryInput');
  let colorValue = document.getElementById('colorInput');
  openCategory();
  categoryValue.value = '';
  categoryValue.value = (`${addTaskCategorys[categoryNumber]}`);
  colorValue.value = '';
  colorValue.value = (`${usedColors[categoryNumber]}`);
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = currentCategoryHTML(`${categoryNumber}`);
}


function backToSelectContacts() {
  loadAssigned();
}
