<template>
	<div class="mb-20 block w-full">
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

				<SelectSpreadsheetButton class="w-72" @click="$refs.file.click()">
					{{ $t('Add another spreadsheet') }}
				</SelectSpreadsheetButton>
			</div>
		</TCard>

		<InvalidFileError class="mt-4" ref="fileError" />

		<div class="divide-y">
			<EditingSection title="Primary Column">
				<TCard>
					<div class="p-4">
						<TSelect v-model="$root.project.primaryColumn">
							<option :value="column" v-for="column in $root.projectColumns" :key="column">
								{{ column }}
							</option>
						</TSelect>
					</div>
				</TCard>
			</EditingSection>

			<EditingSection title="Blending Method">
				<BlendingMethodSelect />
			</EditingSection>

			<EditingSection title="Levenshtein Strength">
				<TCard>
					<div class="flex space-x-4 p-6">
						<div class="flex space-x-1 text-base font-medium text-gray-600 dark:text-gray-200">
							<span>{{ $root.project.levinstheinStrength }}</span>
							<span>/</span>
							<span>3</span>
						</div>

						<input type="range" min="0" max="3" v-model="$root.project.levinstheinStrength" class="w-full" />
					</div>
				</TCard>
			</EditingSection>

			<EditingSection title="Schema Preview">
				<TCard class="mb-5">
					<div class="flex p-4 space-x-4 items-center">
						<p class="break-normal">Preview rows:</p>
						<TInput v-model="previewLimit" type="number" class="w-full" />
					</div>
				</TCard>

				<TCard class="w-full divide-y">
					<div class="flex divide-x">
						<div class="flex flex-1 px-4 py-2" v-for="column in $root.projectColumns" :key="column">
							<p class="font-medium">
								{{ column }}
							</p>
						</div>
					</div>
					<div class="flex divide-x" v-for="row in $root.projectRows.slice(0, previewLimit)" :key="row">
						<div class="flex flex-1 p-4" v-for="(value, index) in row" :key="value + index">
							{{ value }}
						</div>
					</div>
					<div class="flex divide-x" v-if="$root.projectRows.length > previewLimit">
						<div class="flex flex-1 p-4" v-for="column in $root.projectColumns" :key="column">
							<p class="font-medium">...</p>
						</div>
					</div>
				</TCard>
			</EditingSection>

			<EditingSection title="Project Summary">
				<TCard class="w-full divide-y">
					<div class="grid grid-cols-2 divide-x">
						<div class="flex w-full items-center justify-between p-4">
							<p class="font-medium">Columns</p>
							<TBadge> {{ $root.projectColumns.length }} </TBadge>
						</div>
						<div class="flex items-center justify-between p-4">
							<p class="font-medium">Rows</p>
							<TBadge> {{ $root.projectRows.length }} </TBadge>
						</div>
					</div>
					<div class="flex items-center justify-between p-4">
						<p class="font-medium">Estimated Size</p>
						<TBadge color="green"> ~ {{ $root.projectEstimatedSize }} </TBadge>
					</div>
				</TCard>
			</EditingSection>
		</div>
	</div>
</template>

<script>
import InvalidFileError from '@/components/InvalidFileError'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import EditingSection from './EditingComponents/EditingSection'
import SpreadsheetCard from './EditingComponents/SpreadsheetCard'
import BlendingMethodSelect from './EditingComponents/BlendingMethodSelect'

import TCard from '@/components/tailwind-components/TCard'
import TBadge from '@/components/tailwind-components/TBadge'
import TInput from '@/components/tailwind-components/TInput'
import TSelect from '@/components/tailwind-components/TSelect'

export default {
	components: {
		TCard,
		TBadge,
		TSelect,
		TInput,
		InvalidFileError,
		SpreadsheetCard,
		SelectSpreadsheetButton,
		EditingSection,
		BlendingMethodSelect,
	},

	data: () => ({
		editingTitle: false,
		previewLimit: 3,
	}),

	methods: {
		addNewSpreadsheet() {
			const success = this.$root.addSpreadsheet(this.$refs.file.files[0])

			if (!success) {
				this.$refs.fileError.show()

				return
			}

			this.$refs.file.value = ''
		},
	},
}
</script>
