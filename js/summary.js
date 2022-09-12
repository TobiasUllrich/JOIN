const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
   if (transformDate(tasks[i]['dueDate'])>nextDeadlineofUrgentTasks) {nextDeadlineofUrgentTasks=transformDate(tasks[i]['dueDate']);};
  };
  if (tasks[i]['status'] == 'To do') 
  { taskstoDo++; };
  if (tasks[i]['status'] == 'Done') 
  { tasksDone++; };

}

let datum = nextDeadlineofUrgentTasks;
let tag = datum.getDate(nextDeadlineofUrgentTasks);
let monat = datum.getMonth(nextDeadlineofUrgentTasks);
let jahr = datum.getFullYear(nextDeadlineofUrgentTasks);
let datumSS = monthNames[Number(monat)] + ' '+ Number(tag) +', ' + jahr;
console.log(monthNames[Number(monat)] + ' '+ Number(tag) +', ' + jahr);


document.getElementById('numberTasksBoard').innerHTML=`${tasksinBoard}`;
document.getElementById('numberTasksinProgress').innerHTML=`${tasksinProgress}`;
document.getElementById('numberTasksawaitingFeedback').innerHTML=`${tasksawaitingFeedback}`;
document.getElementById('numberTasksUrgent').innerHTML=`${tasksUrgent}`;
document.getElementById('urgentdate').innerHTML=`${datumSS}`;

document.getElementById('numberTasksTodo').innerHTML=`${taskstoDo}`;
document.getElementById('numberTasksDone').innerHTML=`${tasksDone}`;


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

function transformDate(datetotransform){
  let datum = tasks[i]['dueDate'];
  let ersterstrich = datum.indexOf('-');
  let zweiterstrich = datum.lastIndexOf('-'); 
  let tag = datum.slice(0,ersterstrich);
  let monat = datum.slice(ersterstrich+1,zweiterstrich)-1;
  let jahr = datum.slice(zweiterstrich+1,datum.length);
  let datumZusGesetzt = new Date(jahr, monat, tag);
  return datumZusGesetzt;
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