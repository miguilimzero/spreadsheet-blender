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
			<div class="flex space-x-2 p-6">
				<TCard v-for="fileName in $root.project.tableFiles" :key="fileName">
					<div class="space-y-4 p-4">
						<DatabaseIcon class="h-10 w-10" />
					</div>
				</TCard>

				<!-- Add new table -->
				<SelectSpreadsheetButton class="w-auto"> Add another spreadsheet </SelectSpreadsheetButton>
			</div>
		</TCard>

		<hr class="my-6" />
	</div>

	<div class="fixed bottom-0 flex w-screen justify-between border-t bg-white px-6 py-4 dark:bg-gray-800">
		<TButtonWhite @click="$root.resetApp()"> <BanIcon class="mr-2 h-4 w-4" /> Cancel </TButtonWhite>
		<TButtonPrimary @click="finishProjectBlending()"> <CheckCircleIcon class="mr-2 h-4 w-4" /> Finish </TButtonPrimary>
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
		removeTableFromList() {},

		addTableToList() {},

		finishProjectBlending() {
			this.$root.project.resultFile = 'C:\\Users\\Rafaela\\Área de Trabalho\\Minhas Planinhas\\Resultado.csv'
		},
	},
}
</script>
