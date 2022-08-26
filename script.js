/* [1.] Variablen ganz oben werden zuerst geladen/initialisiert und sind deshalb auch überall nutzbar */
let users = [
  {
    "Name": "Tobias",
    "Surname": "Ullrich",
    "Picture": "tobias.jpg",
    "EMail": "ullrich.tobias@gmx.de"
  },
  {
    "Name": "Edip",
    "Surname": "",
    "Picture": "edip.jpg",
    "EMail": ""
  },
  {
    "Name": "Eugen",
    "Surname": "",
    "Picture": "eugen.jpg",
    "EMail": ""
  }
];

let tasks=[    
  {
    "Title": "Lasst uns starten :)",
    "Category": "Management",   // Management, Marketing, Sale, usw. gerne weitere Vorschläge bzw. Ergänzungen
    "Description": "BlaBlaBla",
    "DueDate": "2010-10-30",
    "Urgency": "High",        // High, Middle, Low
    "Status": "Backlog",     // Backlog, To Do, In Progress, Testing, Done
    "AssignedTo": [0,1,2]   // Index of users Array (ist eindeutig)
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
