/* eslint-disable */
import fs from 'fs'

export default {
	methods: {
		isValidSpreadsheet(file) {
			if (file.type === 'text/csv') {
				return true
			}
			if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
				return true
			}

			return false
		},

		formatAndConvertSpreadsheet(file) { },

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
