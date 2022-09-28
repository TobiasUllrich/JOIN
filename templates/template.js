// ##############BOARD TEMPLATES START################# //
function templateOfNewTaskToDo(taskTodo, i) {
    return `
    <div id="todo-task${i}" onclick="openCurrentTaskBigBox(${i}, ['to do'], '${taskTodo.categorycolor}')" ondragstart="startDragging(${taskTodo['id']}); dragHighlight(['todo'], ${i}); showEmptyPlaces(['progress'], ['feedback'], ['done'])"; ondragend="hideEmptyPlaces(['progress'], ['feedback'], ['done'])"; class="main-task-container"; draggable="true">
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
    <div id="progress-task${j}" onclick="openCurrentTaskBigBox(${j}, ['in progress'], '${taskProgress.categorycolor}')" ondragstart="startDragging(${taskProgress['id']}); dragHighlight(['progress'], ${j}); showEmptyPlaces(['todo'], ['feedback'], ['done'])"; ondragend="hideEmptyPlaces(['todo'], ['feedback'], ['done'])"; class="main-task-container" draggable="true">
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
    <div id="feedback-task${k}" onclick="openCurrentTaskBigBox(${k}, ['awaiting feedback'], '${taskFeedback.categorycolor}')" ondragstart="startDragging(${taskFeedback['id']}); dragHighlight(['feedback'], ${k}); showEmptyPlaces(['todo'], ['progress'], ['done'])"; ondragend="hideEmptyPlaces(['todo'], ['progress'], ['done'])"; class="main-task-container" draggable="true">
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
    <div id="done-task${l}" onclick="openCurrentTaskBigBox(${l}, ['done'], '${taskDone.categorycolor}')" ondragstart="startDragging(${taskDone['id']}); dragHighlight(['done'], ${l}); showEmptyPlaces(['todo'], ['progress'], ['feedback'])"; ondragend="hideEmptyPlaces(['todo'], ['progress'], ['feedback'])"; class="main-task-container" draggable="true">
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

// BREAK SOLO TASK TEMPLATE

function templateBigBoxSoloTask(soloTasks, indexOfSoloTask) {
    return `
    <div id="big-box-solo-task" class="main-big-box-task-container">
        <div onclick="closeSoloTaskBigBox(${indexOfSoloTask})" class="close-big-box-task c-pointer"><img src="./img/board/close.png"></div>
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
            <div class="assigned-to-workers">
                <table>
                    <tr>
                        <td>NAMENKÜRZEL</td>
                        <td>VOLLSTÄNDIGER NAME</td>
                    </tr>
                </table>
            </div>
        </div>
        <div onclick="editCurrentTask(${soloTasks[indexOfSoloTask].id}); renderAssignedToEditTask();" id="edit-button${indexOfSoloTask}" onmouseover="changeEditContainerColors(${indexOfSoloTask})" onmouseleave="RemoveEditContainerColors(${indexOfSoloTask})" class="edit-button d-center c-pointer"><img id="edit-pencil${indexOfSoloTask}" src="./img/board/pencil.png"></div>
    </div>`
}

// BREAK BIG BOX TEMPLATE

// SEARCH TASK TEMPLATE 

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

// ##############BOARD TEMPLATES END################# //

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

function templateAssignedToOfSoloTask(firstName, lastName){
    return `
    <div class="worker-name-start-letters d-center">${firstName}${lastName}</div>`
}