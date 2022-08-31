function renderBoard() {
    renderToDo();
    renderProgress();
    renderTesting();
    renderDone();
}

function renderToDo() {
    let todoOutput = document.getElementById('category-todo');
    let todos = tasks.filter(status => status.status == 'todo');
    //console.log(todo);
    todoOutput.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        todoOutput.innerHTML += templateOfNewTaskToDo(todo, i);
    }
}

function renderProgress() {
    let inProgressOutput = document.getElementById('category-progress');
    let progress = tasks.filter(status => status.status == 'inprogress');
    //console.log(progress);
    inProgressOutput.innerHTML = '';

    for (let j = 0; j < progress.length; j++) {
        const taskProgress = progress[j];
        inProgressOutput.innerHTML += templateOfTaskInProgress(taskProgress, j);
    }
}

function renderTesting() {
    let testingOutput = document.getElementById('category-testing');
    let testing = tasks.filter(status => status.status == 'testing');
    console.log(testing);
    testingOutput.innerHTML = '';

    for (let k = 0; k < testing.length; k++) {
        const taskTest = testing[k];
        testingOutput.innerHTML += templateOfTaskTesing(taskTest, k);
    }
}

function renderDone() {
    let doneOutput = document.getElementById('category-done');
    let doneTasks = tasks.filter(status => status.status == 'done');
    console.log(doneTasks);
    doneOutput.innerHTML = '';

    for (let l = 0; l < doneTasks.length; l++) {
        const doneTask = doneTasks[l];
        doneOutput.innerHTML += templateOfTaskDone(doneTask, l);
    }
}

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

function showTaskDetailsToDo(i) {
    document.getElementById(`main-task-todo${i}`).classList.toggle('twohundert-height');
    document.getElementById(`task-details-todo${i}`).classList.toggle('d-none');
}

function showTaskDetailsProgress(j){
    document.getElementById(`main-task-progress${j}`).classList.toggle('twohundert-height');
    document.getElementById(`task-details-progress${j}`).classList.toggle('d-none');
}

function showTaskDetailsTesting(k){
    document.getElementById(`main-task-testing${k}`).classList.toggle('twohundert-height');
    document.getElementById(`task-details-testing${k}`).classList.toggle('d-none');
}

function showTaskDetailsDone(l){
    document.getElementById(`main-task-done${l}`).classList.toggle('twohundert-height');
    document.getElementById(`task-details-done${l}`).classList.toggle('d-none');
}

function deleteTask(i){
}