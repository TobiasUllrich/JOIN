let subtasks = [];
let categorys = ['Sales', 'Backoffice'];
let categoryColors = ['#fc71ff', '#1fd7c1 '];
let assign = [];


function loadAddTastk() {
  loadCategory();
}

function loadCategory() {
  let categoryContainer = document.getElementById('categoryContainer');
  let allCategorys = document.getElementById('allCategorys');
  categoryContainer.innerHTML = '';
  categoryContainer.innerHTML = loadCategoryHTML();
  allCategorys.innerHTML = '';
  for (let i = 0; i < categorys.length; i++) {
    allCategorys.innerHTML += allCategorysHTML(`${i}`);
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
    document.getElementById('dropbtnCategory').classList.toggle('dropdown-border-bottom');
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function openAssign() {
    document.getElementById('assignDropdown').classList.toggle('show');
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  function addNewCategory() {
    let categoryContainer = document.getElementById('categoryContainer');
    categoryContainer.innerHTML = '';
    categoryContainer.innerHTML = newCategoryInputHTML();
  }


  function pushNewCategory() {
    let category = document.getElementById('newCategoryInput').value;
    if (category.length >= 1) {
      categorys.push(category);
      loadCategory()
    } else {
      loadCategory();
    }
  }

  //****************HTML*****************HTML*************HTML****************HTML */ 


  function loadCategoryHTML() {
    return /*html*/`
  <dt onclick="openCategory()" id="dropbtnCategory" class="dropbtn">Select task category <img src="./img/addtask/dropdown-Vector.png" alt=""></dt>
    <dd id="categoryDropdown" class="dropdown-content">
    <p onclick="addNewCategory()">New category</p>
    <div id="allCategorys">
    </div>
  </dd>`;
  }

  function allCategorysHTML(i) {
    return /*html*/`
    <p> ${i} </p>
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


  function newCategoryInputHTML() {
    return /*html*/`
          <div class="input-group">
            <input id="newCategoryInput" type="text" class="form-control" placeholder="New category name">
              <button onclick="loadCategory()" id="subtaskDelete" class="" type="button">
                <img src="./img/addtask/x-vector.png" alt=""></button>
              <div id="subtask-separator-line" class="subtask-separator-line"></div>
              <button onclick="pushNewCategory()" id="subtaskAdd" class="subtasks-right-butten" type="button">
              <img class="ok-vector" src="./img/addtask/ok-vector.png" alt=""></button>
          </div>
    `;
  }