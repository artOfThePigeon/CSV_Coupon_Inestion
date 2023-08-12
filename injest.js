let csvList = []

function previewFile() {
	let csvRow = {};
	const content = document.querySelector(".content");
	const [file] = document.querySelector("input[type=file]").files;
	const reader = new FileReader();

	if (file) {
		reader.readAsText(file);
	}

	reader.onload = () => {	
		let rowObj = {}
		let values = []
		let csv = reader.result.split('\n');
		let keys = csv.shift().split(',');
		for (let row of csv) {
			values = row.split(',');
			for (let i = 0; i < keys.length; i ++) {
				rowObj[keys[i]] = values[i];
				Object.assign(rowObj, rowObj)
				console.log(rowObj)
			}
			csvList.push(rowObj);
		}
	
		console.log(csv);
		console.log(rowObj);
		console.log(csvList);
	}
}
