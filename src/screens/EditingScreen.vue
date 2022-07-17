<template>
	<div class="block w-full">
		<hr class="mb-4" />

		<TCard>
			<div class="flex space-x-2 overflow-x-auto p-6">
				<!-- Spreadsheet list display -->
				<SpreadsheetCard
					:file="spreadsheetFile"
					v-for="spreadsheetFile in $root.project.spreadsheetList"
					:key="spreadsheetFile.path"
				/>

				<!-- Add new spreadsheet -->
				<input ref="file" type="file" class="hidden" @change="addNewSpreadsheet()" />

				<SelectSpreadsheetButton class="w-72" @click="$refs.file.click()"> {{ $t("Add another spreadsheet") }} </SelectSpreadsheetButton>
			</div>
		</TCard>

		<hr class="my-4" />

		
	</div>
</template>

<script>
import SpreadsheetCard from '@/components/SpreadsheetCard'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import TCard from '@/components/tailwind-components/TCard'

export default {
	components: {
		TCard,
		SpreadsheetCard,
		SelectSpreadsheetButton,
	},

	data: () => ({
		editingTitle: false,
	}),

	methods: {
		addNewSpreadsheet() {
			const success = this.$root.addSpreadsheet(this.$refs.file.files[0])

			if (success) {
				this.$refs.file.value = ''
			}
		},
	},
}
</script>
