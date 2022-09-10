let importantTasks = [];
let soloTasksTodo = [];
let soloTasksProgress = [];
let soloTasksFeedback = [];
let soloTasksDone = [];

function renderBoard() {
    renderToDo();
    renderProgress();
    renderFeedback();
    renderDone();
    filterImportentTasks();
}

function renderToDo() {
    let todoOutput = document.getElementById('category-todo');
    let todos = tasksScript.filter(status => status.status == 'To do');
    todoOutput.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const taskTodo = todos[i];
        todoOutput.innerHTML += templateOfNewTaskToDo(taskTodo, i);
        updateTasksHeadlinesStatusTodo(i);
    }
}

function renderProgress() {
    let inProgressOutput = document.getElementById('category-progress');
    let progress = tasksScript.filter(status => status.status == 'In progress');
    inProgressOutput.innerHTML = '';

    for (let j = 0; j < progress.length; j++) {
        const taskProgress = progress[j];
        inProgressOutput.innerHTML += templateOfTaskInProgress(taskProgress, j);
        updateTasksHeadlinesStatusProgress(j);
    }
}

function renderFeedback() {
    let feedbackOutput = document.getElementById('category-feedback');
    let feedback = tasksScript.filter(status => status.status == 'Awaiting feedback');
    feedbackOutput.innerHTML = '';

    for (let k = 0; k < feedback.length; k++) {
        const taskFeedback = feedback[k];
        feedbackOutput.innerHTML += templateOfTaskFeedback(taskFeedback, k);
        updateTaskHeadlinesStatusFeedback(k);
    }
}

function renderDone() {
    let doneOutput = document.getElementById('category-done');
    let doneTasks = tasksScript.filter(status => status.status == 'Done');
    doneOutput.innerHTML = '';

    for (let l = 0; l < doneTasks.length; l++) {
        const taskDone = doneTasks[l];
        doneOutput.innerHTML += templateOfTaskDone(taskDone, l);
        updateStatusHeadlinesStatusDone(l);
    }
}

function filterImportentTasks() {
    importantTasks = tasksScript.filter(priority => priority.priority == 'Urgent'); // All important Tasks
    soloTasksTodo = tasksScript.filter(status => status.status == 'To do'); // All tasks todo
    soloTasksProgress = tasksScript.filter(status => status.status == 'In progress'); // All tasks in progress
    soloTasksFeedback = tasksScript.filter(status => status.status == 'Awaiting feedback'); // All tasks feedback
    soloTasksDone = tasksScript.filter(status => status.status == 'Done'); // All tasks done
}

function updateTasksHeadlinesStatusTodo(i) {
    let headlineTaskTodoContainer = document.getElementById(`headline-solo-task-todo${i}`);
    let headlineTodoText = document.getElementById(`headline-task-todo${i}`).innerHTML;

    if (headlineTodoText == 'Design') {
        headlineTaskTodoContainer.style.background = '#FF7A00';
    } else {
        if (headlineTodoText == 'Sales') {
            headlineTaskTodoContainer.style.background = '#FC71FF';
        } else {
            if (headlineTodoText == 'Backoffice') {
                headlineTaskTodoContainer.style.background = '#1FD7C1';
            } else {
                if (headlineTodoText == 'Media') {
                    headlineTaskTodoContainer.style.background = '#FFC701';
                } else {
                    if (headlineProgressText == 'Marketing') {
                        headlineTaskTodoContainer.style.background = '#0038FF';
                    }
                }
            }
        }
    }
}

function updateTasksHeadlinesStatusProgress(j) {
    let headlineTaskProgressContainer = document.getElementById(`headline-solo-task-progress${j}`);
    let headlineProgressText = document.getElementById(`headline-task-progress${j}`).innerHTML;

    if (headlineProgressText == 'Design') {
        headlineTaskProgressContainer.style.background = '#FF7A00';
    } else {
        if (headlineProgressText == 'Sales') {
            headlineTaskProgressContainer.style.background = '#FC71FF';
        } else {
            if (headlineProgressText == 'Backoffice') {
                headlineTaskProgressContainer.style.background = '#1FD7C1';
            } else {
                if (headlineProgressText == 'Media') {
                    headlineTaskProgressContainer.style.background = '#FFC701';
                } else {
                    if (headlineProgressText == 'Marketing') {
                        headlineTaskProgressContainer.style.background = '#0038FF';
                    }
                }
            }
        }
    }
}

