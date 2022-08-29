function templateOfNewTask(){
    return `
    <div class="main-task> onclick="showTaskDetails()">
        <div class="task-headline">
            <div class="task-image"><img src=".img/todo.ong"></div>
            <div class="task-titel">
                <h3>TASKTITLE</h3>
                <span>TASKDATE</span>
            </div>
            <div class="delete-btn"><img src="./img/delete.png"></div>
        </div>

        <div id="task-details" class="task-details d-none">
            <span>Description: TASKDESCRIPTION</span>
            <span>Category: TASKCATEGORY</span>
            <span>Urgency: TASKURGENCY</span>
        </div>
    </div>
    `
}

function showTaskDetails(){
    document.getElementById('task-details').classList.remove('d-none'); // Hier muss der ID noch der Index übergeben werden
}