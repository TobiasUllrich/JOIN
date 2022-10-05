let importantTasks = [];
let soloTasksTodo = [];
let soloTasksProgress = [];
let soloTasksFeedback = [];
let soloTasksDone = [];
let currentDraggingElement;
let editNewPrio;
let assignedPeople = [];
let selectedWorkers = [];
let loggedUser = getArray('arrayOfactUser');

/**
 * Loads all Tasks und Users from Backendserver and checks if Board is renderable
 * 
 */
async function loadInit() {
    await init();
    await checkIfBoardIsRenderable();
}

/**
 * If something is included in Taskarray the renderfunction starts
 * 
 */

async function checkIfBoardIsRenderable() {
    if (tasks.length > 0) {
        await filterTasks();
        renderBoard();
    }
}

/**
 * Render all Tasks by Status
 * 
 */

function renderBoard() {
    renderToDo();
    renderProgress();
    renderFeedback();
    renderDone();
}

/**
 * Render tasks with status todo in todo-container
 * 
 * 
 */

function renderToDo() {
    let todoOutput = document.getElementById('category-todo');
    let todos = tasks.filter(status => status.status == 'To do');
    todoOutput.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const taskTodo = todos[i];
        todoOutput.innerHTML += templateOfNewTaskToDo(taskTodo, i);
        renderAssignedNamesOfTask(i, 'todo', soloTasksTodo);
    }
}

/**
 * Render tasks with status in progress in progress-container
 * 
 */

function renderProgress() {
    let inProgressOutput = document.getElementById('category-progress');
    let progress = tasks.filter(status => status.status == 'In progress');
    inProgressOutput.innerHTML = '';

    for (let j = 0; j < progress.length; j++) {
        const taskProgress = progress[j];
        inProgressOutput.innerHTML += templateOfTaskInProgress(taskProgress, j);
        renderAssignedNamesOfTask(j, 'progress', soloTasksProgress);
    }
}

/**
 * Render tasks with status awaiting feedback in feedback-container
 * 
 */

function renderFeedback() {
    let feedbackOutput = document.getElementById('category-feedback');
    let feedback = tasks.filter(status => status.status == 'Awaiting feedback');
    feedbackOutput.innerHTML = '';

    for (let k = 0; k < feedback.length; k++) {
        const taskFeedback = feedback[k];
        feedbackOutput.innerHTML += templateOfTaskFeedback(taskFeedback, k);
        renderAssignedNamesOfTask(k, 'feedback', soloTasksFeedback);
    }
}

/**
 * Render tasks with status done in done-container
 * 
 */

function renderDone() {
    let doneOutput = document.getElementById('category-done');
    let doneTasks = tasks.filter(status => status.status == 'Done');
    doneOutput.innerHTML = '';

    for (let l = 0; l < doneTasks.length; l++) {
        const taskDone = doneTasks[l];
        doneOutput.innerHTML += templateOfTaskDone(taskDone, l);
        renderAssignedNamesOfTask(l, 'done', soloTasksDone);
    }
}

/**
 * This Function render the peoples who work on this task
 * 
 * @param {Number} index - this is the index of current task
 * @param {string} status - status means in which current status the task is 
 * @param {array} soloStatusArray  - in this array are all tasks filtered by there status 
 */

function renderAssignedNamesOfTask(index, status, soloStatusArray) {
    let renderOutputContainer = document.getElementById(`solo-worker-${status}${index}`);
    renderOutputContainer.innerHTML = '';

    for (let x = 0; x < soloStatusArray[index].assignedTo.length; x++) {
        let assUser = soloStatusArray[index].assignedTo[x];
        let object = getUserAsObject(assUser);
        let objectName = object.name.charAt(0);
        let objectSurname = object.surname.charAt(0);
        renderOutputContainer.innerHTML += templateAssignedToOfSoloTask(objectName, objectSurname);
    }
}

