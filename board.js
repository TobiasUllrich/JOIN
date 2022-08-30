function templateOfNewTask() { // INDEX MUSS NOCH ÜBERGEBEN WERDEN
    return `
    <div id="main-task" class="main-task border-left-red" onclick="showTaskDetails()">
        <div class="task-headline">
            <div><img class="task-image" src="./img/todo.png"></div>
            <div class="task-titel">
                <h3>TASKTITLE</h3>
                <span>TASKDATE</span>
            </div>
            <div class="delete-btn"><img class="delete-img" src="./img/delete.png"></div>
        </div>

        <div id="task-details" class="task-details d-none">
            <table>
                <tr>
                    <td><b>Description:</b></td>
                    <td>TASKDESCRIPTION</td>
                </tr>

                <tr>
                    <td><b>Category:</b></td>
                    <td>TASKCATEGORY</td>
                </tr>

                <tr>
                    <td><b>Urgency:</b></td>
                    <td>TASKURGENCY</td>
                </tr>

                <tr>
                    <td><b>Assigned to:</b></td>
                    <td>USER</td>
                </tr>
            </table>
        </div>
    </div>
</div>
    `
}

function showTaskDetails() {
    document.getElementById('main-task').classList.toggle('twohundert-height'); // Hier muss der ID noch der Index übergeben werden
    document.getElementById('task-details').classList.toggle('d-none');
}