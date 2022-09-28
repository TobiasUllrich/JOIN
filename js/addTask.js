let subtasks = [];
let categorys = ['Sales', 'Backoffice'];
let categoryColors = ['8aa4ff', 'ff0000', '2ad300', 'ff8a00', 'e200be', '0038ff'];
let usedColors = ['fc71ff', '1fd7c1 ']
let assign = [];


function loadAddTastk() {
  loadCategory();
  loadAssigned();
  console.log('Test');
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
  for (let i = 0; i < categorys.length; i++) {
    allCategorys.innerHTML += allCategoryHTML(`${i}`);
  }
}



function urgency() {
  let urgency = document.getElementById('urgency');
  let index = urgency.options[urgency.selectedIndex];

  console.log(urgency, index);
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

function clearSubtasksArray() {
  subtasks = [];
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



function addNewCategory() {
  clearInputValueCategory();
  let categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = newCategoryInputHTML();
  categoryColorPicker();
}


function categoryColorPicker() {
  document.getElementById('category-color-picker').innerHTML = '';
  for (let i = 0; i < categoryColors.length; i++) {
    document.getElementById('category-color-picker').innerHTML += categoryColorPickerHTML(`${i}`);
  }
}


function pushNewCategory() {
  let category = document.getElementById('newCategoryInput').value;
  let getSelectedValue = document.querySelector('input[ name = "color" ]:checked');
  let errorMessage = document.getElementById('errorMessage');
  errorMessage.innerHTML = '';
  if (category.length >= 1) {
    if (getSelectedValue != null) {
      usedColors.push(document.querySelector('input[ name = "color" ]:checked').value);
      categorys.push(category);
      loadCategory();
    } else {
      errorMessage.innerHTML = errorMessageHTML();
    }

  } else {
    errorMessage.innerHTML = errorMessageHTML();
  }
}

/**
 * categoryNumber is a Number
 */
function currentCategory(categoryNumber) {
  let categoryContainer = document.getElementById('dropbtnCategory');
  let categoryValue = document.getElementById('categoryInput');
  let colorValue = document.getElementById('colorInput');
  openCategory();
  categoryValue.value = '';
  categoryValue.value = (`${categorys[categoryNumber]}`);
  colorValue.value = '';
  colorValue.value = (`${usedColors[categoryNumber]}`);
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = currentCategoryHTML(`${categoryNumber}`);
}

//****************HTML*****************HTML*************HTML****************HTML */ 


function newCategoryInputHTML() {
  return /*html*/`
          <div class="input-group">
            <input id="newCategoryInput" type="text" class="form-control" placeholder="New category name">
            <button onclick="loadCategory()" id="subtaskDelete" class="" type="button">
            <img src="./img/addtask/x-vector.png" alt=""></button>
            <div id="subtask-separator-line" class="subtask-separator-line"></div>
            <button onclick="pushNewCategory()" id="subtaskAdd" class="subtasks-right-butten" type="button">
            <img class="ok-vector" src="./img/addtask/ok-vector.png" alt=""></button>
            <div class=""></div>
          </div>
          <div id="category-color-picker" class="category-color-picker">
          </div>
          <div id="errorMessage">
          </div>
    `;
}

function errorMessageHTML() {
  return /*html*/`
  <p> Add a category and a color! </p>
`
}

function categoryColorPickerHTML(i) {
  return /*html*/`
              <input class="input-radio" type="radio" name="color" id="${categoryColors[i]}" value="${categoryColors[i]}" />
              <label for="${categoryColors[i]}" class="add-task-color-picker"><span class="color-${i}"></span></label> 
  `
}

function loadCategoryHTML() {
  return /*html*/`
    <div onclick="openCategory()" id="dropbtnCategory" class="dropbtn-category">Select task category <img src="./img/addtask/dropdown-Vector.png" alt=""></div>
    <div id="categoryDropdown" class="dropdown-content">
      <p onclick="addNewCategory()">New category</p>
      <div id="allCategorys">
      </div>
    </div>`;
}

function currentCategoryHTML(i) {
  return /*html*/` 
    <div   class="active-category">
    <p> ${categorys[i]}</p>
    <div style="background-color:#${usedColors[i]}" class="categoryColor">
    </div>
  </div>
    `;
}

function allCategoryHTML(i) {
  return /*html*/`
  <div onclick="currentCategory(${i})"  class="current-category">
    <p> ${categorys[i]}</p>
    <div style="background-color:#${usedColors[i]}" class="categoryColor">
    </div>
  </div>
    `;
}

function subtaskListHTML(i) {
  const subtask = subtasks[i];
  return /*html*/`
      <div class="subtask-list-form-check">
        <input class="subtask-list-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="subtask-list-label" for="flexCheckDefault" id=${subtask}>
            ${subtask}
          </label>
        </div>`;
}

function loadAssignedHTML() {
  return /*html*/`
  <div onclick="openAssign()" id="dropbtnAssign" class="dropbtn-assign" type="button">Select contacts to assign<img src="./img/addtask/dropdown-Vector.png" alt=""></div>
  <div id="assignDropdown" class="dropdown-content">
        <span class="d-flex menu-option"><label class="assign-label">
               You</label> <input required class="assign-input" type="checkbox"></span>
        <span class="d-flex menu-option"><label class="assign-label">
                Max Mustermann</label> <input class="assign-input"  type="checkbox"></span>
        <span class="d-flex menu-option"><label class="assign-label">
                Fanz Musterhaus</label> <input class="assign-input" type="checkbox"></span>
        <div onclick="switchToSearchInput()"class="switchToSearch-btn-assign" type="button">Select contacts to assign<img class="black-icon" src="./img/addtask/newContactIcon.png" alt=""></div>
  </div>
  
  `;
}