/**
 * This Function filter all tasks by there status and put them in an seperate array
 * 
 */

function filterTasks() {
    importantTasks = tasks.filter(priority => priority.priority == 'Urgent'); // All important Tasks
    soloTasksTodo = tasks.filter(status => status.status == 'To do'); // All tasks todo
    soloTasksProgress = tasks.filter(status => status.status == 'In progress'); // All tasks in progress
    soloTasksFeedback = tasks.filter(status => status.status == 'Awaiting feedback'); // All tasks feedback
    soloTasksDone = tasks.filter(status => status.status == 'Done'); // All tasks done
}

/**
 * Here is it possible to add an task in the board.html
 * 
 */

function addTaskBoard() {
    let addTaskContainer = document.getElementById('main-add-task-container');
    removeDisplayNoneMainContainer(addTaskContainer);
}

/**
 * This Function close the add task container
 * 
 */

function closeAddTaskContainer() {
    let addTaskContainer = document.getElementById('main-add-task-container');
    addDisplayNoneMainContainer(addTaskContainer);
}

/**
 * This Function open the clicked task in a bigger window 
 * 
 * @param {number} indexOfSoloTask - this in the index of clicked task
 * @param {string} statusTask - this string means in which status the clicked task is
 * @param {hex} categorycolor - this is the color-hex-code of headline-background-color on bigger window 
 */

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

/**
 * This Function checks which status the clicked task is and opens the clicked task in bigger window and runs the HTML Template
 * 
 * @param {string} statusTask - this string means in which status the task is
 * @param {id} bigBoxContainer - this is the main container where the bigger window pops up
 * @param {number} indexOfSoloTask - this is the index of clicked task
 */

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

/**
 * In this Function the user have the opportunity to edit the clicked task and run the HTML Template
 * 
 * @param {number} idOfCurrentTask - this is the index of clicked task
 */

function editCurrentTask(idOfCurrentTask) {
    let currentTask = tasks[idOfCurrentTask];

    let bigBoxContainer = document.getElementById('big-box-solo-task');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateEditCurrentTask(currentTask, idOfCurrentTask);
}

/**
 * This Function render the people who works on the clicked task in bigger window
 * 
 * @param {number} indexOfTask - this is the index of clicked task 
 * @param {string} statusOfTask - this string means in which status the clicked task is
 */

function showCurrentWorkersBigBox(indexOfTask, statusOfTask) {
    if (statusOfTask == 'todo') {
        renderCurrentWorkersBigBox(indexOfTask, soloTasksTodo);
    }
    if (statusOfTask == 'progress') {
        renderCurrentWorkersBigBox(indexOfTask, soloTasksProgress);
    }
    if (statusOfTask == 'feedback') {
        renderCurrentWorkersBigBox(indexOfTask, soloTasksFeedback);
    }
    if (statusOfTask == 'done') {
        renderCurrentWorkersBigBox(indexOfTask, soloTasksDone);
    }
}

/**
 * This Function renders the people who works on the clicked task in bigger window and runs the HTML Template
 * 
 * @param {number} indexOfTask - this is the index of clicked task 
 * @param {array} statusTasksArray - this is a filtered array by taskstatus
 */

function renderCurrentWorkersBigBox(indexOfTask, statusTasksArray) {
    let currentTaskWorkers = document.getElementById(`current-workers`);
    currentTaskWorkers.innerHTML = '';
    for (let x = 0; x < statusTasksArray[indexOfTask].assignedTo.length; x++) {
        let assUser = statusTasksArray[indexOfTask].assignedTo[x];
        let object = getUserAsObject(assUser);
        let objectName = object.name;
        let objectSurname = object.surname;
        currentTaskWorkers.innerHTML += templateCurrentWorkersOfTasksBigBox(objectName, objectSurname, objectName);
    }
}

