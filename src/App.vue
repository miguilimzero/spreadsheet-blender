<template>
	<div class="bg-gray-50 dark:bg-gray-700">
		<TopBar />

		<div class="px-6">
			<!-- Exception ~ About Screen -->
			<AboutScreen v-if="aboutScreen" />

			<!-- Exception ~ History Screen -->
			<HistoryScreen v-else-if="historyScreen" />

			<!-- First Screen Condition -->
			<FirstSelectScreen v-else-if="project.spreadsheetList.length === 0" />

			<!-- Second Screen Condition -->
			<EditingScreen v-else-if="project.resultFile === ''" />

			<!-- Third Screen Condition -->
			<FinishedScreen v-else />
		</div>

		<BottomBar v-if="project.spreadsheetList.length !== 0 && project.resultFile === ''" />
		<BottomFooter v-else />
	</div>
</template>

<script>
import FirstSelectScreen from './screens/FirstSelectScreen'
import EditingScreen from './screens/EditingScreen'
import FinishedScreen from './screens/FinishedScreen'

import AboutScreen from './screens/AboutScreen'
import HistoryScreen from './screens/HistoryScreen'

import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import BottomFooter from './components/BottomFooter'

import HistoryMixin from './mixins/history'
import DarkThemeMixin from './mixins/dark-theme'
import LanguageMixin from './mixins/language'
import TableHandlerMixin from './mixins/table-handler'

export default {
	name: 'App',

	data: () => ({
		historyScreen: false,
		aboutScreen: false,
		project: {},
		spreadsheetData: {},
	}),

	mixins: [HistoryMixin, DarkThemeMixin, LanguageMixin, TableHandlerMixin],

	components: {
		FirstSelectScreen,
		EditingScreen,
		FinishedScreen,
		AboutScreen,
		HistoryScreen,
		TopBar,
		BottomBar,
		BottomFooter,
	},

	created() {
		this.resetApp()
	},

	methods: {
		resetApp() {
			this.project = {
				historyHash: '',
				name: '',
				spreadsheetList: [],
				resultFile: '',
				primaryColumn: '',
				levinstheinStrength: 1,
				blendingMethod: 'keep',
			}
		},
	
		getSpreadsheetPrimaryColumn(spreadsheet) {
			const data = this.spreadsheetData[spreadsheet][0]

			for (const columnIndex in data) {
				if(data[columnIndex] === data) {
					return columnIndex
				}
			}

			return 0
		}
	},

	computed: {
		projectColumns() {
			const columns = []

			for (const spreadsheet in this.spreadsheetData) {
				const data = this.spreadsheetData[spreadsheet][0]

				for (const columnIndex in data) {
					const column  = data[columnIndex]

					if (columns.indexOf(column) === -1) {
						columns.push(column)
					}
				}
			}

			return columns
		},

		projectRows() {
			const rows = {}

			for (const spreadsheet in this.spreadsheetData) {
				const data = this.spreadsheetData[spreadsheet]
				const primaryColumnIndex = this.getSpreadsheetPrimaryColumn(spreadsheet)

				const dataWithoutHeader = data.slice(1)

				for (const rowIndex in dataWithoutHeader) {
					const row = dataWithoutHeader[rowIndex]
					const primaryColumn = row[primaryColumnIndex]

					if (rows[primaryColumn] === undefined) {
						rows[primaryColumn] = row
					} else {
						rows[primaryColumn] = rows[primaryColumn].concat(row.slice(1))
					}
				}
			}

			return Object.values(rows)
		},

		projectEstimatedSize() {
			const size = this.$root.project
				.spreadsheetList
				.map(file => file.size)
				.reduce((a,b) => a + b)

			if (size > 1024 * 1024 * 1024) {
				return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`
			}
			if (size > 1024 * 1024) {
				return `${(size / 1024 / 1024).toFixed(2)} MB`
			}
			if (size > 1024) {
				return `${(size / 1024).toFixed(2)} KB`
			}

			return `${size} bytes`
		},
	},
}
</script>
