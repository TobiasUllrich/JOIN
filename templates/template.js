function templateOfNewTaskToDo(todo ,i) {
    return `
    <div id="main-task-todo${i}" class="main-task border-left-red" onclick="showTaskDetailsToDo(${i})">
        <div class="task-headline">
            <div><img class="task-image" src="./img/todo.png"></div>
            <div class="task-titel">
                <h3>${todo.title}</h3>
                <span>${todo.dueDate}</span>
            </div>
            <div class="delete-btn"><img onclick=deleteTask(${i}) class="delete-img" title="Delete Task" src="./img/delete.png"></div>
        </div>

        <div id="task-details-todo${i}" class="task-details d-none">
            <table>
                <tr>
                    <td><b>Description:</b></td>
                    <td title="${todo.description}"><div class="task-description">${todo.description}</div></td>
                </tr>

                <tr>
                    <td><b>Category:</b></td>
                    <td>${todo.category}</td>
                </tr>

                <tr>
                    <td><b>Urgency:</b></td>
                    <td>${todo.urgency}</td>
                </tr>

                <tr>
                    <td><b>Assigned to:</b></td>
                    <td>${todo.assignedTo}</td>
                </tr>
            </table>
        </div>
    </div>`
}

function templateOfTaskInProgress(taskProgress, j) {
    return `
    <div id="main-task-progress${j}" class="main-task border-left-yellow" onclick="showTaskDetailsProgress(${j})">
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

function templateOfTaskTesing(taskTest, k){
    return `
    <div id="main-task-testing${k}" class="main-task border-left-blue" onclick="showTaskDetailsTesting(${k})">
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

function templateOfTaskDone(doneTask, l){
    return `
    <div id="main-task-done${l}" class="main-task border-left-green" onclick="showTaskDetailsDone(${l})">
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