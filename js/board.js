let importantTasks = [];
let soloTasksTodo = [];
let soloTasksProgress = [];
let soloTasksFeedback = [];
let soloTasksDone = [];
let currentDraggingElement;
// let responseUsersJSON = {};

/* async function loadUsersJSON(){
    let usersJSON = await fetch('smallest_backend_ever/database.json');
    responseUsersJSON = await usersJSON.json();
    console.log(responseUsersJSON);
    renderBoard();
} */

async function renderBoard() {
    await init();
    await filterTasks();
    renderToDo();
    renderProgress();
    renderFeedback();
    renderDone();

}

function renderToDo() {
    let todoOutput = document.getElementById('category-todo');
    let todos = tasksScript.filter(status => status.status == 'To do');
    todoOutput.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const taskTodo = todos[i];
        todoOutput.innerHTML += templateOfNewTaskToDo(taskTodo, i);
        updateTasksHeadlinesStatus(i, ['todo']);
        renderAssignedNamesOfTask(i);
    }
}

function renderProgress() {
    let inProgressOutput = document.getElementById('category-progress');
    let progress = tasksScript.filter(status => status.status == 'In progress');
    inProgressOutput.innerHTML = '';

    for (let j = 0; j < progress.length; j++) {
        const taskProgress = progress[j];
        inProgressOutput.innerHTML += templateOfTaskInProgress(taskProgress, j);
        updateTasksHeadlinesStatus(j, ['progress']);
    }
}

function renderFeedback() {
    let feedbackOutput = document.getElementById('category-feedback');
    let feedback = tasksScript.filter(status => status.status == 'Awaiting feedback');
    feedbackOutput.innerHTML = '';

    for (let k = 0; k < feedback.length; k++) {
        const taskFeedback = feedback[k];
        feedbackOutput.innerHTML += templateOfTaskFeedback(taskFeedback, k);
        updateTasksHeadlinesStatus(k, ['feedback']);
    }
}

function renderDone() {
    let doneOutput = document.getElementById('category-done');
    let doneTasks = tasksScript.filter(status => status.status == 'Done');
    doneOutput.innerHTML = '';

    for (let l = 0; l < doneTasks.length; l++) {
        const taskDone = doneTasks[l];
        doneOutput.innerHTML += templateOfTaskDone(taskDone, l);
        updateTasksHeadlinesStatus(l, ['done']);
    }
}

function filterTasks() {
    importantTasks = tasksScript.filter(priority => priority.priority == 'Urgent'); // All important Tasks
    soloTasksTodo = tasksScript.filter(status => status.status == 'To do'); // All tasks todo
    soloTasksProgress = tasksScript.filter(status => status.status == 'In progress'); // All tasks in progress
    soloTasksFeedback = tasksScript.filter(status => status.status == 'Awaiting feedback'); // All tasks feedback
    soloTasksDone = tasksScript.filter(status => status.status == 'Done'); // All tasks done
}

function renderAssignedNamesOfTask(i) { // NOCH NICHT FERTIG ___ MUSS NOCH GESCHRIEBEN WERDEN
    let renderOutputContainer = document.getElementById(`solo-worker-todo${i}`);

    renderOutputContainer.innerHTML = '';
    renderOutputContainer.innerHTML += `<div class="worker-name-start-letters d-center"></div>`
    // ${users[soloTasksTodo[i].assignedTo[i]].name.charAt(0)};
    // ${users[soloTasksTodo[i].assignedTo[i]].surname.charAt(0)}; ## DAS IST DER CODE DER IN ZEILE 76 IN DIE DIV´S MUSS JEDOCH IST USERS UNDEFINED
}

function updateTasksHeadlinesStatus(indexOfTask, status) {
    let headlineTaskContainer = document.getElementById(`headline-solo-task-${status}${indexOfTask}`); // IndexOfTask & taskStatus
    let headlineText = document.getElementById(`headline-task-${status}${indexOfTask}`).innerHTML; // 

    if (headlineText == 'Design') {
        headlineTaskContainer.style.background = '#FF7A00';
    } else {
        if (headlineText == 'Sales') {
            headlineTaskContainer.style.background = '#FC71FF';
        } else {
            if (headlineText == 'Backoffice') {
                headlineTaskContainer.style.background = '#1FD7C1';
            } else {
                if (headlineText == 'Media') {
                    headlineTaskContainer.style.background = '#FFC701';
                } else {
                    if (headlineText == 'Marketing') {
                        headlineTaskContainer.style.background = '#0038FF';
                    }
                }
            }
        }
    }
}

function addTaskBoard() { // addTask existiert besreits in der main js, daher hier TEST
    let addTaskContainer = document.getElementById('main-add-task-container');
    removeDisplayNoneMainContainer(addTaskContainer);
}