/**
 * This Function open the searched task in bigger window and adds some CSS to background
 * 
 * @param {number} indexOfSoloTask - this is the index of searched task
 * @param {string} statusTask - this string means in which status the searched task is
 * @param {hex} categorycolor - this is the hex-color-code for the headline-background-color of search task
 */

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

/**
 * This Function checks in which status the searched task is an runs the HTML Template
 * 
 * @param {string} statusTask - this string means in which status the searched task is
 * @param {id} bigBoxContainer  - this is the container where the search task can be open in bigger window 
 * @param {number} indexOfSoloTask - this is the index of searched task
 */

function checkStatusOfTaskOnSearch(statusTask, bigBoxContainer, indexOfSoloTask) {
    if (statusTask == 'to do') {
        bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasks, indexOfSoloTask);
    } else {
        if (statusTask == 'in progress') {
            bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasks, indexOfSoloTask);
        } else {
            if (statusTask == 'awaiting feedback') {
                bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasks, indexOfSoloTask);
            } else {
                if (statusTask == 'done') {
                    bigBoxContainer.innerHTML = templateBigBoxSoloTask(tasks, indexOfSoloTask);
                }
            }
        }
    }
}

/**
 * This Function close the bigger window pop up when the user open it 
 * 
 */

function closeSoloTaskBigBox() {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    addDisplayNoneMainContainer(bigBoxContainer);
    setOpacityBackgroundToNormal();
    removeUnclickableBackground();
}

/**
 * This function add the hex color code from task array (categorycolor) to the headline background when user opens the clicked task in bigger window
 * 
 * @param {hex} categorycolor 
 */

function checkHeadlineColorBigBox(categorycolor) {
    let bigBoxHeadlineContainer = document.getElementById('big-box-task-headline');
    bigBoxHeadlineContainer.style = `background:${categorycolor}`;
}

/**
 * This Function runs when user clicked a task to open in bigger window and checks in which prio the task is and add the suitable color to the background of prio container 
 * 
 */

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

/**
 * This Function gets the user value of the inputfield and iterate the task array after that the function "checkTermsOfSearch" runs 
 * 
 * @param {string} idOfInputfield - This is the id of the search - inputfield 
 */

function searchTask(idOfInputfield) {
    let userSearch = document.getElementById(`${idOfInputfield}`).value.toLowerCase();

    for (let m = 0; m < tasks.length; m++) {
        const taskSearch = tasks[m];
        checkTermsOfSearch(userSearch, m, taskSearch);
    }
}

/**
 * This Function runs the searchTask Function by pressing the Enter button
 * 
 * @param {id} idOfSearchContainer - this is the search-container that getting clicked when user press enter 
 */

function enterEventSearchTask(idOfSearchContainer) {
    if (event.key === "Enter") {
        document.getElementById(`${idOfSearchContainer}`).click();
    }
}

/**
 * This function checks if the user search value is including in tasks title and searchs in every status container  
 * 
 * @param {string} userSearch - this is the uservalue of search inputfield 
 * @param {number} m - this is the index of available tasks
 * @param {object} taskSearch - this is a solo object of tasks
 */

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

/**
 * This function checks if the searched task is in the "todo" container
 * 
 * @param {object} taskSearch - this is a solo object of tasks
 * @param {number} m - this is the index of available tasks
 */

function searchInToDoContainer(taskSearch, m) {
    document.getElementById('category-todo').innerHTML = '';
    document.getElementById('category-todo').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('progress', 'feedback', 'done');
}

/**
 * This function checks if the searched task is in the "in progress" container
 * 
 * @param {object} taskSearch - this is a solo object of tasks
 * @param {number} m - this is the index of available tasks
 */

function seachInProgressContainer(taskSearch, m) {
    document.getElementById('category-progress').innerHTML = '';
    document.getElementById('category-progress').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'feedback', 'done');
}

/**
 * This function checks if the searched task is in the "awaiting feedback" container
 * 
 * @param {object} taskSearch - this is a solo object of tasks
 * @param {number} m - this is the index of available tasks
 */

