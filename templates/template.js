// ##############BOARD TEMPLATES START################# //
function templateOfNewTaskToDo(taskTodo, i) {
    return `
    <div id="todo-task${i}" onclick="openCurrentTaskBigBox(${i}, ['to do'], '${taskTodo.categorycolor}'); showCurrentWorkersBigBox(${i}, 'todo');" ondragstart="startDragging(${taskTodo['id']}); dragHighlight(['todo'], ${i}); showEmptyPlaces(['progress'], ['feedback'], ['done'])"; ondragend="hideEmptyPlaces(['progress'], ['feedback'], ['done'])"; class="main-task-container"; draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-todo${i}" class="headline-solo-task" style="background:${taskTodo.categorycolor}"><h3 id="headline-task-todo${i}">${taskTodo.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskTodo.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskTodo.description}">${taskTodo.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker-todo${i}" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                </div>
            </div>
        <div id="prio-img-todo" class="prio-img">
            <img id="prio-img-todo${i}" src="./img/board/prio-${taskTodo.priority}.png">
        </div>
    </div>
</div>`
}

function templateOfTaskInProgress(taskProgress, j) {
    return `
    <div id="progress-task${j}" onclick="openCurrentTaskBigBox(${j}, ['in progress'], '${taskProgress.categorycolor}'); showCurrentWorkersBigBox(${j}, 'progress');" ondragstart="startDragging(${taskProgress['id']}); dragHighlight(['progress'], ${j}); showEmptyPlaces(['todo'], ['feedback'], ['done'])"; ondragend="hideEmptyPlaces(['todo'], ['feedback'], ['done'])"; class="main-task-container" draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-progress${j}" class="headline-solo-task" style="background:${taskProgress.categorycolor}"><h3 id="headline-task-progress${j}">${taskProgress.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskProgress.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskProgress.description}">${taskProgress.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker-progress${j}" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <div class="worker-name-start-letters d-center">EB</div>
                </div>
            </div>
        <div id="prio-img-progress" class="prio-img">
            <img id="prio-img-progress${j}" src="./img/board/prio-${taskProgress.priority}.png">
        </div>
    </div>
</div>`
}

function templateOfTaskFeedback(taskFeedback, k) {
    return `
    <div id="feedback-task${k}" onclick="openCurrentTaskBigBox(${k}, ['awaiting feedback'], '${taskFeedback.categorycolor}'); showCurrentWorkersBigBox(${k}, 'feedback');" ondragstart="startDragging(${taskFeedback['id']}); dragHighlight(['feedback'], ${k}); showEmptyPlaces(['todo'], ['progress'], ['done'])"; ondragend="hideEmptyPlaces(['todo'], ['progress'], ['done'])"; class="main-task-container" draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-feedback${k}" class="headline-solo-task" style="background:${taskFeedback.categorycolor}"><h3 id="headline-task-feedback${k}">${taskFeedback.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskFeedback.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskFeedback.description}">${taskFeedback.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker-feedback${k}" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <div class="worker-name-start-letters d-center">EB</div>
                    <div class="worker-name-start-letters d-center">TU</div>
                </div>
            </div>
        <div id="prio-img-feedback" class="prio-img">
            <img id="prio-img-feedback${k}" src="./img/board/prio-${taskFeedback.priority}.png">
        </div>
    </div>
</div>`
}

function templateOfTaskDone(taskDone, l) {
    return `
    <div id="done-task${l}" onclick="openCurrentTaskBigBox(${l}, ['done'], '${taskDone.categorycolor}'); showCurrentWorkersBigBox(${l}, 'done');" ondragstart="startDragging(${taskDone['id']}); dragHighlight(['done'], ${l}); showEmptyPlaces(['todo'], ['progress'], ['feedback'])"; ondragend="hideEmptyPlaces(['todo'], ['progress'], ['feedback'])"; class="main-task-container" draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-done${l}" class="headline-solo-task" style="background:${taskDone.categorycolor}"><h3 id="headline-task-done${l}">${taskDone.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskDone.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskDone.description}">${taskDone.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker-done${l}" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <div class="worker-name-start-letters d-center">EB</div>
                    <div class="worker-name-start-letters d-center">EB</div>
                </div>
            </div>
        <div id="prio-img-done" class="prio-img">
            <img id="prio-img-done${l}" src="./img/board/prio-${taskDone.priority}.png">
        </div>
    </div>
</div>`
}

