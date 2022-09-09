let importantTasks = [];
let importantTasksTodo = [];
let importantTasksProgress = [];
let importantTasksFeedback = [];
let importantTasksDone = [];

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
    importantTasksTodo = importantTasks.filter(status => status.status == 'To do'); // All important Tasks in Todo
    importantTasksProgress = importantTasks.filter(status => status.status == 'In progress'); // All important Tasks in Progress
    importantTasksFeedback = importantTasks.filter(status => status.status == 'Awaiting feedback'); // All important Tasks in Feedback
    importantTasksDone = importantTasks.filter(status => status.status == 'Done'); // All important Tasks in Done
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
// BIS HIER ALLES IN ORDNUNG ####################################### // 

function openImportantTaskTodo(i) {
    let importantTaskOutput = document.getElementById('main-important-task-container');
    let priorityImageInTask = document.getElementById(`prio-img-todo${i}`).src;
    console.log('Index von i ist', i);
    
    for (let m = 0; m < importantTasksTodo.length; m++) {
        console.log(importantTasksTodo);
        const importantTaskTodo = importantTasksTodo[m];
        console.log(importantTaskTodo, 'Index von m ist', m);

        if (priorityImageInTask == 'http://127.0.0.1:5500/img/board/prio-Urgent.png') {
            //document.getElementById(`main-important-task-container-todo${m}`).classList.remove('d-none');
            importantTaskOutput.classList.remove('d-none');
            console.log('M in der If Abfrage ist', m);
            importantTaskOutput.innerHTML = templateImportantTaskTodo(importantTaskTodo, m);
        }
    }
}


function closeImportantTaskTodo(i) {
    document.getElementById(`main-important-task-container-todo${i}`).classList.add('d-none');
    document.getElementById('main-important-task-container').classList.add('d-none');
}

function openImportantTaskProgress(j) {
    let importantTaskOutput = document.getElementById('main-board-container');
    let priorityImageInTask = document.getElementById(`prio-img-progress${j}`).src;

    if (priorityImageInTask == 'http://127.0.0.1:5500/img/board/prio-Urgent.png') {
        importantTaskOutput.innerHTML += templateImportantTaskProgress(j);
        document.getElementById(`main-important-task-container-progress${j}`).classList.remove('d-none');
    }
}

function closeImportantTaskProgress(j) {
    document.getElementById(`main-important-task-container-progress${j}`).classList.add('d-none');
}

function openImportantTaskFeedback(k) { // Baustelle Anfang
    let importantTaskOutput = document.getElementById('main-important-task-container');
    let priorityImageInTask = document.getElementById(`prio-img-feedback${k}`).src;

    for (let o = 0; o < importantTasksFeedback.length; o++) {
        const importantTaskFeedback = importantTasksFeedback[o];

        if (priorityImageInTask == 'http://127.0.0.1:5500/img/board/prio-Urgent.png') {
            importantTaskOutput.innerHTML = templateImportantTaskFeedback(importantTaskFeedback, o);
            document.getElementById(`main-important-task-container-feedback${o}`).classList.remove('d-none');
            document.getElementById('main-important-task-container').classList.remove('d-none');
        }
    }
} // Baustelle Ende

function closeImportantTaskFeedback(k) {
    document.getElementById(`main-important-task-container-feedback${k}`).classList.add('d-none');
    document.getElementById('main-important-task-container').classList.add('d-none');
}

function openImportantTaskDone(l) {
    let importantTaskOutput = document.getElementById('main-board-container');
    let priorityImageInTask = document.getElementById(`prio-img-done${l}`).src;

    for (let n = 0; n < importantTasksDone.length; n++) {
        const importantTaskDone = importantTasksDone[n];

        if (priorityImageInTask == 'http://127.0.0.1:5500/img/board/prio-Urgent.png') {
            importantTaskOutput.innerHTML += templateImportantTaskDone(importantTaskDone, n);
            document.getElementById(`main-important-task-container-done${n}`).classList.remove('d-none');
        }
    }
}

function closeImportantTaskDone(l) {
    document.getElementById(`main-important-task-container-done${l}`).classList.add('d-none');
}