function seachInFeedbackContainer(taskSearch, m) {
    document.getElementById('category-feedback').innerHTML = '';
    document.getElementById('category-feedback').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'progress', 'done');
}

/**
 * This function checks if the searched task is in the "done" container
 * 
 * @param {object} taskSearch - this is a solo object of tasks
 * @param {number} m - this is the index of available tasks
 */

function searchInDoneContainer(taskSearch, m) {
    document.getElementById('category-done').innerHTML = '';
    document.getElementById('category-done').innerHTML = templateOfSearchTask(taskSearch, m);
    hideOtherTasks('todo', 'progress', 'feedback');
}

/**
 * This Function checks if user delete his value and shows all tasks again 
 * 
 * @param {string} idOfInputfield - this is the id of the search input field 
 */

function checkEmptyField(idOfInputfield) {
    let userSearch = document.getElementById(`${idOfInputfield}`).value.toLowerCase();
    if (userSearch.length <= 1) {
        renderBoard();
    }
}

/**
 * If searched task getting find the other tasks are hidden 
 * 
 * @param {string} statusOne - this is one of the four container where the searched task is not included
 * @param {string} statusTwo - this is one of the four container where the searched task is not included
 * @param {string} statusThree - this is one of the four container where the searched task is not included
 */

function hideOtherTasks(statusOne, statusTwo, statusThree) {
    document.getElementById(`category-${statusOne}`).innerHTML = '';
    document.getElementById(`category-${statusTwo}`).innerHTML = '';
    document.getElementById(`category-${statusThree}`).innerHTML = '';
}

/**
 * This function allowed the user to drag an element to other container
 * 
 * @param {number} id - this is the id of current dragged element 
 */

function startDragging(id) {
    currentDraggingElement = id;
}

/**
 * This Function allowed the user to drop the dragged element in current space
 * 
 * @param {event} ev - this event allows user to drop element in current space 
 */

function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * This Function saves the new status of task in task array when user use drag and drop 
 * 
 * @param {string} newStatus - this string is the status which is gonna be the new status of task 
 */

function moveTo(newStatus) {
    if (newStatus == 'To do') {
        tasks[currentDraggingElement].status = newStatus;
    }
    if (newStatus == 'In progress') {
        tasks[currentDraggingElement].status = newStatus;
    }
    if (newStatus == 'Awaiting feedback') {
        tasks[currentDraggingElement].status = newStatus;
    }
    if (newStatus == 'Done') {
        tasks[currentDraggingElement].status = newStatus;
    }
    renderBoard();
}

/**
 * This function stops Progagation when user click on background
 * 
 * @param {event} event - adds default stopProgagation function 
 */

function doNotClose(event) {
    event.stopPropagation();
}

/**
 * This function runs when user hover on edit task button and changes the color of edit container
 * 
 * @param {number} indexOfSoloTask - index of current clicked task 
 */

function changeEditContainerColors(indexOfSoloTask) {
    let editContainer = document.getElementById(`edit-button${indexOfSoloTask}`);
    let editPencil = document.getElementById(`edit-pencil${indexOfSoloTask}`);

    makeContainerBlue(editContainer);
    makeImgWhite(editPencil);
}

/**
 * This function runs when user leave hover on edit task button so color changes are going default again
 * 
 * @param {number} indexOfSoloTask - index of current clicked task 
 */

function RemoveEditContainerColors(indexOfSoloTask) {
    let editContainer = document.getElementById(`edit-button${indexOfSoloTask}`);
    let editPencil = document.getElementById(`edit-pencil${indexOfSoloTask}`);

    removeContainerColorBlue(editContainer);
    makeImageColorDefault(editPencil);
}

/**
 * This function makes the background of container blue
 * 
 * @param {id} container - id of container which is going to be blue
 */

function makeContainerBlue(container) {
    container.style.background = '#29ABE2';
}

