<template>
	<div class="mx-auto flex h-screen items-center justify-center bg-gray-50 px-4">
		<!-- Exception ~ History Screen -->
		<HistoryScreen v-if="historyScreen" />

		<!-- First Screen Condition -->
		<FirstSelectScreen v-else-if="tableFiles.length === 0" />

		<!-- Second Screen Condition -->
		<EditingScreen v-else-if="resultFile === ''" />

		<!-- Third Screen Condition -->
		<FinishedScreen v-else />
	</div>
</template>

<script>
import FirstSelectScreen from './screens/FirstSelectScreen'
import EditingScreen from './screens/EditingScreen'
import FinishedScreen from './screens/FinishedScreen'

import HistoryScreen from './screens/HistoryScreen'

export default {
	name: 'App',

	data: () => ({
		historyScreen: false,
		tableFiles: [],
		resultFile: '',
		modelValue: '',
		language: 'US',
	}),

	components: {
		FirstSelectScreen,
		EditingScreen,
		FinishedScreen,
		HistoryScreen,
	},

	methods: {
		resetApp() {
			this.tableFiles = []
			this.resultFile = ''
		}
	}
}
</script>
