function renderBoard() {
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

function updateTasksHeadlinesStatusProgress(j){
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

function updateTaskHeadlinesStatusFeedback(k){
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

function updateStatusHeadlinesStatusDone(l){
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