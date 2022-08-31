/* [1.] Variablen ganz oben werden zuerst geladen/initialisiert und sind deshalb auch überall nutzbar */
let usersScript = [
  {
    "name": "Tobias",
    "surname": "Ullrich",
    "picture": "tobias.jpg",
    "email": "ullrich.tobias@gmx.de",
    "password": "xxx"
  },
  {
    "name": "Edip",
    "surname": "Bahcecioglu",
    "picture": "edip.jpg",
    "email": "edip-bahcecioglu@hotmail.de",
    "password": "xxx"
  },
  {
    "name": "Eugen",
    "surname": "Oswald",
    "picture": "eugen.jpg",
    "email": "oswaldeugen95@gmail.com",
    "password": "xxx"
  }
];

let tasksScript = [    
  {
    "title": "Lasst uns starten :)",
    "category": "Management",   // Management, Marketing, Sale, usw. gerne weitere Vorschläge bzw. Ergänzungen
    "description": "BlaBlaBla",
    "dueDate": "2010-10-30",
    "urgency": "High",        // High, Middle, Low
    "status": "Backlog",     // Backlog, To Do, In Progress, Testing, Done
    "assignedTo": [0,1,2]   // Index of users Array (ist eindeutig)
  },
  {
    "title": "Lagebesprechung Preiserhöhungen",
    "category": "Sales",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "2022-08-30",
    "urgency": "High",
    "status": "todo",
    "assignedTo": "userX"
  },
  {
    "title": "Planung der Weihnachtsfeier",
    "category": "Marketing",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "2022-11-12",
    "urgency": "Low",
    "status": "todo",
    "assignedTo": "userX"
  },
  {
    "title": "Kündigung der Mitarbeiterin XXX",
    "category": "Management",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "2022-12-16",
    "urgency": "Middle",
    "status": "inprogress",
    "assignedTo": "userX"
  },
  {
    "title": "Einführung neues Softwaresystem ERBY",
    "category": "Management",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "2022-09-04",
    "urgency": "High",
    "status": "testing",
    "assignedTo": "userX"
  },
  {
    "title": "Einführungsschulung betriebseigenes Canbanboard",
    "category": "Sales",
    "description": "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
    "dueDate": "2022-08-30",
    "urgency": "High",
    "status": "done",
    "assignedTo": "userX"
  },
  ];
/* [1.] Variablen ganz oben werden zuerst geladen/initialisiert und sind deshalb auch überall nutzbar */

/* [2.] Leert die Datenbank-Arrays users & tasks und befüllt sie mit den Daten von usersScript und tasksScript*/
function RESETandFILL(){
    
    deleteAllUsers(); 
    deleteAllTasks(); 
    console.log('huhu');

for (i=0;i<usersScript.length;i++){
    addUser(usersScript[i]);
    console.log(usersScript[i]);
};

for (i=0;i<tasksScript.length;i++){
    addTask(tasksScript[i]);
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

// ADD USER TO ARRAY
async function addUser(object) {
    users.push(object);
    //-> Im Live Array können wir gleich sehen, dass das Element inzugefügt wurde, es wird in der nächsten Zeile noch ins Backend übertragen
    await backend.setItem('users', JSON.stringify(users));
}

// ADD TASK TO ARRAY
async function addTask(object) {
    tasks.push(object);
    console.log(tasks);
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









/* [4.] Funktion um weitere HTML-Dateien einzubinden (Code von w3c)*/
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
/* [4.] Funktion um weitere HTML-Dateien einzubinden (Code von w3c)*/



/* [5.] Array zu String und wieder zurück */
/* Im localStorage kann nur Text gespeichert werden, ABER im Code kann nur ein Array sinnvoll genutzt werden */
/* key ist der Name unter welchem der Array gespeichert werden soll (frei wählbarer Text) und array ist das Array selbst  */
function setArray (key,array){
  localStorage.setItem(key,JSON.stringify(array));
}

function getArray (key){
  return JSON.parse(localStorage.getItem(key)); // JSON.parse() wandelt einen String in einen Array um
}
/* [5.] Array zu String und wieder zurück */
