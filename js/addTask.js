let addTaskSubtasks = [];
let selectedSubtasks = [];
let addTaskCategorys = ['Sales', 'Backoffice'];
let addTaskCategoryColors = ['8aa4ff', 'ff0000', '2ad300', 'ff8a00', 'e200be', '0038ff'];
let usedColors = ['fc71ff', '1fd7c1 ']
let assignUsers = [];
let selectedUsers = [];
let selectedPrio;

/**
 * loads all categories and users
 */
async function loadAddTastk() {
  await init();
  loadCategorys();
  loadAssigned();
  loadUser();
  renderAssingUser();
}

/**
 * All users are loaded from the backend and placed in the assignUsers array. 
 */
function loadUser() {
  for (let i = 0; i < users.length; i++) {
    const userFullname = users[i].name;
    assignUsers.push(userFullname);
  }
}

/**
 * This function infects the loading of the categories.
 */
function loadCategorys() {
  let categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = loadCategoryHTML();
  clearInputValueCategory();
  loadCategory();
}

/**
 * This function infects the loading of the Assigneds.
 */
function loadAssigned() {
  let assignedContainer = document.getElementById('assignedContainer');
  assignedContainer.innerHTML = '';
  assignedContainer.innerHTML = loadAssignedHTML();
}

/**
 * This function takes the inputs and creates an Object
 */
function rendernTask() {
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
  addTask(TASK);
  addedToBoard();
}

/**
 * Creates a waiting animation with a timer, when the timer expires you are redirected to the board
 */
function addedToBoard() {
  let addedToBoard = document.getElementById('addedToBoard')
  addedToBoard.classList.toggle('d-none');
  addedToBoard.classList.toggle('added-to-board');
  setTimeout(function () { location.href = "board.html" }, 3000);
}

/**
 * Clears the input value of element with ID categoryInput and colorInput.
 */
function clearInputValueCategory() {
  let categoryValue = document.getElementById('categoryInput');
  let colorValue = document.getElementById('colorInput');
  categoryValue.value = '';
  colorValue.value = '';
}

/**
 * Individual categories are run through
 */
function loadCategory() {
  let allCategorys = document.getElementById('allCategorys');
  allCategorys.innerHTML = '';
  for (let i = 0; i < addTaskCategorys.length; i++) {
    allCategorys.innerHTML += allCategoryHTML(`${i}`);
  }
}

/**
 * The function changes the background color
 * @param {String} idOfPicture - id from picture
 */
function addBg(idOfPicture) {
  document.getElementById(`${idOfPicture}`).style = 'transition: all 225ms ease-in-out; filter: invert(67%) sepia(27%) saturate(4917%) hue-rotate(164deg) brightness(94%) contrast(88%);';
}

/**
 * Resets the background color.
 * @param {String} idOfPicture - id from picture
 */
function removeBg(idOfPicture) {
  document.getElementById(`${idOfPicture}`).style = 'filter: invert(0%);';
}

/**
 * Changes the color of the selected element
 * @param {String} idOfPicture - id from picture
 */
function prioChangeColor(idOfPicture) {
  document.getElementById('lowIcon').style = "";
  document.getElementById('mediumIcon').style = "";
  document.getElementById('urgentIcon').style = "";
  document.getElementById(`${idOfPicture}`).style = 'filter: brightness(0%) saturate(0%) contrast(1000%) invert(100%);';
}

/**
 * This function checks which of the 3 buttons has been activated and passes it to the array
 * @param {String} prioStatus - Gibt weiter welches der Prois knöpfe aktiviert wurden
 */
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
 * With this function while the buttons changed to subtaskDelete and subtaskAdd
 */
function subtaskInputStart() {
  document.getElementById('subtaskStart').classList.add('d-none');
  document.getElementById('subtaskDelete').classList.remove('d-none');
  document.getElementById('subtaskAdd').classList.remove('d-none');
  document.getElementById('subtask-separator-line').classList.remove('d-none');
}

/**
 * The value is cleared and the buttons change to subtaskStart
 */
