const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let tasksinBoard = 0;
let tasksinProgress = 0;
let tasksawaitingFeedback = 0;
let tasksUrgent = 0;
let nextDeadlineofUrgentTasks=0;
let nextUrgentTaskDate;
let taskstoDo = 0;
let tasksDone = 0;

async function renderSummary(){

  await init();

for (i=0;i<tasks.length;i++){
  if (tasks[i]['status'] == 'In progress') {tasksinProgress++; };
  if (tasks[i]['status'] == 'Awaiting feedback') {tasksawaitingFeedback++; };
  if (tasks[i]['priority'] == 'Urgent') {tasksUrgent++; if (transformDate(tasks[i]['dueDate'])>nextDeadlineofUrgentTasks) {nextDeadlineofUrgentTasks=transformDate(tasks[i]['dueDate']);};};
  if (tasks[i]['status'] == 'To do') {taskstoDo++; };
  if (tasks[i]['status'] == 'Done') {tasksDone++; };
}
tasksinBoard = tasks.length;
nextUrgentTaskDate = transformDate2(nextDeadlineofUrgentTasks);

  fillSummarywithInfos(tasksinBoard,tasksinProgress,tasksawaitingFeedback,tasksUrgent,nextUrgentTaskDate,taskstoDo,tasksDone);
}

//Fills the HTML-Elements of summary.html with calculated values
function fillSummarywithInfos(tasksinBoard,tasksinProgress,tasksawaitingFeedback,tasksUrgent,nextUrgentTaskDate,taskstoDo,tasksDone){
  document.getElementById('numberTasksBoard').innerHTML=`${tasksinBoard}`;
  document.getElementById('numberTasksinProgress').innerHTML=`${tasksinProgress}`;
  document.getElementById('numberTasksawaitingFeedback').innerHTML=`${tasksawaitingFeedback}`;
  document.getElementById('numberTasksUrgent').innerHTML=`${tasksUrgent}`;
  document.getElementById('urgentdate').innerHTML=`${nextUrgentTaskDate}`;
  document.getElementById('numberTasksTodo').innerHTML=`${taskstoDo}`;
  document.getElementById('numberTasksDone').innerHTML=`${tasksDone}`;
}

//Receives a date-variable and converts it into a string with specific format (August 5, 2022)
function transformDate2(datetotransform){
  let datum = datetotransform;
  let tag = datum.getDate(datetotransform);
  let monat = datum.getMonth(datetotransform);
  let jahr = datum.getFullYear(datetotransform);
  let wishedformat = monthNames[Number(monat)] + ' '+ Number(tag) +', ' + jahr;
  return wishedformat;
}

//Receives a string in the format "30-10-2010" and converts it into a date-variable
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

//Invert Font-color & Background-Color
function addBackground(idOfElementToChange,idOfPicture){
   document.getElementById(idOfElementToChange).style='background-color: #FFFFFF;';
   document.getElementById(`${idOfPicture}`).style='filter: invert(100%);';
}

//Invert Font-color & Background-Color
function removeBackground(idOfElementToChange,idOfPicture){
  document.getElementById(idOfElementToChange).style='background-color: #091931;';
  document.getElementById(`${idOfPicture}`).style='filter: invert(0%);';
}