/**
 * This function removes the backgroundcolor blue of container
 * 
 * @param {id} container - id of container which backgroundcolor should be removed
 */

function removeContainerColorBlue(container) {
    container.style.background = '#2a3647';
}

/**
 * This function changes the color of image to white
 * 
 * @param {id} image - this is the id of image which is going the get a new color to white
 */

function makeImgWhite(image) {
    image.style.filter = 'filter: brightness(0) invert(1)';
}

/**
 * This function set image color to default 
 * 
 * @param {id} image - this is the id of image which get default color again
 */

function makeImageColorDefault(image) {
    image.style.filter = 'filter: brightness(0) invert(1)';
}

/**
 * This function adds opacity to background when clicked task is open in bigger window
 * 
 */

function addOpacityToMainBackground() {
    document.getElementById('main-board-container').style.opacity = '0.6';
}

/**
 * This function makes the background unclickable when clicked task is open in bigger window
 * 
 */

function backgroundIsUnclickable() {
    document.getElementById('main-board-container').style.pointerEvents = 'none';
}

/**
 * This function sets the background opacity to default wehen user close the bigger window pop up by clicking on an task
 * 
 */

function setOpacityBackgroundToNormal() {
    document.getElementById('main-board-container').style.opacity = '1.0';
}

/**
 * This function makes the background clickable again wehen user close the bigger window pop up by clicking on an task
 * 
 */

function removeUnclickableBackground() {
    document.getElementById('main-board-container').style.pointerEvents = 'all';
}

/**
 * This function removes the CSS style "display:none" when user click on task
 * 
 * @param {string} bigBoxContainer - this is the bigger window pop up when user clicks on task
 */

function removeDisplayNoneMainContainer(bigBoxContainer) {
    bigBoxContainer.classList.remove('d-none');
}

/**
 * This function adds the CSS style "display:flex" when user close the bigger window pop up
 * 
 * @param {string} bigBoxContainer - 
 */

function addDisplayNoneMainContainer(bigBoxContainer) {
    bigBoxContainer.classList.add('d-none');
}

/**
 * This function starts a rotation animation when user wants to drag a task
 * 
 * @param {string} status - this string means which current status the dragged element has
 * @param {number} index - this is the index of tasks which is going to be dragged
 */

function dragHighlight(status, index) {
    document.getElementById(`${status}-task${index}`).classList.add('rotation');
}

/**
 * When the user starts to drag a task this function showing possible drop-places by removing CSS style "display:none"
 * 
 * @param {string} otherStatusOne - this is one of three possible drop places
 * @param {string} otherStatusTwo - this is one of three possible drop places
 * @param {string} otherStatusThree - this is one of three possible drop places
 */

function showEmptyPlaces(otherStatusOne, otherStatusTwo, otherStatusThree) {
    document.getElementById(`empty-space-${otherStatusOne}`).classList.remove('d-none');
    document.getElementById(`empty-space-${otherStatusTwo}`).classList.remove('d-none');
    document.getElementById(`empty-space-${otherStatusThree}`).classList.remove('d-none');
}

/**
 * When user drops a task in other status-container the possible empty places are hidden again
 * 
 * @param {string} otherStatusOne - this is one of three possible drop places which is getting the style "display: none" again
 * @param {string} otherStatusTwo - this is one of three possible drop places which is getting the style "display: none" again
 * @param {string} otherStatusThree - this is one of three possible drop places which is getting the style "display: none" again
 */

function hideEmptyPlaces(otherStatusOne, otherStatusTwo, otherStatusThree) {
    document.getElementById(`empty-space-${otherStatusOne}`).classList.add('d-none');
    document.getElementById(`empty-space-${otherStatusTwo}`).classList.add('d-none');
    document.getElementById(`empty-space-${otherStatusThree}`).classList.add('d-none');
}

/**
 * This function close the edit container by adding CSS style "display:none"
 * 
 * 
 */
