<template>
	<div class="mx-auto -mt-[70px] flex h-screen items-center justify-center">
		<div class="block space-y-8">
			<input ref="file" type="file" class="hidden" @change="addFirstSpreadsheet()" />

			<SelectSpreadsheetButton @click="$refs.file.click()"> {{ $t('Select a new spreadsheet to start') }} </SelectSpreadsheetButton>

			<InvalidFileError ref="fileError" />
		</div>
	</div>
</template>

<script>
import InvalidFileError from '@/components/InvalidFileError'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

export default {
	components: {
		InvalidFileError,
		SelectSpreadsheetButton,
	},

	methods: {
		addFirstSpreadsheet() {
			const success = this.$root.addSpreadsheet(this.$refs.file.files[0])

			if (!success) {
				this.$refs.fileError.show()

				return
			}
			this.$root.project.name = this.$t('Untitled Project')

			const historyHash = this.$root.appendProjectToHistory(this.$root.project)

			this.$root.project.historyHash = historyHash
		},
	},
}
</script>
