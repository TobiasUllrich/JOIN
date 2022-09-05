// ##############BOARD TEMPLATES START################# //
function templateOfNewTaskToDo(todo, i) {
    return `
    <div class="main-task-container" draggable="true">
        <div class="headline-category">
            <div class="headline-solo-task"><h3>${todo.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${todo.title}</span>
        </div>
        <div class="task-description">ss
            <span title="${todo.description}">${todo.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <span class="worker-name-start-letters">EB</span>
                </div>
            </div>
        <div id="prio-img" class="prio-img">
            <img src="./img/board/prio-low.png">
        </div>
    </div>
</div>`
}

function templateOfTaskInProgress(taskProgress, j) {
    return `
    <div id="main-task-progress${j}" draggable="true" class="main-task border-left-yellow" onclick="showTaskDetailsProgress(${j})">
        <div class="task-headline">
            <div><img class="task-image" src="./img/inprogress.png"></div>
            <div class="task-titel">
                <h3>${taskProgress.title}</h3>
                <span>${taskProgress.dueDate}</span>
            </div>
            <div class="delete-btn"><img onclick=deleteTask(${j}) class="delete-img" title="Delete Task" src="./img/delete.png"></div>
        </div>

        <div id="task-details-progress${j}" class="task-details d-none">
            <table>
                <tr>
                    <td><b>Description:</b></td>
                    <td title="${taskProgress.description}"><div class="task-description">${taskProgress.description}</div></td>
                </tr>

                <tr>
                    <td><b>Category:</b></td>
                    <td>${taskProgress.category}</td>
                </tr>

                <tr>
                    <td><b>Urgency:</b></td>
                    <td>${taskProgress.urgency}</td>
                </tr>

                <tr>
                    <td><b>Assigned to:</b></td>
                    <td>${taskProgress.assignedTo}</td>
                </tr>
            </table>
        </div>
    </div>`
}

function templateOfTaskTesting(taskTest, k) {
    return `
    <div id="main-task-testing${k}" draggable="true" class="main-task border-left-blue" onclick="showTaskDetailsTesting(${k})">
        <div class="task-headline">
            <div><img class="task-image" src="./img/testing.png"></div>
            <div class="task-titel">
                <h3>${taskTest.title}</h3>
                <span>${taskTest.dueDate}</span>
            </div>
            <div class="delete-btn"><img onclick=deleteTask(${k}) class="delete-img" title="Delete Task" src="./img/delete.png"></div>
        </div>

        <div id="task-details-testing${k}" class="task-details d-none">
            <table>
                <tr>
                    <td><b>Description:</b></td>
                    <td title="${taskTest.description}"><div class="task-description">${taskTest.description}</div></td>
                </tr>

                <tr>
                    <td><b>Category:</b></td>
                    <td>${taskTest.category}</td>
                </tr>

                <tr>
                    <td><b>Urgency:</b></td>
                    <td>${taskTest.urgency}</td>
                </tr>

                <tr>
                    <td><b>Assigned to:</b></td>
                    <td>${taskTest.assignedTo}</td>
                </tr>
            </table>
        </div>
    </div>`
}

function templateOfTaskDone(doneTask, l) {
    return `
    <div id="main-task-done${l}" draggable="true" class="main-task border-left-green" onclick="showTaskDetailsDone(${l})">
        <div class="task-headline">
            <div><img class="task-image" src="./img/done.png"></div>
            <div class="task-titel">
                <h3>${doneTask.title}</h3>
                <span>${doneTask.dueDate}</span>
            </div>
            <div class="delete-btn"><img onclick=deleteTask(${l}) class="delete-img" title="Delete Task" src="./img/delete.png"></div>
        </div>

        <div id="task-details-done${l}" class="task-details d-none">
            <table>
                <tr>
                    <td><b>Description:</b></td>
                    <td title="${doneTask.description}"><div class="task-description">${doneTask.description}</div></td>
                </tr>

                <tr>
                    <td><b>Category:</b></td>
                    <td>${doneTask.category}</td>
                </tr>

                <tr>
                    <td><b>Urgency:</b></td>
                    <td>${doneTask.urgency}</td>
                </tr>

                <tr>
                    <td><b>Assigned to:</b></td>
                    <td>${doneTask.assignedTo}</td>
                </tr>
            </table>
        </div>
    </div>`
}

// ##############BOARD TEMPLATES END################# //