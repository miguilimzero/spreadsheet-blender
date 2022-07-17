<template>
	<div class="mx-auto flex h-screen items-center justify-center -mt-[70px]">
		<div class="block">
			<input ref="file" type="file" class="hidden" @change="addFirstSpreadsheet()" />

			<SelectSpreadsheetButton @click="$refs.file.click()"> {{ $t('Select a new spreadsheet to start') }} </SelectSpreadsheetButton>
		</div>
	</div>
</template>

<script>
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

export default {
	components: {
		SelectSpreadsheetButton,
	},

	methods: {
		addFirstSpreadsheet() {
			const success = this.$root.addSpreadsheet(this.$refs.file.files[0])

			if (success) {
				this.$root.project.name = this.$t('Untitled Project')

				const historyHash = this.$root.appendProjectToHistory(this.$root.project)

				this.$root.project.historyHash = historyHash
			}
		},
	},
}
</script>
