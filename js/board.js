let importantTasks = [];
let soloTasksTodo = [];
let soloTasksProgress = [];
let soloTasksFeedback = [];
let soloTasksDone = [];
let currentDraggingElement;
let editNewPrio;
let assignedPeople = [];
let selectedWorkers = [];

async function loadInit() {
    await init();
    await filterTasks();
    renderBoard();
}

function renderBoard(){
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
        renderAssignedNamesOfTask(i, 'todo', soloTasksTodo);
    }
}

function renderProgress() {
    let inProgressOutput = document.getElementById('category-progress');
    let progress = tasksScript.filter(status => status.status == 'In progress');
    inProgressOutput.innerHTML = '';

    for (let j = 0; j < progress.length; j++) {
        const taskProgress = progress[j];
        inProgressOutput.innerHTML += templateOfTaskInProgress(taskProgress, j);
        renderAssignedNamesOfTask(j, 'progress', soloTasksProgress);
    }
}

function renderFeedback() {
    let feedbackOutput = document.getElementById('category-feedback');
    let feedback = tasksScript.filter(status => status.status == 'Awaiting feedback');
    feedbackOutput.innerHTML = '';

    for (let k = 0; k < feedback.length; k++) {
        const taskFeedback = feedback[k];
        feedbackOutput.innerHTML += templateOfTaskFeedback(taskFeedback, k);
        renderAssignedNamesOfTask(k, 'feedback', soloTasksFeedback);
    }
}

function renderDone() {
    let doneOutput = document.getElementById('category-done');
    let doneTasks = tasksScript.filter(status => status.status == 'Done');
    doneOutput.innerHTML = '';

    for (let l = 0; l < doneTasks.length; l++) {
        const taskDone = doneTasks[l];
        doneOutput.innerHTML += templateOfTaskDone(taskDone, l);
        renderAssignedNamesOfTask(l, 'done', soloTasksDone);
    }
}

function renderAssignedNamesOfTask(index, status, soloStatusArray) { // NOCH NICHT FERTIG ___ MUSS NOCH GESCHRIEBEN WERDEN
    let renderOutputContainer = document.getElementById(`solo-worker-${status}${index}`); // Index // status // soloTasksTodo
    renderOutputContainer.innerHTML = '';

    for(let x = 0; x < soloStatusArray[index].assignedTo.length; x++){
        let assUser = soloStatusArray[index].assignedTo[x];
        let object = getUserAsObject(assUser);
        let objectName = object.name.charAt(0);
        let objectSurname = object.surname.charAt(0);
        renderOutputContainer.innerHTML += templateAssignedToOfSoloTask(objectName, objectSurname);
    }
}

function filterTasks() {
    importantTasks = tasksScript.filter(priority => priority.priority == 'Urgent'); // All important Tasks
    soloTasksTodo = tasksScript.filter(status => status.status == 'To do'); // All tasks todo
    soloTasksProgress = tasksScript.filter(status => status.status == 'In progress'); // All tasks in progress
    soloTasksFeedback = tasksScript.filter(status => status.status == 'Awaiting feedback'); // All tasks feedback
    soloTasksDone = tasksScript.filter(status => status.status == 'Done'); // All tasks done
}

function addTaskBoard() {
    let addTaskContainer = document.getElementById('main-add-task-container');
    removeDisplayNoneMainContainer(addTaskContainer);
}

function closeAddTaskContainer() {
    let addTaskContainer = document.getElementById('main-add-task-container');
    addDisplayNoneMainContainer(addTaskContainer);
}

function openCurrentTaskBigBox(indexOfSoloTask, statusTask, categorycolor) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.innerHTML = '';
    addOpacityToMainBackground();
    backgroundIsUnclickable();
    removeDisplayNoneMainContainer(bigBoxContainer);
    checkStatusOfTask(statusTask, bigBoxContainer, indexOfSoloTask);
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox(categorycolor);
}

function checkStatusOfTask(statusTask, bigBoxContainer, indexOfSoloTask) {
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
}

function editCurrentTask(idOfCurrentTask) {
    let currentTask = tasksScript[idOfCurrentTask];

    let bigBoxContainer = document.getElementById('big-box-solo-task');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateEditCurrentTask(currentTask, idOfCurrentTask);
}