function closeEditContainer() {
    document.getElementById('main-edit-container').classList.add('d-none');
    closeSoloTaskBigBox();
}

/**
 * This function checks which new prio the task gonna get and runs the additional function. After that the variable editNewPrio changes to the new prio.
 * 
 * @param {string} newPrio - this string is the new prio of task after edit a task 
 */

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

/**
 * If the new prio is urgent the urgent container gets highlighted by color and the other prio containers get style to default 
 * 
 */

function changePrioToUrgent() {
    highlightClickedPrioContainer('urgent');
    removePossibleClickedPrioBefore('medium', 'low');
    removeImgFilter('medium');
    removeImgFilter('low');
}

/**
 * If the new prio is medium the medium container gets highlighted by color and the other prio containers get style to default 
 * 
 */

function changePrioToMedium() {
    highlightClickedPrioContainer('medium');
    removePossibleClickedPrioBefore('urgent', 'low');
    removeImgFilter('urgent');
    removeImgFilter('low');
}

/**
 * If the new prio is low the low container gets highlighted by color and the other prio containers get style to default 
 * 
 */

function changePrioToLow() {
    highlightClickedPrioContainer('low');
    removePossibleClickedPrioBefore('urgent', 'medium');
    removeImgFilter('urgent');
    removeImgFilter('medium');
}

/**
 * This function removes highlighted possible clicked prios before and set them style to default
 * 
 * @param {string} otherPrioOne - one of two possible clicked prio before
 * @param {string} otherPrioTwo - one of two possible clicked prio before
 */

function removePossibleClickedPrioBefore(otherPrioOne, otherPrioTwo) {
    document.getElementById(`prio-${otherPrioOne}-container`).classList.remove(`${otherPrioOne}-prio`);
    document.getElementById(`prio-${otherPrioTwo}-container`).classList.remove(`${otherPrioTwo}-prio`);
}

/**
 * This function removes the highlight of an prio image when user choose other prio
 * 
 * @param {string} imgPrio - this string means which prio the img have 
 */

function removeImgFilter(imgPrio) {
    document.getElementById(`${imgPrio}-img`).style.filter = '';
}

/**
 * This function highlight the clicked prio container with new CSS styles 
 * 
 * @param {string} prio - this string means which new prio the task get 
 */

function highlightClickedPrioContainer(prio) {
    document.getElementById(`prio-${prio}-container`).classList.add(`${prio}-prio`);
    document.getElementById(`prio-${prio}`)
    document.getElementById(`${prio}-img`).style.filter = 'brightness(0) invert(1)';
}

/**
 * In edit task overview the user can open the complete container of possible workers of task (select contacs to assign)
 * 
 */

function showCompleteContainer() {
    document.getElementById('edit-assignedTo-subcontainer').classList.toggle('edit-assign-full-size');
    document.getElementById('edit-assignedTo-subcontainer').classList.toggle('edit-assign-colum');
    document.getElementById('edit-workers').classList.toggle('d-none');
    document.getElementById('dropdown-img').classList.toggle('edit-assign-img-rotate');
}

/**
 * This function reads the value of new properties of task and updates the task array by running the updateTaskArray funktion 
 * 
 * @param {number} idOfCurrentTask - index of current clicked task  
 */

function submitChanges(idOfCurrentTask) {
    let newTitle = document.getElementById('edit-title').value;
    let newDescription = document.getElementById('edit-description').value;
    let newDate = document.getElementById('edit-date').value;  // Wird falschherum dargestellt d.h. 2022-09-03
    let newPrio = editNewPrio;
    updateTaskArray(idOfCurrentTask, newTitle, newDescription, newDate, newPrio);
}

/**
 * This function submits also the checkbox when user clicks on the parents container, same the other way (unsubmit) 
 * 
 * @param {number} idOfCheckbox - this is the index of checkbox by choosing new possible workers
 */

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

