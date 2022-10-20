/**
 * Array to visualize the structure of the database users-array
 */
let usersScript = [
  {
    "name": "Tobias Ullrich",
    "surname": "Ulrich",
    "picture": "tobias.jpg",
    "email": "ullrich.tobias@gmx.de",
    "phone": "888",
    "password": "xxxxx",
    "color": "#ee00d6"    
  },
  {
    "name": "Edip Bahcecioglu",
    "surname": "Bahcecioglu",
    "picture": "edip.jpg",
    "email": "edip-bahcecioglu@hotmail.de",
    "phone": "888",
    "password": "xxxxx",
    "color": "#0038ff"
  },
  {
    "name": "Eugen Oswald",
    "surname": "Oswald",
    "picture": "eugen.jpg",
    "email": "oswaldeugen95@gmail.com",
    "phone": "888",
    "password": "xxxxx",
    "color": "#1fd7c1"
  },
  {
    "name": "Rick Cabanossi",
    "surname": "Cabanossi",
    "picture": "rick.jpg",
    "email": "rickyC@gmail.com",
    "phone": "12345678910",
    "password": "rIckydicLous",
    "color": "#8aa4ff"
  },
  {
    "name": "Mama Rina",
    "surname": "Rina",
    "picture": "mami.jpg",
    "email": "MandM@web.de",
    "phone": "12776644",
    "password": "mama123",
    "color": "#2ad300"
  },
  {
    "name": "Kate Rina",
    "surname": "Rina",
    "picture": "kate.jpg",
    "email": "kateRollin@xxx.com",
    "phone": "333444555",
    "password": "cheeseee",
    "color": "#ff8a00"
  }
];

/**
 * Array to visualize the structure of the database tasks-array
 */