function showCurrentWorkersBigBox(indexOfTask, statusOfTask) {
    if(statusOfTask == 'todo'){
        renderCurrentWorkersBigBox(indexOfTask, soloTasksTodo);
    }
    if(statusOfTask == 'progress'){
        renderCurrentWorkersBigBox(indexOfTask, soloTasksProgress);
    }
    if(statusOfTask == 'feedback'){
        renderCurrentWorkersBigBox(indexOfTask, soloTasksFeedback);
    }
    if(statusOfTask == 'done'){
        renderCurrentWorkersBigBox(indexOfTask, soloTasksDone);
    }
}

function renderCurrentWorkersBigBox(indexOfTask, statusTasksArray){
    let currentTaskWorkers = document.getElementById(`current-workers`);
    currentTaskWorkers.innerHTML = '';
    for(let x = 0; x < statusTasksArray[indexOfTask].assignedTo.length; x++){
        let assUser = statusTasksArray[indexOfTask].assignedTo[x];
        let object = getUserAsObject(assUser);
        let objectName = object.name;
        let objectSurname = object.surname;
        currentTaskWorkers.innerHTML += templateCurrentWorkersOfTasksBigBox(objectName, objectSurname, objectName);
    }
}

function openCurrentTaskBigBoxOnSearch(indexOfSoloTask, statusTask, categorycolor) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.innerHTML = '';
    addOpacityToMainBackground();
    backgroundIsUnclickable();
    removeDisplayNoneMainContainer(bigBoxContainer);
    checkStatusOfTaskOnSearch(statusTask, bigBoxContainer, indexOfSoloTask);
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox(categorycolor);
}

function checkStatusOfTaskOnSearch(statusTask, bigBoxContainer, indexOfSoloTask) {
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
}

function closeSoloTaskBigBox() {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    addDisplayNoneMainContainer(bigBoxContainer);
    setOpacityBackgroundToNormal();
    removeUnclickableBackground();
}

function checkHeadlineColorBigBox(categorycolor) {
    let bigBoxHeadlineContainer = document.getElementById('big-box-task-headline');
    bigBoxHeadlineContainer.style = `background:${categorycolor}`;
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
}

function seachInProgressContainer(taskSearch, m) {
    document.getElementById('category-progress').innerHTML = '';
    document.getElementById('category-progress').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'feedback', 'done');
}

function seachInFeedbackContainer(taskSearch, m) {
    document.getElementById('category-feedback').innerHTML = '';
    document.getElementById('category-feedback').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'progress', 'done');
}

function searchInDoneContainer(taskSearch, m) {
    document.getElementById('category-done').innerHTML = '';
    document.getElementById('category-done').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'progress', 'feedback');
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

function closeEditContainer() {
    document.getElementById('main-edit-container').classList.add('d-none');
    closeSoloTaskBigBox();
}

function changePrioTo(newPrio) {
    if (newPrio == 'Urgent') {
        changePrioToUrgent();
        editNewPrio = 'Urgent'
    }
    if (newPrio == 'Medium') {
        changePrioToMedium();
        editNewPrio = 'Medium'
    }
    if (newPrio == 'Low') {
        changePrioToLow();
        editNewPrio = 'Low'
    }
}

function changePrioToUrgent() {
    highlightClickedPrioContainer('urgent');
    removePossibleClickedPrioBefore('medium', 'low');
    removeImgFilter('medium');
    removeImgFilter('low');
}

function changePrioToMedium() {
    highlightClickedPrioContainer('medium');
    removePossibleClickedPrioBefore('urgent', 'low');
    removeImgFilter('urgent');
    removeImgFilter('low');
}

function changePrioToLow() {
    highlightClickedPrioContainer('low');
    removePossibleClickedPrioBefore('urgent', 'medium');
    removeImgFilter('urgent');
    removeImgFilter('medium');
}

function removePossibleClickedPrioBefore(otherPrioOne, otherPrioTwo) {
    document.getElementById(`prio-${otherPrioOne}-container`).classList.remove(`${otherPrioOne}-prio`);
    document.getElementById(`prio-${otherPrioTwo}-container`).classList.remove(`${otherPrioTwo}-prio`);
}

