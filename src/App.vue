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

export default {
	name: 'App',

	data: () => ({
		historyScreen: false,
		aboutScreen: false,
		project: {},
	}),

	mixins: [HistoryMixin, DarkThemeMixin, LanguageMixin],

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
			}
		},

		addSpreadsheet(spreadsheetFile) {
			const simpleObject = {}

			for (const key in spreadsheetFile) {
				simpleObject[key] = spreadsheetFile[key]
			}

			this.project.spreadsheetList.push(simpleObject)

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