let tasksScript = [
  {
    "id": 0,
    "title": "Lasst uns starten :)",
    "category": "Design",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "BlaBlaBla",
    "dueDate": "30-10-2010",
    "priority": "Medium",       // Urgent, Medium, Low
    "status": "To do",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['kateRollin@xxx.com', 'edip-bahcecioglu@hotmail.de', 'oswaldeugen95@gmail.com'],  // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  },
  {
    "id": 1,
    "title": "Lagebesprechung Preiserhöhungen",
    "category": "Sales",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#ff0000",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2015",
    "priority": "Urgent",       // Urgent, Medium, Low
    "status": "To do",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de', 'edip-bahcecioglu@hotmail.de', 'oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  },
  {
    "id": 2,
    "title": "Planung der Weihnachtsfeier",
    "category": "Backoffice",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#2ad300",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Low",       // Urgent, Medium, Low
    "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de', 'edip-bahcecioglu@hotmail.de', 'MandM@web.de'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  },
  {
    "id": 3,
    "title": "Kündigung der Mitarbeiterin XXX",
    "category": "Media",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#ff8a00",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Medium",       // Urgent, Medium, Low
    "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['MandM@web.de', 'edip-bahcecioglu@hotmail.de', 'oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  },
  {
    "id": 4,
    "title": "Einführung neues Softwaresystem ERBY",
    "category": "Marketing",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#8aa4ff",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Medium",       // Urgent, Medium, Low
    "status": "Done",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['kateRollin@xxx.com', 'MandM@web.de', 'rickyC@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  },
  {
    "id": 5,
    "title": "Einführungsschulung betriebseigenes Canbanboard",
    "category": "Design",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#e200be",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "11-09-2022",
    "priority": "Urgent",       // Urgent, Medium, Low
    "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de', 'kateRollin@xxx.com', 'oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  },
  {
    "id": 6,
    "title": "Call popentcial clients",
    "category": "Sales",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#0038ff",
    "description": "Make the product presentation to prospective buyers",
    "dueDate": "05-08-2022",
    "priority": "Urgent",       // Urgent, Medium, Low
    "status": "In progress",    // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de', 'edip-bahcecioglu@hotmail.de', 'rickyC@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen', 'Spülen', 'Saubermachen']
  }
];


/**
 * Deletes the users- & tasks-array of the database
 */
async function RESET() {
  await deleteAllUsers();
  await deleteAllTasks();
  await init();
}


/**
 * Fills the users- & tasks-array of the database with the data from usersScript & tasksScript
 */
async function FILL() {
  for (i = 0; i < usersScript.length; i++) {
    await addUser(usersScript[i]);
  };

  for (i = 0; i < tasksScript.length; i++) {
    await addTask(tasksScript[i]);
  };

  await init();
}


/**
 * For the data-interchange with the server
 */
let users = [];
let tasks = [];

// https://github.com/JunusErgin/smallest_backend_ever
// Funktion setURL() ändert die Variable BASE_SERVER_URL auf den angegebenen Pfad
// Unter dem angegebenen Pfad muss der Ordner smallest_backend_ever mit allen Dateien von GitHub liegen
setURL('https://gruppe-2970.developerakademie.net/smallest_backend_ever');
//  FOR CHROME-EXTENSION: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
//  FOR LIVE-SERVER: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer


/**
 * Gets users- & tasks-data from the server
 */
async function init() {
  // GET User-Data form the Server which is saved in backend
  await downloadFromServer();
  users = JSON.parse(backend.getItem('users')) || [];

  // GET Tasks-Data form the Server which is saved in backendTWO
  await downloadFromServerTWO(); /** INSERT FOR SECOND JSON-FILE */
  tasks = JSON.parse(backendTWO.getItem('tasks')) || [];
}


/**
 * Gives you all user-data for an e-mail
 * @param {string} email E-Mail-adress to search for in the users-array
 * @returns User-object with all data correspondig to the user with the specific E-Mail
 */
function getUserAsObject(email) {
  for (i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) {
      return users[i];
    }
  }
}


/**
 * Checks if an e-mail exists in users-array
 * @param {string} email E-Mail-adress to search for in the users-array
 * @returns true if e-mail was found, else returns false
 */
function checkifEMailexists(email) {
  let userfound = false;
  for (i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) {
      userfound = true; //Email found
    }
  }
  return userfound;
}


/**
 * Checks if an e-mail exists in users-array and returns the index of the user
 * @param {string} email E-Mail-adress to search for in the users-array
 * @returns -1 if e-mail was not found, else returns Index (0 ... N)
 */
 function getUserIndexForEmail(email) {
  let userindex = -1;
  for (i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) {
      userindex = i; //Email found
    }
  }
  return userindex;
}


/**
 * Checks if password-entry of a user with a certain email matches with the database-password
 * @param {string} email E-Mail-adress to search for in the users-array
 * @param {string} password Password typed in by the user in the Input-field
 * @returns true if password-parameter matches password in the database, else returns false
 */
function checkifPasswordMatches(email, password) {
  let passwordmatches = false;
  for (i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase() && users[i]['password'] == password) {
      passwordmatches = true; //Password matches
    }
  }
  return passwordmatches; //If found once "true" is returned, else it stays "false"
}


/**
 * Sets new password for a specific user-email
 * @param {string} email E-Mail-adress of a specific user
 * @param {string} password New Password to set for the specific user
 * @returns true if password has successfully been changed, otherwise false
 */
async function setPasswordForUser(email, password) {
  let passwordSet = false;
  for (i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) {
      users[i]['password'] = password;
      passwordSet = true; //Password is set
      await backend.setItem('users', JSON.stringify(users)); //users-array is saved into backend
    }
  }
  return passwordSet; //If changed "true" is returned, else it stays "false"
}


/**
 * Adds a new user to the users-array
 * @param {object} object User-object with all data correspondig to the user
 */
async function addUser(object) {
  users.push(object);
 await backend.setItem('users', JSON.stringify(users)); //users-array is saved into backend
}


/**
 * Adds a new task to the tasks-array
 * @param {object} object Tasks-object with all data correspondig to the task
 */
async function addTask(object) {
  tasks.push(object);
  await backendTWO.setItem('tasks', JSON.stringify(tasks)); //tasks-array is saved into backend
}


/**
 * Changes one attribute of a task with a certain index to a certain value or to an array of values
 * @param {number} index Index of the task
 * @param {string} attribute Attribute you want to change
 * @param {value or array} valueOrArray Value you want the attribute to have
 */
 async function changeTaskAttribute(index,attribute,valueOrArray) { 
  tasks[index][attribute] = valueOrArray;
  await backendTWO.setItem('tasks', JSON.stringify(tasks)); //tasks-array is saved into backend
}


/**
 * Changes one or more attribute of a user with a certain email through an object which contains the new values 
 * @param {object} object Object which equals a complete User (e.g. object = users[2];)
 */
 async function changeUser(object,) {
  let oldEmail = object['oldEmail']; 
  let index = getUserIndexForEmail(oldEmail);

  users[index]['name'] = object['name'];
  users[index]['surname'] = object['surname'];
  users[index]['picture'] = object['picture'];
  users[index]['email'] = object['email'];
  users[index]['phone'] = object['phone'];
  users[index]['password'] = object['password'];
  users[index]['color'] = object['color'];
  await backend.setItem('users', JSON.stringify(users)); //users-array is saved into backend
}


/**
 * Changes one or more attribute of a task with a certain index through an object which contains the new values 
 * @param {object} object Object which equals a complete Task (e.g. object = tasks[3];)
 */
async function changeTask(object) {
  let index = object['id']; 
  tasks[index]['title'] = object['title'];
  tasks[index]['category'] = object['category'];
  tasks[index]['categorycolor'] = object['categorycolor'];
  tasks[index]['description'] = object['description'];
  tasks[index]['dueDate'] = object['dueDate'];
  tasks[index]['priority'] = object['priority'];
  tasks[index]['status'] = object['status'];
  tasks[index]['assignedTo'] = object['assignedTo'];
  tasks[index]['subTasks'] = object['subTasks'];
  await backendTWO.setItem('tasks', JSON.stringify(tasks)); //tasks-array is saved into backend
}


/**
 * Deletes a specific user from the users-array via index
 * @param {number} index Index from 0 to N
 */
async function delUser(index) {
  if (index !== parseInt(index, 10)) { } //Data is not an integer!
  if (index >= users.length || index < 0) { } //ERROR: Number to High or to Low!
  else if (index == 0 && users.length == 1) { deleteAllUsers(); } //KILL Complete Array
  else {
    users.splice(index, 1); //Data is an integer!
    await backend.setItem('users', JSON.stringify(users)); //users-array is saved into backend
  }
}


/**
 * Deletes a specific task from the tasks-array via index
 * @param {number} index Index from 0 to N
 */
async function delTask(index) {
  if (index !== parseInt(index, 10)) { } //Data is not an integer!
  if (index >= tasks.length || index < 0) { } //ERROR: Number to High or to Low!
  else if (index == 0 && tasks.length == 1) { deleteAllTasks(); } //KILL Complete Array
  else {
    tasks.splice(index, 1); //Data is an integer!
    await backendTWO.setItem('tasks', JSON.stringify(tasks)); //tasks-array is saved into backend
  }
}


/**
 * Deletes all users from users-array
 */
async function deleteAllUsers() {
  await backend.deleteItem('users'); //init() shows, that array is empty
}


/**
 * Deletes all tasks from tasks-array
 */
async function deleteAllTasks() {
  await backendTWO.deleteItem('tasks'); //init() shows, that array is empty
}


/**
 * Enables the Pop-Up-Menu on the upper right corner to show up
 */
function showLogoutButton() {
  document.getElementById('logout').classList.remove('d-none');
}


/**
 * Lets the Pop-Up-Menu on the upper right corner disappear
 */
function hideLogoutButton() {
  try { document.getElementById('logout').classList.add('d-none'); }
  catch (e) { };
}


/**
 * Lets the Pop-Up-Menu on the upper right corner disappear
 * @param {object} event Every event that does not target 'footer-picture' lets the Pop-Up-Menu on the right corner disappear
 */
window.onclick = function (event) {
  if (event.target.id != 'footer-picture') {
    hideLogoutButton();
  }
}


/**
 * Sets the user-picture in the upper right corner if you have logged in into the JOIN-Tool
 */
function setactUser() {
  let actUserArray = [];
  actUserArray = getArray('arrayOfactUser') //Gets User-Object from local Storage

  //Without setTimeout it trys to write into src before page is loaded (Hint: src="" as Standard of the Element you want to write in)
  setTimeout(function () {
    document.getElementById('footer-picture').src = `img/${actUserArray['picture']}`;
  }, 1000);
}


/**
 * Includes header.html & footer.html into all pages
 */
async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]'); //All elements with the Attribut '[w3-include-html]' are selected
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // Searches for all elements with the "w3-include-html" attribute
    let resp = await fetch(file); // await 
    if (resp.ok) {   // ok = Boolean Variable which saves the status (true = fine; false = not fine)
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}


/**
 * Saves array as String in the localStorage
 * @param {string} key Unique key under which the array is saved in the localStorage
 * @param {array} array Array with data
 */
function setArray(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}


/**
 * Gets an array from the localStorage
 * @param {string} key Unique key under which the array is saved in the localStorage
 * @returns an array, which can be saved into a variable
 */
function getArray(key) {
  return JSON.parse(localStorage.getItem(key));
}
