/* [1.] Variablen ganz oben werden zuerst geladen/initialisiert und sind deshalb auch überall nutzbar */
let usersScript = [
  {
    "name": "Tobias Ullrich",
    "picture": "tobias.jpg",
    "email": "ullrich.tobias@gmx.de",
    "phone":"888",
    "password": "xxxxx"
  },
  {
    "name": "Edip Bahcecioglu",
    "picture": "edip.jpg",
    "email": "edip-bahcecioglu@hotmail.de",
    "phone":"888",
    "password": "xxxxx"
  },
  {
    "name": "Eugen Oswald",
    "picture": "eugen.jpg",
    "email": "oswaldeugen95@gmail.com",
    "phone":"888",
    "password": "xxxxx"
  }
];

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
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  },
  {
    "id": 1,
    "title": "Lagebesprechung Preiserhöhungen",
    "category": "Sales",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Urgent",       // Urgent, Medium, Low
    "status": "To do",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  },
  {
    "id": 2,
    "title": "Planung der Weihnachtsfeier",
    "category": "Backoffice",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Low",       // Urgent, Medium, Low
    "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  },
  {
    "id": 3,
    "title": "Kündigung der Mitarbeiterin XXX",
    "category": "Media",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Medium",       // Urgent, Medium, Low
    "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  },
  {
    "id": 4,
    "title": "Einführung neues Softwaresystem ERBY",
    "category": "Marketing",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Medium",       // Urgent, Medium, Low
    "status": "Done",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  },
  {
    "id": 5,
    "title": "Einführungsschulung betriebseigenes Canbanboard",
    "category": "Design",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "30-10-2010",
    "priority": "Urgent",       // Urgent, Medium, Low
    "status": "Awaiting feedback",     // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  },
  {
    "id": 6,
    "title": "Call popentcial clients",
    "category": "Sales",  // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
    "categorycolor": "#091931",
    "description": "Make the product presentation to prospective buyers",
    "dueDate": "05-08-2022",
    "priority": "Urgent",       // Urgent, Medium, Low
    "status": "In progress",    // To do, In progress, Awaiting feedback, Done
    "assignedTo": ['ullrich.tobias@gmx.de','edip-bahcecioglu@hotmail.de','oswaldeugen95@gmail.com'],   // Email of users Array (ist eindeutig)
    "subTasks": ['Putzen','Spülen','Saubermachen'] 
  }
  ];
/* [1.] Variablen ganz oben werden zuerst geladen/initialisiert und sind deshalb auch überall nutzbar */

/* [2.] Leert die Datenbank-Arrays users & tasks und befüllt sie mit den Daten von usersScript und tasksScript*/
async function RESETandFILL(){
    
    await deleteAllUsers(); 
    await deleteAllTasks(); 

for (i=0;i<usersScript.length;i++){
    await addUser(usersScript[i]);
    console.log(usersScript[i]);
};

for (i=0;i<tasksScript.length;i++){
    await addTask(tasksScript[i]);
    console.log(tasksScript[i]);
};

}
/* [2.] Leert die Datenbank-Arrays users & tasks und befüllt sie mit den Daten von usersScript und tasksScript*/


/* [3.]  Für den Datenaustausch mit dem Server */
// https://github.com/JunusErgin/smallest_backend_ever
let users = [];
let tasks = [];

// Funktion setURL() ändert die Variable BASE_SERVER_URL auf den angegebenen Pfad
// Unter dem angegebenen Pfad muss der Ordner smallest_backend_ever mit allen Dateien von GitHub liegen
setURL('https://gruppe-2970.developerakademie.net/smallest_backend_ever');

// WICHTIG ZU INSTALLIEREN SIND DIE FOLGENDEN ZWEI:
//  FÜR CHROME-ERWEITERUNG: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
//  FÜR LIVE-SERVER: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer


async function init() {

    // GET User-Data form the Server which is saved in backend
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];

    // GET Tasks-Data form the Server which is saved in backendTWO
    await downloadFromServerTWO(); /** INSERT FOR SECOND JSON-FILE */
    tasks = JSON.parse(backendTWO.getItem('tasks')) || [];

}

// GET SINGLE USER AS OBJECT
function getUserAsObject(email) {
  for (i=0;i<users.length;i++){
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) 
    { 
      return users[i];
    }
  }
}

// CHECK IF EMAIL OF USER IS IN ARRAY
function checkifEMailexists(email) {
  let userfound = false;
  for (i=0;i<users.length;i++){
    console.log(users[i]['email'].toLowerCase());
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) 
    { userfound = true; //Email found
      return userfound;
    }
  }
}

// CHECK IF PASSWORD-ENTRY OF USER WITH CERTAIN EMAIL MATCHES DATABASE-PASSWORD
function checkifPasswordMatches(email,password) {
  let passwordmatches = false;
  for (i=0;i<users.length;i++){      
     if (users[i]['email'].toLowerCase() == email.toLowerCase() && users[i]['password'] == password)
      {passwordmatches = true; //Password matches
       return passwordmatches; //If found once "true" is returned, else it stays "false"
      }
  }  
}

