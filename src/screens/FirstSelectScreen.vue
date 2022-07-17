<template>
	<div class="block">
		<SelectSpreadsheetButton @click="selectFirstSpreadsheet()"> Select a new Spreadsheet Table </SelectSpreadsheetButton>
	</div>

	<TopRightButtonGroup>
		<TButtonWhite>
			<UsaFlag class="mr-2 h-5 w-5" v-if="$root.language === 'US'" />
			<BrazilFlag class="mr-2 h-5 w-5" v-if="$root.language === 'BR'" />

			Language
		</TButtonWhite>

		<TButtonWhite @click="$root.historyScreen = true"> <ClockIcon class="mr-2 h-4 w-4" /> History </TButtonWhite>
	</TopRightButtonGroup>
</template>

<script>
import { ClockIcon } from '@heroicons/vue/solid'
import TopRightButtonGroup from '@/components/TopRightButtonGroup'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

import UsaFlag from '@/components/country-flags/UsaFlag'
import BrazilFlag from '@/components/country-flags/BrazilFlag'

export default {
	components: {
		TopRightButtonGroup,
		SelectSpreadsheetButton,

		ClockIcon,
		TButtonWhite,

		UsaFlag,
		BrazilFlag,
	},

	methods: {
		selectFirstSpreadsheet() {
			this.$root.project.tableFiles = ['x']
			this.$root.project.name = 'Untitled Project'

			const historyHash = this.$root.appendProjectToHistory(this.$root.project)

			this.$root.project.historyHash = historyHash
		},
	},
}
</script>