function removeImgFilter(imgPrio) {
    document.getElementById(`${imgPrio}-img`).style.filter = '';
}

function highlightClickedPrioContainer(prio) {
    document.getElementById(`prio-${prio}-container`).classList.add(`${prio}-prio`);
    document.getElementById(`prio-${prio}`)
    document.getElementById(`${prio}-img`).style.filter = 'brightness(0) invert(1)';
}

function showCompleteContainer() {
    document.getElementById('edit-assignedTo-subcontainer').classList.toggle('edit-assign-full-size');
    document.getElementById('edit-assignedTo-subcontainer').classList.toggle('edit-assign-colum');
    document.getElementById('edit-workers').classList.toggle('d-none');
    document.getElementById('dropdown-img').classList.toggle('edit-assign-img-rotate');
}

function submitChanges(idOfCurrentTask) {
    let newTitle = document.getElementById('edit-title').value;
    let newDescription = document.getElementById('edit-description').value;
    let newDate = document.getElementById('edit-date').value;  // Wird falschherum dargestellt d.h. 2022-09-03
    let newPrio = editNewPrio;
    updateTaskArray(idOfCurrentTask, newTitle, newDescription, newDate, newPrio);
}

function submitCheckbox(idOfCheckbox) {
    let clickedCheckbox = document.getElementById(`checkbox-${idOfCheckbox}`);

    if (clickedCheckbox.checked == false) {
        clickedCheckbox.checked = true;
        checkIfWorkerIsPushable(idOfCheckbox);
    } else {
        checkIfWorkerIsRemoveable(idOfCheckbox);
        clickedCheckbox.checked = false;
    }
    checkValidatorCheckboxes();
}

function checkIfWorkerIsPushable(id) {
    if (!selectedWorkers.includes(users[id])) {
        selectedWorkers.push(users[id]);
    }
}

function checkIfWorkerIsRemoveable(id) {
    for (let p = 0; p < selectedWorkers.length; p++) {
        if (selectedWorkers[p] === users[id]) {
            selectedWorkers.splice(p, 1);
        }
    }
}

function checkValidatorCheckboxes() {
    let checkboxAssignedTo = document.getElementById('checkCheckboxes');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);

    if (checkedOne == false) {
        checkboxAssignedTo.required = true;
    }
    if (checkedOne == true) {
        checkboxAssignedTo.required = false;
    }
}

function showAllPossibleWorkers() {
    let outputContainer = document.getElementById('edit-workers');
    // outputContainer.innerHTML = ''
    for (let o = 0; o < users.length; o++) {
        const singleUserName = users[o].name;
        outputContainer.innerHTML += templateShowAllWorkers(o, singleUserName);
    }
}

function clearPlaceholder(inputfield, newPlaceholder, oldPlaceholder) {
    let currentPlaceholder = document.getElementById(`edit-${inputfield}`).placeholder;
    if (currentPlaceholder == oldPlaceholder) {
        document.getElementById(`edit-${inputfield}`).placeholder = `${newPlaceholder}`;
    }
    if (currentPlaceholder == newPlaceholder) {
        document.getElementById(`edit-${inputfield}`).placeholder = `${oldPlaceholder}`;
    }
}

function updateTaskArray(taskId, title, description, date, prio) {
    tasksScript[taskId].title = title;
    tasksScript[taskId].description = description;
    tasksScript[taskId].dueDate = date;
    tasksScript[taskId].priority = prio;
    renderNewWorkers(taskId);
    closeEditContainer();
    showAlert();
}

function renderNewWorkers(taskId){
    tasksScript[taskId].assignedTo = [];
    for(let w = 0; w < selectedWorkers.length; w++){
        const selectedWorker = selectedWorkers[w].email;
        console.log(selectedWorker);

        tasksScript[taskId].assignedTo.push(selectedWorker);
    }

    renderBoard();
}

function showAlert() {
    document.getElementById('succes-alert').classList.remove('d-none');
    setTimeout(hideAlert, 3000);
}

function hideAlert() {
    document.getElementById('succes-alert').classList.add('d-none');
}