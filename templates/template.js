// ##############BOARD TEMPLATES START################# //
function templateOfNewTaskToDo(taskTodo, i) {
    return `
    <div id="todo-task${i}" onclick="openCurrentTaskBigBox(${i}, ['to do'])" ondragstart="startDragging(${taskTodo['id']}); dragHighlight(['todo'], ${i}); showEmptyPlaces(['progress'], ['feedback'], ['done'])"; ondragend="hideEmptyPlaces(['progress'], ['feedback'], ['done'])"; class="main-task-container"; draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-todo${i}" class="headline-solo-task"><h3 id="headline-task-todo${i}">${taskTodo.category}</h3></div>
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
    <div id="progress-task${j}" onclick="openCurrentTaskBigBox(${j}, ['in progress'])" ondragstart="startDragging(${taskProgress['id']}); dragHighlight(['progress'], ${j}); showEmptyPlaces(['todo'], ['feedback'], ['done'])"; ondragend="hideEmptyPlaces(['todo'], ['feedback'], ['done'])"; class="main-task-container" draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-progress${j}" class="headline-solo-task"><h3 id="headline-task-progress${j}">${taskProgress.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskProgress.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskProgress.description}">${taskProgress.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker" class="solo-worker">
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
    <div id="feedback-task${k}" onclick="openCurrentTaskBigBox(${k}, ['awaiting feedback'])" ondragstart="startDragging(${taskFeedback['id']}); dragHighlight(['feedback'], ${k}); showEmptyPlaces(['todo'], ['progress'], ['done'])"; ondragend="hideEmptyPlaces(['todo'], ['progress'], ['done'])"; class="main-task-container" draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-feedback${k}" class="headline-solo-task"><h3 id="headline-task-feedback${k}">${taskFeedback.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskFeedback.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskFeedback.description}">${taskFeedback.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker" class="solo-worker">
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
    <div id="done-task${l}" onclick="openCurrentTaskBigBox(${l}, ['done'])" ondragstart="startDragging(${taskDone['id']}); dragHighlight(['done'], ${l}); showEmptyPlaces(['todo'], ['progress'], ['feedback'])"; ondragend="hideEmptyPlaces(['todo'], ['progress'], ['feedback'])"; class="main-task-container" draggable="true">
        <div class="headline-category">
            <div id="headline-solo-task-done${l}" class="headline-solo-task"><h3 id="headline-task-done${l}">${taskDone.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${taskDone.title}</span>
        </div>
        <div class="task-description">
            <span title="${taskDone.description}">${taskDone.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker" class="solo-worker">
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

function templateBigBoxSoloTask(soloTasks, indexOfSoloTask){
    return `
    <div id="big-box-solo-task" class="main-big-box-task-container">
        <div onclick="closeSoloTaskBigBox(${indexOfSoloTask})" class="close-big-box-task"><img src="./img/board/close.png"></div>
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
        <div id="edit-button" onmouseover="changeEditContainerColors()" onmouseleave="RemoveEditContainerColors()" class="edit-button d-center"><img id="edit-pencil" src="./img/board/pencil.png"></div>
    </div>`
}

// BREAK BIG BOX TEMPLATE

// SEARCH TASK TEMPLATE 

function templateOfSearchTask(taskSearch, index) {
    return `
    <div id="search-task${index}" onclick="openCurrentTaskBigBoxOnSearch(${index}, ['${taskSearch.status.toLowerCase()}'])"; class="main-task-container">
        <div class="headline-category">
            <div id="headline-solo-task-search${index}" class="headline-solo-task"><h3 id="headline-task-search${index}">${taskSearch.category}</h3></div>
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
