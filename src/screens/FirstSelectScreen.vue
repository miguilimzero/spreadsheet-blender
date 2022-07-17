<template>
	<div class="block">
		<input ref="file" type="file" class="hidden" @change="addFirstSpreadsheet()" />

		<SelectSpreadsheetButton @click="$refs.file.click()"> Select a new Spreadsheet to start </SelectSpreadsheetButton>
	</div>

	<TopRightButtonGroup>
		<LanguageSelector />

		<ThemeSelector />

		<TButtonWhite @click="$root.historyScreen = true"> <ClockIcon class="mr-2 h-4 w-4" /> History </TButtonWhite>
	</TopRightButtonGroup>
</template>

<script>
import { ClockIcon } from '@heroicons/vue/solid'
import TopRightButtonGroup from '@/components/TopRightButtonGroup'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

import ThemeSelector from '@/components/ThemeSelector'
import LanguageSelector from '@/components/LanguageSelector'

export default {
	components: {
		TopRightButtonGroup,
		SelectSpreadsheetButton,
		ThemeSelector,
		LanguageSelector,

		ClockIcon,
		TButtonWhite,
	},

	methods: {
		addFirstSpreadsheet() {
			this.$root.project.name = 'Untitled Project'
			this.$root.addSpreadsheet(this.$refs.file.files[0].path)

			const historyHash = this.$root.appendProjectToHistory(this.$root.project)

			this.$root.project.historyHash = historyHash
		},
	},
}
</script>
