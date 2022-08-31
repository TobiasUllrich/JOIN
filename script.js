/* [1.] Variablen ganz oben werden zuerst geladen/initialisiert und sind deshalb auch überall nutzbar */
let users = [
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

let tasks=[    
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


/* [2.] Funktion um weitere HTML-Dateien einzubinden (Code von w3c)*/
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
/* [2.] Funktion um weitere HTML-Dateien einzubinden (Code von w3c)*/



/* [3.] Array zu String und wieder zurück */
/* Im localStorage kann nur Text gespeichert werden, ABER im Code kann nur ein Array sinnvoll genutzt werden */
/* key ist der Name unter welchem der Array gespeichert werden soll (frei wählbarer Text) und array ist das Array selbst  */
function setArray (key,array){
  localStorage.setItem(key,JSON.stringify(array));
}

function getArray (key){
  return JSON.parse(localStorage.getItem(key)); // JSON.parse() wandelt einen String in einen Array um
}
/* [3.] Array zu String und wieder zurück */
