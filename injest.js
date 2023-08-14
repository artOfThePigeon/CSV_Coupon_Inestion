
// Takes the CSV file from the input and creates a FileReader object.
// An event handler calls a function to convert the CSV to a list of objects, and passes the CSV as a single string of text as the arguement
function previewFile() {
	const [file] = document.querySelector("input[type=file]").files;
	const reader = new FileReader();
	reader.onload = () => {
		console.log(csvToList(reader.result))
	}
	if (file) reader.readAsText(file);
}


// Creates a new list (csvList) which will be the final output.
// splits the string of text from reader.result into a list where each list item corresponds to a row in the original CSV.
// Shifts off the first row which is always the headers the headers.
// Loops over the remaining rows, splitting each one into its own list of values, then binds then output of the addRow function into an empty lineItem object, and pushes it to the csvList
function csvToList(csvText) {
	let csvList = [];
	let values = [];
	let lineItem = {};
	let rows = csvText.split('\n');
	let keys = rows.shift().split(',');
	for (let row = 0; row < rows.length; row++) {
		values = rows[row].split(',');
		lineItem = addRow(keys, values)
		csvList.push(lineItem)
	}
	return csvList
}
// takes 2 lists as an input: the keys which correspond to the headers of the CSV, and the values from each individual row being passed from the loop in the csvToList function
// loops over the list of values from each row, then binds it to an new object as a key/value pair, where the key is taken from the keys list with the corresponding index position 
function addRow(keys, values) {
	let rowObj = {}
	for (let i = 0; i < values.length; i++) {
		rowObj[keys[i]] = values[i]
	}
	return rowObj;
}
		

