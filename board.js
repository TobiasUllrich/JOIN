function renderBoard() {
    renderToDo();
    renderProgress();
    renderTesting();
    renderDone();
}

function renderToDo() {
    let todoOutput = document.getElementById('category-todo');
    let todos = tasksScript.filter(status => status.status == 'To do');
    todoOutput.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        todoOutput.innerHTML += templateOfNewTaskToDo(todo, i);
    }
}

function renderProgress() {
    let inProgressOutput = document.getElementById('category-progress');
    let progress = tasksScript.filter(status => status.status == 'inprogress');
    inProgressOutput.innerHTML = '';

    for (let j = 0; j < progress.length; j++) {
        const taskProgress = progress[j];
        inProgressOutput.innerHTML += templateOfTaskInProgress(taskProgress, j);
    }
}

function renderTesting() {
    let testingOutput = document.getElementById('category-testing');
    let testing = tasksScript.filter(status => status.status == 'testing');
    testingOutput.innerHTML = '';

    for (let k = 0; k < testing.length; k++) {
        const taskTest = testing[k];
        testingOutput.innerHTML += templateOfTaskTesting(taskTest, k);
    }
}

function renderDone() {
    let doneOutput = document.getElementById('category-done');
    let doneTasks = tasksScript.filter(status => status.status == 'done');
    doneOutput.innerHTML = '';

    for (let l = 0; l < doneTasks.length; l++) {
        const doneTask = doneTasks[l];
        doneOutput.innerHTML += templateOfTaskDone(doneTask, l);
    }
}