function templateBigBoxSoloTask(soloTasks, indexOfSoloTask) {
    return `
    <div id="big-box-solo-task" class="main-big-box-task-container">
        <div onclick="closeSoloTaskBigBox(${indexOfSoloTask})" class="close-big-box-task c-pointer"><img class="close-task" src="./img/board/close.png"><img class="close-task-phone" src="img/board/back_phone.png"></div>
        <div id="big-box-task-headline" class="big-box-task-headline">
            <div><h4 class="d-center" id="big-box-headline">${soloTasks[indexOfSoloTask].category}</h4></div>
        </div>
        <div class="big-box-task-title">
            <span><h2>${soloTasks[indexOfSoloTask].title}</h2></span>
        </div>
        <div class="big-box-task-description">
            <span>${soloTasks[indexOfSoloTask].description}</span>
        </div>
        <div class="big-box-task-date">
            <table>
                <tr>
                    <td>Due date:</td>
                    <td>${soloTasks[indexOfSoloTask].dueDate}</td>
                </tr>
            </table>
        </div>
        <div class="big-box-task-prio">
            <table>
                <tr>
                    <td>Priority:</td>
                    <td id="priority-big-box-color">${soloTasks[indexOfSoloTask].priority}</td>
                </tr>
            </table>
        </div>
        <div class="main-assigned-to">
            <div class="assigned-to-headline">
                <h4>Assigned To:</h4>
            </div>
            <div id="current-workers" class="assigned-to-workers">
            </div>
        </div>
        <div onclick="editCurrentTask(${soloTasks[indexOfSoloTask].id}); showAllPossibleWorkers();" id="edit-button${indexOfSoloTask}" onmouseover="changeEditContainerColors(${indexOfSoloTask})" onmouseleave="RemoveEditContainerColors(${indexOfSoloTask})" class="edit-button d-center c-pointer"><img id="edit-pencil${indexOfSoloTask}" src="./img/board/pencil.png"></div>
    </div>`
}

function templateOfSearchTask(taskSearch, index) {
    return `
    <div id="search-task${index}" onclick="openCurrentTaskBigBoxOnSearch(${index}, ['${taskSearch.status.toLowerCase()}'], '${taskSearch.categorycolor}')"; class="main-task-container">
        <div class="headline-category">
            <div id="headline-solo-task-search${index}" class="headline-solo-task" style="background:${taskSearch.categorycolor}"><h3 id="headline-task-search${index}">${taskSearch.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskSearch.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskSearch.description}">${taskSearch.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <div class="worker-name-start-letters d-center"></div>

                </div>
            </div>
        <div id="prio-img-search" class="prio-img">
            <img id="prio-img-search${index}" src="./img/board/prio-${taskSearch.priority}.png">
        </div>
    </div>
</div>`
}

function templateEditCurrentTask(currentTask, idOfCurrentTask) {
    return `
    <form onsubmit="submitChanges(${idOfCurrentTask}); return false; checkCheckboxes();">
        <div id="main-edit-container" class="main-edit-container">
            <div class="edit-headline">
                <h3>Title</h3>
                <input required type="text" id="edit-title" onclick="clearPlaceholder('title', 'Enter a title', '${currentTask.title}')" class="edit-container-inputstyle c-pointer" placeholder="${currentTask.title}">
            </div>

            <div class="edit-description">
                <h3>Description</h3>
                <textarea required type="text" id="edit-description" onclick="clearPlaceholder('description', 'Enter a description', '${currentTask.description}')" placeholder="${currentTask.description}"></textarea>
            </div>

            <div class="edit-date">
                <h3>Due date</h3>
                <input required id="edit-date" type="date" class="edit-container-inputstyle c-pointer" placeholder="${currentTask.dueDate.replaceAll('-', '.')}">
            </div>

            <div class="edit-prio">
                <h3>Prio</h3>
                <div class="edit-prio-subcontainer">

                    <div id="prio-urgent-container" class="edit-prioclass c-pointer">
                        <input required type="radio" id="change-prio-urgent" name="prioclass" value="Urgent">
                        <label class="d-cemter c-pointer" for="change-prio-urgent" id="urgent-prio" onclick="changePrioTo(['Urgent'])" class="prio-label-urgent" for="urgent">Urgent<img id="urgent-img" src="./img/board/urgent-addtask.png"></label>
                    </diV>
    
                    <div id="prio-medium-container" class="edit-prioclass c-pointer">
                        <input required type="radio" id="change-prio-medium" name="prioclass" value="Medium">
                        <label class="d-cemter c-pointer" for="change-prio-medium" id="medium-prio" onclick="changePrioTo(['Medium'])" class="prio-label-medium" for="medium">Medium<img id="medium-img" src="./img/board/medium-addtask.png"></label>
                    </diV>
    
                    <div id="prio-low-container" class="edit-prioclass c-pointer">
                        <input required type="radio" id="change-prio-low" name="prioclass" value="Low">
                        <label class="d-cemter c-pointer" for="change-prio-low" id="low-prio" onclick="changePrioTo(['Low'])" class="prio-label-low" for="low">Low<img id="low-img" src="./img/board/low-addtask.png"></label>
                    </div>
                </div>
            </div>

            <div class="edit-assignedTo">
                <h3>Assigned to</h3>
                <div id="big-box-workers-output" class="big-box-workers-output">

                </div>
                <div id="edit-assignedTo-subcontainer" class="edit-assignedTo-subcontainer c-pointer">
                    <div onclick="showCompleteContainer()">Select contacts to assign<img id="dropdown-img" src="./img/board/dropdown.png"><input required class="checkCheckboxes" id="checkCheckboxes"></div>
                    <div id="edit-workers" class="edit-workers d-none">
                        <div onclick="submitCheckbox('-1')" class="solo-contact"><label>You</label><input name="users" id="checkbox--1" type="checkbox"></div>
                    </div>
                </div>
            </div>   

            <div class="change-edit-button">
                <button class="c-pointer" type="submit"><div>Ok</div><img src="./img/check_white.png"></button>
            </div>

            <div class="close-edit-container c-pointer"><img onclick="closeEditContainer()" src="./img/board/close.png">
        </div>
    </form>`
}

