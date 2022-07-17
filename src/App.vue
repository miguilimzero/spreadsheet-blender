<template>
	<div class="mx-auto flex h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-700">
		<TopBar />

		<div>
			<!-- Exception ~ History Screen -->
			<HistoryScreen v-if="historyScreen" />

			<!-- First Screen Condition -->
			<FirstSelectScreen v-else-if="project.spreadsheetList.length === 0" />

			<!-- Second Screen Condition -->
			<EditingScreen v-else-if="project.resultFile === ''" />

			<!-- Third Screen Condition -->
			<FinishedScreen v-else />
		</div>

		<BottomBar v-if="project.spreadsheetList.length !== 0" />
	</div>
</template>

<script>
import FirstSelectScreen from './screens/FirstSelectScreen'
import EditingScreen from './screens/EditingScreen'
import FinishedScreen from './screens/FinishedScreen'

import HistoryScreen from './screens/HistoryScreen'

import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'

import HistoryMixin from './mixins/history'
import DarkThemeMixin from './mixins/dark-theme'
import LanguageMixin from './mixins/language'

export default {
	name: 'App',

	data: () => ({
		historyScreen: false,
		project: {},
	}),

	mixins: [HistoryMixin, DarkThemeMixin, LanguageMixin],

	components: {
		FirstSelectScreen,
		EditingScreen,
		FinishedScreen,
		HistoryScreen,
		TopBar,
		BottomBar
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
			}
		},

		addSpreadsheet(spreadsheetFile) {
			this.project.spreadsheetList.push(spreadsheetFile)

			return true
		},

		removeSpreadsheet(path) {
			this.project.spreadsheetList = this.project.spreadsheetList.filter(spreadsheetFile => spreadsheetFile.path !== path)
		},

		finishProject() {
			this.$root.project.resultFile = 'C:\\Users\\Rafaela\\Área de Trabalho\\Minhas Planinhas\\Resultado.csv'
		},
	},
}
</script>