// SET PASSWORD FOR PASSWORDFORGOTTEN-REQUESTS
async function setPasswordForUser(email,password) {
let passwordSet = false;
  for (i=0;i<users.length;i++){      
     if (users[i]['email'].toLowerCase() == email.toLowerCase())
      { users[i]['password'] = password;
        passwordSet = true; //Password is set
        //-> Im Live Array können wir gleich sehen, dass das Element inzugefügt wurde, es wird in der nächsten Zeile noch ins Backend übertragen
        await backend.setItem('users', JSON.stringify(users));
        return passwordSet; //If changed "true" is returned, else it stays "false"
      }
  }  
}

// ADD USER TO ARRAY
async function addUser(object) {
    users.push(object);
    //-> Im Live Array können wir gleich sehen, dass das Element inzugefügt wurde, es wird in der nächsten Zeile noch ins Backend übertragen
    await backend.setItem('users', JSON.stringify(users));
}

// ADD TASK TO ARRAY
async function addTask(object) {
    tasks.push(object);
    //-> Im Live Array können wir gleich sehen, dass das Element inzugefügt wurde, es wird in der nächsten Zeile noch ins Backend übertragen
    await backendTWO.setItem('tasks', JSON.stringify(tasks));
}

// DELETE SPECIFIC USER FROM ARRAY
async function delUser(index) {
    //let id = users.indexOf(name);
    if (index !== parseInt(index, 10))
      {console.log("Data is not an integer!");}
    if (index >= users.length || index < 0)
      {console.log("ERROR: Number to High or to Low!");}
    else if (index == 0 && users.length == 1)
      {console.log("KILL Complete Array");deleteAllUsers();}
    else 
    {
        console.log("Data is an integer!");
        users.splice(index, 1);
        //-> Im Live Array können wir gleich sehen, dass das Element gelöscht wurde, es wird in der nächsten Zeile noch ins Backend übertragen
        await backend.setItem('users', JSON.stringify(users));
    }
}

// DELETE SPECIFIC TASK FROM ARRAY
async function delTask(index) {
    //let id = tasks.indexOf(name);
    if (index !== parseInt(index, 10))
      {console.log("Data is not an integer!");}
    if (index >= tasks.length || index < 0)
      {console.log("ERROR: Number to High or to Low!");}
    else if (index == 0 && tasks.length == 1)
      {console.log("KILL Complete Array");deleteAllTasks();}
    else 
    {
        console.log("Data is an integer!");
        tasks.splice(index, 1);
        //-> Im Live Array können wir gleich sehen, dass das Element gelöscht wurde, es wird in der nächsten Zeile noch ins Backend übertragen
        await backendTWO.setItem('tasks', JSON.stringify(tasks));
    }
}

// DELETE ALL USERS FROM ARRAY
async function deleteAllUsers() {
    await backend.deleteItem('users');
    //-> Wenn jetzt nach dem Deleten ein init() ausgeführt wird, dann sieht man, dass das Array leer ist
}

// DELETE ALL TASKS FROM ARRAY
async function deleteAllTasks() {
    await backendTWO.deleteItem('tasks');
    //-> Wenn jetzt nach dem Deleten ein init() ausgeführt wird, dann sieht man, dass das Array leer ist
}
/* [3.]  Für den Datenaustausch mit dem Server */

/* [4.]  For Log-Out in the right corner */
function showLogoutButton(){
  document.getElementById('logoutbtn').classList.remove('d-none');
}
/* [4.]  For Log-Out in the right corner */

/* [5.] Funktion um weitere HTML-Dateien einzubinden (Code von w3c)*/
/* Code von w3c*/
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]'); //Alle Elemente mit Attribut '[w3-include-html]' werden ausgewählt
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // die Suche nach dem Attribut beinhaltet auch header.html, wenn die Seite dieses Attribut besitzt
        let resp = await fetch(file); // await kann nur mit asynchroner Funktion verwendet werden
        if (resp.ok) {   // ok = Boolean Variable die den Status anzeigt ob alles ok ist (true) oder eben nicht (false)
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
/* [5.] Funktion um weitere HTML-Dateien einzubinden (Code von w3c)*/

/* [6.] Array zu String und wieder zurück */
/* Im localStorage kann nur Text gespeichert werden, ABER im Code kann nur ein Array sinnvoll genutzt werden */
/* key ist der Name unter welchem der Array gespeichert werden soll (frei wählbarer Text) und array ist das Array selbst  */
function setArray (key,array){
  localStorage.setItem(key,JSON.stringify(array));
}

function getArray (key){
  return JSON.parse(localStorage.getItem(key)); // JSON.parse() wandelt einen String in einen Array um
}
/* [6.] Array zu String und wieder zurück */