function subtaskInputDelete() {
  document.getElementById('subtaskInput').value = '';
  document.getElementById('subtaskStart').classList.remove('d-none');
  document.getElementById('subtaskDelete').classList.add('d-none');
  document.getElementById('subtaskAdd').classList.add('d-none');
  document.getElementById('subtask-separator-line').classList.add('d-none');
}

/**
 * 
 * @param {string} idOfInput  id from Input
 */
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

/**
 * The function goes through all subtasks and passes them to the HTML function
 */
function showSubstasks() {
  document.getElementById('subtaskList').innerHTML = '';
  for (let i = 0; i < addTaskSubtasks.length; i++) {
    document.getElementById('subtaskList').innerHTML += subtaskListHTML(`${i}`);
  }
}

/**
 * the addTaskSubtasks array is cleared 
 */
function clearSubtasksArray() {
  addTaskSubtasks = [];
  document.getElementById('subtaskList').innerHTML = '';
}

/**
 *  CSS properties are toggled
 */
function openCategory() {
  document.getElementById('categoryDropdown').classList.toggle('show');
  document.getElementById('dropbtnCategory').classList.toggle('dropdown-border-bottom-none');
  document.getElementById('categoryDropdown').classList.toggle('dropdown-border-top-none');
}


/**
 *  CSS properties are toggled
 */
function openAssign() {
  document.getElementById('assignDropdown').classList.toggle('show');
  document.getElementById('dropbtnAssign').classList.toggle('dropdown-border-bottom-none');
  document.getElementById('assignDropdown').classList.toggle('dropdown-border-top-none');
}

/**
 *  Empty the element with the id assignDropdown and pass all assignUsers[i].
 */
function renderAssingUser() {
  let assingUser = document.getElementById('assignDropdown');
  assingUser.innerHTML = "";
  for (let i = 0; i < assignUsers.length; i++) {
    const userName = assignUsers[i];
    assingUser.innerHTML += userInAssignedHTML(userName, i)
  };
}

/**
 * 
 * @param {string} indexOfSubtask 
 */
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

/**
 * @param {string} indexOfSubtask 
 */
function subtasksCheckboxPushable(indexOfSubtask) {
  if (!selectedSubtasks.includes(addTaskSubtasks[indexOfSubtask])) {
    selectedSubtasks.push(addTaskSubtasks[indexOfSubtask]);
  }
}

/**
 * @param {string} indexOfSubtask 
 */
function subtasksCheckboxRemoveable(indexOfSubtask) {
  for (let r = 0; r < selectedSubtasks.length; r++) {
    if (selectedSubtasks[r] === addTaskSubtasks[indexOfSubtask]) {
      selectedSubtasks.splice(r, 1);
    }
  }
}

/**
 * @param {string} indexOfSubtask  
 */
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

/**
 * @param {string} indexOfSubtask 
 */
function checkIfWorkerPushable(idOfCheckbox) {
  if (!selectedUsers.includes(users[idOfCheckbox])) {
    selectedUsers.push(users[idOfCheckbox].email);
  }
}

/**
 * @param {string} indexOfSubtask  
 */
function checkIfWorkerRemoveable(idOfCheckbox) {
  for (let p = 0; p < selectedUsers.length; p++) {
    if (selectedUsers[p] === users[idOfCheckbox].email) {
      selectedUsers.splice(p, 1);
    }
  }
}

/**
 *  
 */
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

/**
 * 
 */
function addNewCategory() {
  clearInputValueCategory();
  let categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = newCategoryInputHTML();
  categoryColorPicker();
}

/**
 *  
 */
function switchToSearchInput() {
  let assignedContainer = document.getElementById('assignedContainer');
  assignedContainer.innerHTML = '';
  assignedContainer.innerHTML = searchEmailInputHTML();
}

/**
 * 
 */
function categoryColorPicker() {
  document.getElementById('category-color-picker').innerHTML = '';
  for (let i = 0; i < addTaskCategoryColors.length; i++) {
    document.getElementById('category-color-picker').innerHTML += categoryColorPickerHTML(`${i}`);
  };
}

/**
 * 
 */
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

/**
 * 
 */
function backToSelectContacts() {
  loadAssigned();
}
