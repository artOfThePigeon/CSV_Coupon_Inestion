function balls(obj) {
	return obj
}
function previewFile() {
	const content = document.querySelector(".content");
	const [file] = document.querySelector("input[type=file]").files;
	const reader = new FileReader();

	if (file) {
		reader.readAsText(file);
	}

	reader.onload = () => {	
		
		let values = []
		let csvList = []
		let csvRow = {}
		let csv = reader.result.split('\n');
		let keys = csv.shift().split(',');
		for (let row = 0; row < csv.length; row++) {
			values = csv[row].split(',');
			csvRow = addRow(keys, values)
			csvList.push(csvRow)
		}
		console.log(csvList)
	
		function addRow(keys, values) {
			let rowObj = {}
			for (let i = 0; i < values.length; i++) {
				rowObj[keys[i]] = values[i]
			}
			return rowObj;

		}
	}
}
