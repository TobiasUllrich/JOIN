
let tasksinBoard = 0;
let tasksinProgress = 0;
let tasksawaitingFeedback = 0;
let tasksUrgent = 0;
let nextDeadlineofUrgentTasks=0;
let taskstoDo = 0;
let tasksDone = 0;

async function renderSummary(){
await init();

  tasksinBoard = tasks.length;

for (i=0;i<tasks.length;i++){
  if (tasks[i]['status'] == 'In progress') 
  { tasksinProgress++; };
  if (tasks[i]['status'] == 'Awaiting feedback') 
  { tasksawaitingFeedback++; };
  if (tasks[i]['priority'] == 'Urgent') 
  { tasksUrgent++; 
   if (tasks[i]['dueDate']>nextDeadlineofUrgentTasks) {nextDeadlineofUrgentTasks=tasks[i]['dueDate'];};
  };
  if (tasks[i]['status'] == 'To do') 
  { taskstoDo++; };
  if (tasks[i]['status'] == 'Done') 
  { tasksDone++; };

  console.log(tasks[i]['dueDate']);
}

document.getElementById('numberTasksBoard').innerHTML=`${tasksinBoard}`;
document.getElementById('numberTasksinProgress').innerHTML=`${tasksinProgress}`;
document.getElementById('numberTasksawaitingFeedback').innerHTML=`${tasksawaitingFeedback}`;
document.getElementById('numberTasksUrgent').innerHTML=`${tasksUrgent}`;
// document.getElementById('urgentdate').innerHTML=`${}`;

document.getElementById('numberTasksTodo').innerHTML=`${taskstoDo}`;
document.getElementById('numberTasksDone').innerHTML=`${tasksDone}`;
// console.log(tasksinBoard,tasksinProgress,tasksawaitingFeedback);
// console.log(tasksUrgent,nextDeadlineofUrgentTasks);
// console.log(taskstoDo,tasksDone);

// {
//   "title": "Kündigung der Mitarbeiterin XXX",
//   "category": "Media",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
//   "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
//   "dueDate": "30-10-2010",
//   "priority": "Medium",       // Urgent, Medium, Low
//   "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
//   "assignedTo": [0,1,2],   // Index of users Array (ist eindeutig)
//   "subTasks": ['Putzen','Spülen','Saubermachen'] 
// },

}


//Go to Board
function showBoard() {
  window.location.href = 'board.html';
}

function addBackground(idOfElementToChange,idOfPicture){
   document.getElementById(idOfElementToChange).style='background-color: #FFFFFF;';
   document.getElementById(`${idOfPicture}`).style='filter: invert(100%);';
}

function removeBackground(idOfElementToChange,idOfPicture){
  document.getElementById(idOfElementToChange).style='background-color: #091931;';
  document.getElementById(`${idOfPicture}`).style='filter: invert(0%);';
}