function closeAddTaskContainer() {
    let addTaskContainer = document.getElementById('main-add-task-container');
    addDisplayNoneMainContainer(addTaskContainer);
}

function openCurrentTaskBigBox(indexOfSoloTask, statusTask) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    addOpacityToMainBackground();
    backgroundIsUnclickable();
    removeDisplayNoneMainContainer(bigBoxContainer);
    bigBoxContainer.innerHTML = '';

    if (statusTask == 'to do') {
        bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksTodo, indexOfSoloTask);
    } else {
        if (statusTask == 'in progress') {
            bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksProgress, indexOfSoloTask);
        } else {
            if (statusTask == 'awaiting feedback') {
                bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksFeedback, indexOfSoloTask);
            } else {
                if (statusTask == 'done') {
                    bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksDone, indexOfSoloTask);
                }
            }
        }
    }
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox();
}

function editCurrentTask(idOfCurrentTask){
    console.log(idOfCurrentTask);
    let currentTask = tasksScript[idOfCurrentTask];
    console.log(currentTask);

    let bigBoxContainer = document.getElementById('big-box-solo-task');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateEditCurrentTask(currentTask);
}

function openCurrentTaskBigBoxOnSearch(indexOfSoloTask, statusTask) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    addOpacityToMainBackground();
    backgroundIsUnclickable();
    removeDisplayNoneMainContainer(bigBoxContainer);
    bigBoxContainer.innerHTML = '';

    if (statusTask == 'to do') {
        bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasksScript, indexOfSoloTask);
    } else {
        if (statusTask == 'in progress') {
            bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasksScript, indexOfSoloTask);
        } else {
            if (statusTask == 'awaiting feedback') {
                bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasksScript, indexOfSoloTask);
            } else {
                if (statusTask == 'done') {
                    bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasksScript, indexOfSoloTask);
                }
            }
        }
    }
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox();
}

function closeSoloTaskBigBox() {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    addDisplayNoneMainContainer(bigBoxContainer);
    setOpacityBackgroundToNormal();
    removeUnclickableBackground();
}

function checkHeadlineColorBigBox() {
    let bigBoxHeadlineContainer = document.getElementById('big-box-task-headline');
    let bigBoxHeadlineText = document.getElementById('big-box-headline').innerHTML;

    if (bigBoxHeadlineText == 'Design') {
        bigBoxHeadlineContainer.style.background = '#FF7A00';
    } else {
        if (bigBoxHeadlineText == 'Sales') {
            bigBoxHeadlineContainer.style.background = '#FC71FF';
        } else {
            if (bigBoxHeadlineText == 'Backoffice') {
                bigBoxHeadlineContainer.style.background = '#1FD7C1';
            } else {
                if (bigBoxHeadlineText == 'Media') {
                    bigBoxHeadlineContainer.style.background = '#FFC701';
                } else {
                    if (bigBoxHeadlineText == 'Marketing') {
                        bigBoxHeadlineContainer.style.background = '#0038FF';
                    }
                }
            }
        }
    }
}

function checkPriorityBackgroundColor() {
    let prioBackgroundColor = document.getElementById('priority-big-box-color');

    if (prioBackgroundColor.innerHTML == 'Urgent') {
        prioBackgroundColor.style.background = '#ff5520';
    }

    if (prioBackgroundColor.innerHTML == 'Low') {
        prioBackgroundColor.style.background = '#7ae229';
    }

    if (prioBackgroundColor.innerHTML == 'Medium') {
        prioBackgroundColor.style.background = '#ffc85f';
    }
}



function searchTask() {
    let userSearch = document.getElementById('user-search').value.toLowerCase();

    for (let m = 0; m < tasksScript.length; m++) {
        const taskSearch = tasksScript[m];
        checkTermsOfSearch(userSearch, m, taskSearch);
    }
}

function enterEventSearchTask() {
    if (event.key === "Enter") {
        document.getElementById('search-task-btn').click();
    }
}

function checkTermsOfSearch(userSearch, m, taskSearch) {
    if (taskSearch.title.toLowerCase().includes(userSearch)) {
        if (taskSearch.status == 'To do') {
            searchInToDoContainer(taskSearch, m);
        } else {
            if (taskSearch.status == 'In progress') {
                seachInProgressContainer(taskSearch, m);
            } else {
                if (taskSearch.status == 'Awaiting feedback') {
                    seachInFeedbackContainer(taskSearch, m);
                } else {
                    if (taskSearch.status == 'Done') {
                        searchInDoneContainer(taskSearch, m);
                    }
                }
            }
        }
    }
}

function searchInToDoContainer(taskSearch, m) {
    document.getElementById('category-todo').innerHTML = '';
    document.getElementById('category-todo').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('progress', 'feedback', 'done');
    updateTasksHeadlinesStatus(m, ['search']);
}