/**
 * This function checks if choosen new worker is already in selectedWorkers array and pushs the new worker to array
 * 
 * @param {number} id - index of user
 */

function checkIfWorkerIsPushable(id) {
    if (!selectedWorkers.includes(users[id]) && id > 0) {
        selectedWorkers.push(users[id]);
    }
    if (id == '-1') { 
        if (!selectedWorkers.includes(loggedUser)) {
            selectedWorkers.push(loggedUser);
        }
    }
}

/**
 * This function checks if choosen new worker is already in selectedWorkers array and splices the selected user from array
 * 
 * @param {number} id - index of user 
 */

function checkIfWorkerIsRemoveable(id) {
    for (let p = 0; p < selectedWorkers.length; p++) {
        if (selectedWorkers[p] === users[id]) {
            selectedWorkers.splice(p, 1);
        }
        if(selectedWorkers[p] == loggedUser){
            selectedWorkers.splice(p ,1);
        }
    }
}

/**
 * This function runs the form validation for the checkboxes so atleast one checkbox has to be clicked
 * 
 */

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

/**
 * This function shows all possible workers in edit task overview, the user whos logged in gets removed from the list and is saved in "You" option
 * 
 */

function showAllPossibleWorkers() {
    let outputContainer = document.getElementById('edit-workers');
    for (let o = 0; o < users.length; o++) {
        const singleUserName = users[o].name;
        if (!loggedUser.name.includes(singleUserName)) {
            outputContainer.innerHTML += templateShowAllWorkers(o, singleUserName);
        }
    }
}

/**
 * This function clears the placeholder from the inputfields in edit task overview by clicking and shows the needed information also as placeholder
 * 
 * @param {string} inputfield - this string means the id of the inputfield in task overview
 * @param {string} newPlaceholder - this string is the new placeholder by clicking in the inputfield
 * @param {string} oldPlaceholder - this string is the default placeholder by clicking the inputfield again
 */

function clearPlaceholder(inputfield, newPlaceholder, oldPlaceholder) {
    let currentPlaceholder = document.getElementById(`edit-${inputfield}`).placeholder;
    if (currentPlaceholder == oldPlaceholder) {
        document.getElementById(`edit-${inputfield}`).placeholder = `${newPlaceholder}`;
    }
    if (currentPlaceholder == newPlaceholder) {
        document.getElementById(`edit-${inputfield}`).placeholder = `${oldPlaceholder}`;
    }
}

/**
 * This function update the task array after submit the change button in edit task overview
 * 
 * @param {number} taskId - index of current task 
 * @param {string} title - new task title
 * @param {string} description - new task description
 * @param {date} date - new task date
 * @param {string} prio - new task prio
 */

function updateTaskArray(taskId, title, description, date, prio) {
    tasks[taskId].title = title;
    tasks[taskId].description = description;
    tasks[taskId].dueDate = date;
    tasks[taskId].priority = prio;
    renderNewWorkers(taskId);
    closeEditContainer();
    showAlert();
}

/**
 * This function clears the assigned to array from current task after submit the change button in task edit overview and fills the array with the new email adresses of new worker
 * 
 * @param {number} taskId - index of current task 
 */

function renderNewWorkers(taskId) {
    tasks[taskId].assignedTo = [];
    for (let w = 0; w < selectedWorkers.length; w++) {
        const selectedWorker = selectedWorkers[w].email;
        console.log(selectedWorker);

        tasks[taskId].assignedTo.push(selectedWorker);
    }
    renderBoard();
}

/**
 * This function shows a succes alert after succesfully editing a task and runs the hide alert function after 3 seconds
 * 
 */

function showAlert() {
    document.getElementById('succes-alert').classList.remove('d-none');
    setTimeout(hideAlert, 3000);
}

/**
 * This function hide the succes alert
 * 
 */

function hideAlert() {
    document.getElementById('succes-alert').classList.add('d-none');
}