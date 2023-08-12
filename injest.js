function previewFile() {
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
		for (let row = 0; row < csv.length; row++) {
			values = csv[row].split(',');
			for (let i = 0; i < keys.length; i ++) {
				rowObj[keys[i]] = values[i];
			}
			console.log(rowObj)
		}
	}
}
