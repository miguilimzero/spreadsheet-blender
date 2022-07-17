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
			<div class="flex overflow-x-auto space-x-2 p-6">
				<div class="overflow-hidden rounded-lg bg-white dark:bg-gray-800 w-72 border" v-for="(fileName, index) in $root.project.tableFiles" :key="fileName">
					<div class="space-y-4 py-6 px-8">
						<div class="flex justify-center">
							<div class="bg-indigo-100 text-indigo-600 p-3 rounded-full">
								<DatabaseIcon class="h-8 w-8" />
							</div>
						</div>

						<h4 class="font-bold text-center">Table {{ index + 1 }}</h4>

						<TBadge color="gray">
							{{ fileName }}
						</TBadge>

						<div class="flex justify-center space-x-2">
							<TButtonPrimary>
								<CogIcon class="w-4 h-4 mr-2" /> Options
							</TButtonPrimary>
							<TButtonWhite @click="$root.removeSpreadsheet(fileName)">
								<TrashIcon class="w-4 h-4" />
							</TButtonWhite>
						</div>
					</div>
				</div>

				<!-- Add new table -->
				<input ref="file" type="file" class="hidden" @change="addNewSpreadsheet()" />

				<SelectSpreadsheetButton class="w-72" @click="$refs.file.click()"> Add another spreadsheet </SelectSpreadsheetButton>
			</div>
		</TCard>

		<hr class="my-6" />
	</div>

	<div class="fixed bottom-0 flex w-screen justify-between border-t bg-white px-6 py-4 dark:bg-gray-800">
		<TButtonWhite @click="$root.resetApp()"> <BanIcon class="mr-2 h-4 w-4" /> Cancel </TButtonWhite>
		<TButtonPrimary @click="$root.finishProject()"> <CheckCircleIcon class="mr-2 h-4 w-4" /> Finish </TButtonPrimary>
	</div>
</template>

<script>
import { BanIcon, CheckCircleIcon, TrashIcon, CogIcon } from '@heroicons/vue/solid'
import { DatabaseIcon, PencilIcon, CheckIcon } from '@heroicons/vue/outline'

import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import TBadge from '@/components/tailwind-components/TBadge'
import TCard from '@/components/tailwind-components/TCard'
import TInput from '@/components/tailwind-components/TInput'
import TButtonIcon from '@/components/tailwind-components/TButtonIcon'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	components: {
		TBadge,
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
		TrashIcon,
		CogIcon
	},

	data: () => ({
		editingTitle: false,
	}),

	methods: {
		addNewSpreadsheet() {
			this.$root.addSpreadsheet(this.$refs.file.files[0].path)

			this.$refs.file.value = ''
		},
	},
}
</script>
