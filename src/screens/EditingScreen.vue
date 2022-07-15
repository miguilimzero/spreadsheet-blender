<template>
	<div class="block w-full">
		<div class="flex justify-between">
			<div class="flex items-center space-x-4">
				<TInput type="text" v-model="$root.projectName" v-if="editingTitle" />
				<h2 v-else>{{ $root.projectName }}</h2>

				<TButtonIcon @click="editingTitle = !editingTitle">
					<CheckIcon class="w-6 h-6" v-if="editingTitle" />
					<PencilIcon class="w-6 h-6" v-else />
				</TButtonIcon>
			</div>

			<div></div>
		</div>

		<hr class="my-6">

		<TCard>
			<div class="p-6 flex space-x-2">
				<TCard v-for="fileName in $root.tableFiles" :key="fileName">
					<div class="p-4 space-y-4">
						<DatabaseIcon class="w-10 h-10" />
					</div>
				</TCard>

				<!-- Add new table -->
				<SelectSpreadsheetButton class="w-auto">
					Add another spreadsheet
				</SelectSpreadsheetButton>
			</div>
		</TCard>

		<hr  class="my-6">
	</div>

	<div class="fixed bottom-0 flex w-screen justify-between border-t bg-white dark:bg-gray-800 px-6 py-4">
		<TButtonWhite @click="$root.resetApp()"> <BanIcon class="mr-2 h-4 w-4" /> Cancel </TButtonWhite>
		<TButtonPrimary @click="$root.resultFile = 'x'"> <CheckCircleIcon class="mr-2 h-4 w-4" /> Finish </TButtonPrimary>
	</div>
</template>

<script>
import { BanIcon, CheckCircleIcon } from '@heroicons/vue/solid'
import { DatabaseIcon, PencilIcon, CheckIcon } from '@heroicons/vue/outline'

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
		DatabaseIcon,
		PencilIcon,
		CheckIcon,
		SelectSpreadsheetButton,
	},

	data: () => ({
		editingTitle: false,
	}),

	methods: {
		removeTableFromList() {

		},

		addTableToList() {

		},
	}
}
</script>
