function previewFile() {
	const [file] = document.querySelector("input[type=file]").files;
	const reader = new FileReader();
	if (file) reader.readAsText(file);
	
	reader.onload = () => {
		console.log(csvToList(reader))
	}
}

function csvToList(reader) {
	let csvList = [];
	let values = [];
	let lineItem = {};
	let rows = reader.result.split('\n');
	let keys = rows.shift().split(',');
	for (let row = 0; row < rows.length; row++) {
		values = rows[row].split(',');
		lineItem = addRow(keys, values)
		csvList.push(lineItem)
	}
	return csvList
}
		
function addRow(keys, values) {
	let rowObj = {}
	for (let i = 0; i < values.length; i++) {
		rowObj[keys[i]] = values[i]
	}
	return rowObj;
}
		

