// ##############BOARD TEMPLATES START################# //
function templateOfNewTaskToDo(taskTodo, i) {
    return `
    <div onclick="openImportantTaskTodo(${i})" class="main-task-container" draggable="true">
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
                <div id="solo-worker" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <span class="worker-name-start-letters">EB</span>
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
    <div onclick="openImportantTaskProgress(${j})" class="main-task-container" draggable="true">
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
                    <span class="worker-name-start-letters">EB</span>
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
    <div onclick="openImportantTaskFeedback(${k})" class="main-task-container" draggable="true">
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
                    <span class="worker-name-start-letters">EB</span>
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
    <div onclick="openImportantTaskDone(${l})" class="main-task-container" draggable="true">
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
                    <span class="worker-name-start-letters">EB</span>
                </div>
            </div>
        <div id="prio-img-done" class="prio-img">
            <img id="prio-img-done${l}" src="./img/board/prio-${taskDone.priority}.png">
        </div>
    </div>
</div>`
}

function templateImportantTaskTodo(importantTaskTodo, m){ // i
    return `
    <div id="main-important-task-container-todo${m}" class="main-important-task-container"> <!-- d-none muss noch hier rein -->
        <div onclick="closeImportantTaskTodo(${m})" class="close-important-task"><img src="./img/board/close.png"></div>
        <div class="important-task-headline">
            <h4>${importantTaskTodo.category}</h4>
        </div>
        <div class="important-task-title">
            <h2>${importantTaskTodo.title}</h2>
        </div>
        <div class="important-task-description">
            <span>${importantTaskTodo.description}</span>
        </div>
        <div class="important-task-date">
            <table>
                <tr>
                    <td>Due date:</td>
                    <td>${importantTaskTodo.dueDate}</td>
                </tr>
            </table>
        </div>
        <div class="important-task-prio">
            <table>
                <tr>
                    <td>Priority:</td>
                    <td>${importantTaskTodo.priority}</td>
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
    </div>`
}

function templateImportantTaskProgress(j){ // j
    return `
    <div id="main-important-task-container-progress${j}" class="main-important-task-container d-none">
        <div onclick="closeImportantTaskProgress(${j})" class="close-important-task"><img src="./img/board/close.png"></div>
        <div class="important-task-headline">
            <h4>${importantTasksProgress[j].category}</h4>
        </div>
        <div class="important-task-title">
            <h2>${importantTasksProgress[j].title}</h2>
        </div>
        <div class="important-task-description">
            <span>${importantTasksProgress[j].description}</span>
        </div>
        <div class="important-task-date">
            <table>
                <tr>
                    <td>Due date:</td>
                    <td>${importantTasksProgress[j].dueDate}</td>
                </tr>
            </table>
        </div>
        <div class="important-task-prio">
            <table>
                <tr>
                    <td>Priority:</td>
                    <td>${importantTasksProgress[j].priority}</td>
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
    </div>`
}

function templateImportantTaskFeedback(importantTaskFeedback, o){ // k
    return `
    <div id="main-important-task-container-feedback${o}" class="main-important-task-container d-none">
        <div onclick="closeImportantTaskFeedback(${o})" class="close-important-task"><img src="./img/board/close.png"></div>
        <div class="important-task-headline">
            <h4>${importantTaskFeedback.category}</h4>
        </div>
        <div class="important-task-title">
            <h2>${importantTaskFeedback.title}</h2>
        </div>
        <div class="important-task-description">
            <span>${importantTaskFeedback.description}</span>
        </div>
        <div class="important-task-date">
            <table>
                <tr>
                    <td>Due date:</td>
                    <td>${importantTaskFeedback.dueDate}</td>
                </tr>
            </table>
        </div>
        <div class="important-task-prio">
            <table>
                <tr>
                    <td>Priority:</td>
                    <td>${importantTaskFeedback.priority}</td>
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
    </div>`
}

function templateImportantTaskDone(importantTaskDone, n){ // importantTask, m
    return `
    <div id="main-important-task-container-done${n}" class="main-important-task-container d-none">
        <div onclick="closeImportantTaskDone(${n})" class="close-important-task"><img src="./img/board/close.png"></div>
        <div class="important-task-headline">
            <h4>${importantTaskDone.category}</h4>
        </div>
        <div class="important-task-title">
            <h2>${importantTaskDone.title}</h2>
        </div>
        <div class="important-task-description">
            <span>${importantTaskDone.description}</span>
        </div>
        <div class="important-task-date">
            <table>
                <tr>
                    <td>Due date:</td>
                    <td>${importantTaskDone.dueDate}</td>
                </tr>
            </table>
        </div>
        <div class="important-task-prio">
            <table>
                <tr>
                    <td>Priority:</td>
                    <td>${importantTaskDone.priority}</td>
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
    </div>`
}

// ##############BOARD TEMPLATES END################# //
