//TESTBRANCH
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