function seachInProgressContainer(taskSearch, m) {
    document.getElementById('category-progress').innerHTML = '';
    document.getElementById('category-progress').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'feedback', 'done');
    updateTasksHeadlinesStatus(m, ['search']);
}

function seachInFeedbackContainer(taskSearch, m) {
    document.getElementById('category-feedback').innerHTML = '';
    document.getElementById('category-feedback').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'progress', 'done');
    updateTasksHeadlinesStatus(m, ['search']);
}

function searchInDoneContainer(taskSearch, m) {
    document.getElementById('category-done').innerHTML = '';
    document.getElementById('category-done').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'progress', 'feedback');
    updateTasksHeadlinesStatus(m, ['search']);
}

function checkEmptyField() {
    let userSearch = document.getElementById('user-search').value.toLowerCase();
    if (userSearch.length <= 1) {
        renderBoard();
    }
}

function hideOtherTasks(statusOne, statusTwo, statusThree) {
    document.getElementById(`category-${statusOne}`).innerHTML = '';
    document.getElementById(`category-${statusTwo}`).innerHTML = '';
    document.getElementById(`category-${statusThree}`).innerHTML = '';
}

function startDragging(id) {
    currentDraggingElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(newStatus) {
    if (newStatus == 'To do') {
        tasksScript[currentDraggingElement].status = newStatus;
    }
    if (newStatus == 'In progress') {
        tasksScript[currentDraggingElement].status = newStatus;
    }
    if (newStatus == 'Awaiting feedback') {
        tasksScript[currentDraggingElement].status = newStatus;
    }
    if (newStatus == 'Done') {
        tasksScript[currentDraggingElement].status = newStatus;
    }
    renderBoard();
}

function doNotClose(event) {
    event.stopPropagation();
}

function changeEditContainerColors(indexOfSoloTask) {
    let editContainer = document.getElementById(`edit-button${indexOfSoloTask}`);
    let editPencil = document.getElementById(`edit-pencil${indexOfSoloTask}`);

    makeContainerBlue(editContainer);
    makeImgWhite(editPencil);
}

function RemoveEditContainerColors(indexOfSoloTask) {
    let editContainer = document.getElementById(`edit-button${indexOfSoloTask}`);
    let editPencil = document.getElementById(`edit-pencil${indexOfSoloTask}`);

    removeContainerColorBlue(editContainer);
    makeImageColorDefault(editPencil);
}

function makeContainerBlue(container) {
    container.style.background = '#29ABE2';
}

function removeContainerColorBlue(container) {
    container.style.background = '#2a3647';
}

function makeImgWhite(image) {
    image.style.filter = 'filter: brightness(0) invert(1)';
}

function makeImageColorDefault(image) {
    image.style.filter = 'filter: brightness(0) invert(1)';
}

function addOpacityToMainBackground() {
    document.getElementById('main-board-container').style.opacity = '0.6';
}

function backgroundIsUnclickable() {
    document.getElementById('main-board-container').style.pointerEvents = 'none';
}

function setOpacityBackgroundToNormal() {
    document.getElementById('main-board-container').style.opacity = '1.0';
}

function removeUnclickableBackground() {
    document.getElementById('main-board-container').style.pointerEvents = 'all';
}

function removeDisplayNoneMainContainer(bigBoxContainer) {
    bigBoxContainer.classList.remove('d-none');
}

function addDisplayNoneMainContainer(bigBoxContainer) {
    bigBoxContainer.classList.add('d-none');
}

function dragHighlight(status, index) {
    document.getElementById(`${status}-task${index}`).classList.add('rotation');
}

function showEmptyPlaces(otherStatusOne, otherStatusTwo, otherStatusThree) {
    document.getElementById(`empty-space-${otherStatusOne}`).classList.remove('d-none');
    document.getElementById(`empty-space-${otherStatusTwo}`).classList.remove('d-none');
    document.getElementById(`empty-space-${otherStatusThree}`).classList.remove('d-none');
}

function hideEmptyPlaces(otherStatusOne, otherStatusTwo, otherStatusThree) {
    document.getElementById(`empty-space-${otherStatusOne}`).classList.add('d-none');
    document.getElementById(`empty-space-${otherStatusTwo}`).classList.add('d-none');
    document.getElementById(`empty-space-${otherStatusThree}`).classList.add('d-none');
}

function closeEditContainer(){
    document.getElementById('main-edit-container').classList.add('d-none');
    closeSoloTaskBigBox();
}

/* CODE TODO LEFT
    - Edit Task Function
    - Assigned To Render / mini Task and Big Task
    - Unscrollable Board - sticky Boardheadline ### FINISH
    - Search Funktion ### FINISH
    - Drag und Drop Function --> ### FINISH
    - Add Task Funktion --> Warten auf Eugen sein Code
*/
