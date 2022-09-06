// ##############BOARD TEMPLATES START################# //
function templateOfNewTaskToDo(todo, i) {
    return `
    <div class="main-task-container" draggable="true">
        <div class="headline-category">
            <div class="headline-solo-task"><h3>${todo.category}</h3></div>
        </div>
        <div class="task-title">
            <span id="task-title">${todo.title}</span>
        </div>
        <div class="task-description">
            <span title="${todo.description}">${todo.description}</span>
        </div>
        <div class="workers-prio">
            <div class="main-workers">
                <div id="solo-worker" class="solo-worker">
                    <!--TEMPLATE RENDERN VON ARBEIERN-->
                    <span class="worker-name-start-letters">EB</span>
                </div>
            </div>
        <div id="prio-img" class="prio-img">
            <img src="./img/board/prio-low.png">
        </div>
    </div>
</div>`
}

function templateOfTaskInProgress(taskProgress, j) {
    return ``
}

function templateOfTaskTesting(taskTest, k) {
    return ``
}

function templateOfTaskDone(doneTask, l) {
    return ``
}

// ##############BOARD TEMPLATES END################# //