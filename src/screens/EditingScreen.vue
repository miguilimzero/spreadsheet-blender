<template>
	<div class="block w-full">
		<div class="flex justify-between">
			<div class="flex items-center space-x-4">
				<TInput type="text" v-model="$root.project.name" v-if="editingTitle" />
				<h2 v-else>{{ $root.project.name }}</h2>

				<TButtonIcon @click="editingTitle = !editingTitle">
					<CheckIcon class="h-6 w-6" v-if="editingTitle" />
					<PencilIcon class="h-6 w-6" v-else />
				</TButtonIcon>
			</div>

			<div></div>
		</div>

		<hr class="my-6" />

		<TCard>
			<div class="flex space-x-2 overflow-x-auto p-6">
				<!-- Spreadsheet list display -->
				<SpreadsheetCard :file="spreadsheetFile" v-for="spreadsheetFile in $root.project.spreadsheetList" :key="spreadsheetFile.path" />

				<!-- Add new spreadsheet -->
				<input ref="file" type="file" class="hidden" @change="addNewSpreadsheet()" />

				<SelectSpreadsheetButton class="w-72" @click="$refs.file.click()"> Add another spreadsheet </SelectSpreadsheetButton>
			</div>
		</TCard>

		<hr class="my-6" />
	</div>

	<div class="fixed bottom-0 flex w-screen justify-between border-t bg-white px-6 py-4 dark:bg-gray-800">
		<TButtonWhite @click="$root.resetApp()"> <BanIcon class="mr-2 h-4 w-4" /> {{ $t('Cancel') }} </TButtonWhite>
		<TButtonPrimary @click="$root.finishProject()"> <CheckCircleIcon class="mr-2 h-4 w-4" /> {{ $t('Finish') }} </TButtonPrimary>
	</div>
</template>

<script>
import { BanIcon, CheckCircleIcon } from '@heroicons/vue/solid'
import { PencilIcon, CheckIcon } from '@heroicons/vue/outline'

import SpreadsheetCard from '@/components/SpreadsheetCard'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import TCard from '@/components/tailwind-components/TCard'
import TInput from '@/components/tailwind-components/TInput'
import TButtonIcon from '@/components/tailwind-components/TButtonIcon'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	components: {
		TCard,
		TInput,
		TButtonIcon,
		TButtonPrimary,
		TButtonWhite,
		BanIcon,
		CheckCircleIcon,
		PencilIcon,
		CheckIcon,
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
