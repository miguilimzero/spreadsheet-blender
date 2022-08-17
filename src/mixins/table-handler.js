/* eslint-disable */
import fs from 'fs'

export default {
	methods: {

		async addSpreadsheet(file) {
			// Validate spreadsheet file
			if (!this.isValidSpreadsheet(file)) {
				return false
			}

			// Convert from File object to standard object
			const simpleObject = {}

			for (const key in file) {
				simpleObject[key] = file[key]
			}

			// Block and wait for the file to be read
			this.spreadsheetData[file.path] = await this.getSpreadsheetData(file)

			// Finally add spreadsheet to project
			this.project.spreadsheetList.push(simpleObject)

			return true
		},

		removeSpreadsheet(path) {
			this.project.spreadsheetList = this.project.spreadsheetList.filter(file => file.path !== path)
		
			delete this.spreadsheetData[path]
		},

		
		isValidSpreadsheet(file) {
			if (file.type === 'text/csv') {
				return true
			}
			// if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
			// 	return true
			// }

			return false
		},

		async getSpreadsheetData(file) {
			const data = await fs.readFileSync(file.path, 'utf8').toString()

			return data.split("\n").map((row) => row.split(','))
		},

		getProjectFinalCsv() {
			const content = [].concat([this.projectColumns]).concat(this.projectRows)

			return content.map((row) => row.join(',')).join("\n")
		},

		finishProject() {
			const element = document.createElement("a");
			const file = new Blob([this.getProjectFinalCsv()], { type: "text/csv" });
			element.href = URL.createObjectURL(file);
			element.download = "Result.csv";
			element.click();

			setTimeout(() => this.project.resultFile = '/home/miguel/Área de trabalho/Result.csv', 4000)
		},
	},
}