function templateShowAllWorkers(indexOfUsers, userName) {
    return `
    <div onclick="submitCheckbox(${indexOfUsers})" class="solo-contact"><label>${userName}</label><input name="users" id="checkbox-${indexOfUsers}" type="checkbox"></div>`
}

// ################################ BOARD TEMPLATE END ################################################### 

// ################################ ADD TASK TEMPLATE START ################################################### 



function userInAssigned(userName, indexOfUsers) {
    return /*html*/`
    <div onclick="assingCheckbox(${indexOfUsers})" class="solo-assigned"><label>${userName}</label><input name="users" id="checkbox-${indexOfUsers}" type="checkbox"></div>`
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

function subtaskListHTML(indexOfSubtask) {
    let subtask = subtasks[indexOfSubtask];
    return /*html*/`
        <div onclick="subtasksCheckbox(${indexOfSubtask})" class="subtask-list-form-check">
          <input class="subtask-list-input" type="checkbox" value="" id="${subtask}-${indexOfSubtask}">
            <label class="subtask-list-label" for="flexCheckDefault" id="${subtask}${indexOfSubtask}">
              ${subtask}
            </label>
          </div>`;
}

function loadAssignedHTML() {
    return /*html*/`
    <div onclick="openAssign()" id="dropbtnAssign" class="dropbtn-assign" type="button">Select contacts to assign<img src="./img/addtask/dropdown-Vector.png" alt=""><input required class="checkCheckboxes" id="assignedInput"></div>
    <div id="assignDropdown" class="dropdown-content">
        <!-- <span class="d-flex menu-option hover"><label class="assign-label" for="You">
            You</label> <input required id="You" value="" class="assign-input" type="checkbox"></span>
        <span class="d-flex menu-option hover"><label class="assign-label" for="Mustermann">
            Max Mustermann</label> <input id="Mustermann" value="" class="assign-input"  type="checkbox"></span>
        <span class="d-flex menu-option hover"><label class="assign-label" for="Musterhaus">
            Fanz Musterhaus</label> <input id="Musterhaus" value="" class="assign-input" type="checkbox"></span>
        <div onclick="switchToSearchInput()"class="switchToSearch-btn-assign hover" type="button">Select contacts to assign<img class="black-icon" src="./img/addtask/newContactIcon.png" alt=""></div>
    </div> -->
    <!-- 
    <div onclick="showCompleteContainer()">Select contacts to assign<img id="dropdown-img" src="./img/board/dropdown.png"></div>
        <div id="edit-workers" class="edit-workers d-none">
                        <div onclick="submitCheckbox('-1')" class="solo-contact"><label>You</label><input name="users" id="checkbox--1" type="checkbox"></div>
                    </div>
                </div> -->
    
    `;
}


// 

function searchEmailInputHTML() {
    return /*html*/`
    <div class="input-group">
    
      <input id="search-input" type="searc h" id="form1" class="form-control" placeholder="Contact eMail "/>
      <button onclick="backToSelectContacts()" id="subtaskDelete" class="" type="button">
      <img src="./img/addtask/x-vector.png" alt=""></button>
      <div id="subtask-separator-line" class="subtask-separator-line"></div>
      <button onclick="pushNewCategory()" id="subtaskAdd" class="subtasks-right-butten" type="button">
      <img class="ok-vector" src="./img/addtask/ok-vector.png" alt=""></button>
  
    
    
    </button>
  </div>
    `;
}

// ################################ ADD TASK TEMPLATE END ################################################### 


function templateAssignedToOfSoloTask(firstName, lastName){
    return `
    <div class="worker-name-start-letters d-center">${firstName}${lastName}</div>`
}

function templateCurrentWorkersOfTasksBigBox(firstName, lastName, fullName){
    return `
    <div class="solo-worker-big-box"><div class="worker-name-start-letters-edit d-center">${firstName.charAt(0)}${lastName.charAt(0)}</div><div class="edit-worker-fullname">${fullName}</div>`
}


