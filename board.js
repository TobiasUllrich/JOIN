function renderBoard() {
    renderToDo();
    renderProgress();
    renderTesting();
    renderDone();
}

function renderToDo() {
    let todoOutput = document.getElementById('category-todo');
    let todo = tasks.filter(status => status.status == 'todo');
    //console.log(todo);
    todoOutput.innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        const toDoTask = todo[i];
        todoOutput.innerHTML += templateOfNewTaskToDo(toDoTask, i)
    }
}

function renderProgress() {

}

function renderTesting() {

}

function renderDone() {

}

function templateOfNewTaskToDo(toDoTask ,i) { // INDEX MUSS NOCH ÜBERGEBEN WERDEN
    return `
    <div id="main-task${i}" class="main-task border-left-red" onclick="showTaskDetails(${i})">
        <div class="task-headline">
            <div><img class="task-image" src="./img/todo.png"></div>
            <div class="task-titel">
                <h3>${toDoTask.title}</h3>
                <span>${toDoTask.dueDate}</span>
            </div>
            <div class="delete-btn"><img onclick=deleteTask(${i}) class="delete-img" title="Delete Task" src="./img/delete.png"></div>
        </div>

        <div id="task-details${i}" class="task-details d-none">
            <table>
                <tr>
                    <td><b>Description:</b></td>
                    <td title="${toDoTask.description}"><div class="task-description">${toDoTask.description}</div></td>
                </tr>

                <tr>
                    <td><b>Category:</b></td>
                    <td>${toDoTask.category}</td>
                </tr>

                <tr>
                    <td><b>Urgency:</b></td>
                    <td>${toDoTask.urgency}</td>
                </tr>

                <tr>
                    <td><b>Assigned to:</b></td>
                    <td>${toDoTask.assignedTo}</td>
                </tr>
            </table>
        </div>
    </div>`
}

function showTaskDetails(i) {
    document.getElementById(`main-task${i}`).classList.toggle('twohundert-height'); // Hier muss der ID noch der Index übergeben werden
    document.getElementById(`task-details${i}`).classList.toggle('d-none');
}

function deleteTask(i){
}