function updateTaskHeadlinesStatusFeedback(k) {
    let headlineTaskFeedbackContainer = document.getElementById(`headline-solo-task-feedback${k}`);
    let headlineFeedbackText = document.getElementById(`headline-task-feedback${k}`).innerHTML;

    if (headlineFeedbackText == 'Design') {
        headlineTaskFeedbackContainer.style.background = '#FF7A00';
    } else {
        if (headlineFeedbackText == 'Sales') {
            headlineTaskFeedbackContainer.style.background = '#FC71FF';
        } else {
            if (headlineFeedbackText == 'Backoffice') {
                headlineTaskFeedbackContainer.style.background = '#1FD7C1';
            } else {
                if (headlineFeedbackText == 'Media') {
                    headlineTaskFeedbackContainer.style.background = '#FFC701';
                } else {
                    if (headlineFeedbackText == 'Marketing') {
                        headlineTaskFeedbackContainer.style.background = '#0038FF';
                    }
                }
            }
        }
    }
}

function updateStatusHeadlinesStatusDone(l) {
    let headlineTaskDoneContainer = document.getElementById(`headline-solo-task-done${l}`);
    let headlineDoneText = document.getElementById(`headline-task-done${l}`).innerHTML;

    if (headlineDoneText == 'Design') {
        headlineTaskDoneContainer.style.background = '#FF7A00';
    } else {
        if (headlineDoneText == 'Sales') {
            headlineTaskDoneContainer.style.background = '#FC71FF';
        } else {
            if (headlineDoneText == 'Backoffice') {
                headlineTaskDoneContainer.style.background = '#1FD7C1';
            } else {
                if (headlineDoneText == 'Media') {
                    headlineTaskDoneContainer.style.background = '#FFC701';
                } else {
                    if (headlineDoneText == 'Marketing') {
                        headlineTaskDoneContainer.style.background = '#0038FF';
                    }
                }
            }
        }
    }
}

function addTask() {
    document.getElementById('main-add-task-container').classList.remove('d-none');
}

function closeAddTaskContainer() {
    document.getElementById('main-add-task-container').classList.add('d-none');
}

function openCurrentTaskBigBoxTodo(indexOfSoloTask) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.classList.remove('d-none');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksTodo, indexOfSoloTask);
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox();
}

function openCurrentTaskBigBoxProgress(indexOfSoloTask) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.classList.remove('d-none');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksProgress, indexOfSoloTask);
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox();
}

function openCurrentTaskBigBoxFeedback(indexOfSoloTask) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.classList.remove('d-none');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksFeedback, indexOfSoloTask);
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox();
}

function openCurrentTaskBigBoxDone(indexOfSoloTask) {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.classList.remove('d-none');
    bigBoxContainer.innerHTML = '';

    bigBoxContainer.innerHTML = templateBigBoxSoloTask(soloTasksDone, indexOfSoloTask);
    checkPriorityBackgroundColor();
    checkHeadlineColorBigBox();
}

function closeSoloTaskBigBox() {
    let bigBoxContainer = document.getElementById('main-bigbox-solo-task-container');
    bigBoxContainer.classList.add('d-none');
}

function checkHeadlineColorBigBox(){
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

function checkPriorityBackgroundColor(){
    let prioBackgroundColor = document.getElementById('priority-big-box-color');

    if(prioBackgroundColor.innerHTML == 'Urgent'){
        prioBackgroundColor.style.background = '#ff5520';
    } 

    if(prioBackgroundColor.innerHTML == 'Low'){
        prioBackgroundColor.style.background = '#7ae229';
    }

    if(prioBackgroundColor.innerHTML == 'Medium'){
        prioBackgroundColor.style.background = '#ffc85f';
    }
}
