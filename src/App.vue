<template>
	<div class="mx-auto flex h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-700">
		<!-- Exception ~ History Screen -->
		<HistoryScreen v-if="historyScreen" />

		<!-- First Screen Condition -->
		<FirstSelectScreen v-else-if="project.tableFiles.length === 0" />

		<!-- Second Screen Condition -->
		<EditingScreen v-else-if="project.resultFile === ''" />

		<!-- Third Screen Condition -->
		<FinishedScreen v-else />
	</div>
</template>

<script>
import FirstSelectScreen from './screens/FirstSelectScreen'
import EditingScreen from './screens/EditingScreen'
import FinishedScreen from './screens/FinishedScreen'

import HistoryScreen from './screens/HistoryScreen'

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
	},

	created() {
		this.resetApp()
	},

	methods: {
		resetApp() {
			this.project = {
				historyHash: '',
				name: '',
				tableFiles: [],
				resultFile: '',
			}
		},

		addSpreadsheet(path) {
			this.project.tableFiles.push(path)

			return true
		},

		removeSpreadsheet(path) {
			this.project.tableFiles = this.project.tableFiles.filter(fileName => fileName !== path)
		},

		finishProject() {
			this.$root.project.resultFile = 'C:\\Users\\Rafaela\\Área de Trabalho\\Minhas Planinhas\\Resultado.csv'
		},
	},
}
</script>
