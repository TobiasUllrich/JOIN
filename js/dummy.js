/**
 * Array to visualize the structure of the database users-array
 */
let usersScript = [
	{
		name: "Tobias Ullrich",
		surname: "Ulrich",
		picture: "tobias.jpg",
		email: "ullrich.tobias@test.de",
		phone: "888 234 234",
		password: "xxxxx",
		color: "#ee00d6",
	},
	{
		name: "Edip Bahcecioglu",
		surname: "Bahcecioglu",
		picture: "edip.jpg",
		email: "edip-bahcecioglu@test.de",
		phone: "888 243 241",
		password: "xxxxx",
		color: "#0038ff",
	},
	{
		name: "Eugen Oswald",
		surname: "Oswald",
		picture: "eugen.jpg",
		email: "oswald.eugen@test.com",
		phone: "888 123 123",
		password: "xxxxx",
		color: "#1fd7c1",
	},
	{
		name: "Rick Cabanossi",
		surname: "Cabanossi",
		picture: "rick.jpg",
		email: "rickyC@gmail.com",
		phone: "12345678910",
		password: "rIckydicLous",
		color: "#8aa4ff",
	},
	{
		name: "Mama Rina",
		surname: "Rina",
		picture: "mami.jpg",
		email: "MandM@web.de",
		phone: "12776644",
		password: "mama123",
		color: "#2ad300",
	},
	{
		name: "Kate Rina",
		surname: "Rina",
		picture: "kate.jpg",
		email: "kateRollin@xxx.com",
		phone: "333444555",
		password: "cheeseee",
		color: "#ff8a00",
	},
];

/**
 * Array to visualize the structure of the database tasks-array
 */
let tasksScript = [
	{
		id: 0,
		title: "Lasst uns starten :)",
		category: "Design", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#091931",
		description: "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
		dueDate: "30-10-2010",
		priority: "Medium", // Urgent, Medium, Low
		status: "To do", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["kateRollin@xxx.com", "edip-bahcecioglu@test.de"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
	{
		id: 1,
		title: "Lagebesprechung Preiserhöhungen",
		category: "Sales", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#ff0000",
		description: "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
		dueDate: "30-10-2015",
		priority: "Urgent", // Urgent, Medium, Low
		status: "To do", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["ullrich.tobias@test.de", "edip-bahcecioglu@test.de", "oswaldeugen95@test.com"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
	{
		id: 2,
		title: "Planung der Weihnachtsfeier",
		category: "Backoffice", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#2ad300",
		description: "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
		dueDate: "30-10-2010",
		priority: "Low", // Urgent, Medium, Low
		status: "Awaiting feedback", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["ullrich.tobias@gmx.de", "edip-bahcecioglu@hotmail.de", "MandM@web.de"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
	{
		id: 3,
		title: "Kündigung der Mitarbeiterin XXX",
		category: "Media", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#ff8a00",
		description: "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
		dueDate: "30-10-2010",
		priority: "Medium", // Urgent, Medium, Low
		status: "Awaiting feedback", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["MandM@web.de", "edip-bahcecioglu@test.de"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
	{
		id: 4,
		title: "Einführung neues Softwaresystem ERBY",
		category: "Marketing", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#8aa4ff",
		description: "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
		dueDate: "30-10-2010",
		priority: "Medium", // Urgent, Medium, Low
		status: "Done", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["kateRollin@xxx.com", "MandM@web.de"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
	{
		id: 5,
		title: "Einführungsschulung betriebseigenes Canbanboard",
		category: "Design", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#e200be",
		description: "Hier wird ein unnötiger Beschreibungstext stehen, der von dem User festgelegt wird",
		dueDate: "11-09-2022",
		priority: "Urgent", // Urgent, Medium, Low
		status: "Awaiting feedback", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["ullrich.tobias@test.de", "kateRollin@xxx.com"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
	{
		id: 6,
		title: "Call popentcial clients",
		category: "Sales", // Design, Marketing, Sales, Backoffice, Media usw. gerne weitere Vorschläge bzw. Ergänzungen
		categorycolor: "#0038ff",
		description: "Make the product presentation to prospective buyers",
		dueDate: "05-08-2022",
		priority: "Urgent", // Urgent, Medium, Low
		status: "In progress", // To do, In progress, Awaiting feedback, Done
		assignedTo: ["ullrich.tobias@test.de", "edip-bahcecioglu@test.de", "rickyC@gmail.com"], // Email of users Array (ist eindeutig)
		subTasks: ["Putzen", "Spülen", "Saubermachen"],
	},
];
