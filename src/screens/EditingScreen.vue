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
							<span>4</span>
						</div>

						<input type="range" min="1" max="4" v-model="$root.project.levinstheinStrength" class="w-full" />
					</div>
				</TCard>
			</EditingSection>

			<EditingSection title="Schema Preview">
				<TCard class="w-full divide-y">
					<div class="flex divide-x" v-for="i in [0, 1, 2, 3]" :key="i">
						<template v-if="i === 0">
							<div class="flex flex-1 px-4 py-2"  v-for="column in $root.projectColumns" :key="column">
								<p class="font-medium">
									{{ column }}
								</p>
							</div>
						</template>
						<template v-else>
							<div class="flex flex-1 p-4" v-for="i in $root.projectColumns.length" :key="i"></div>
						</template>
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
import TSelect from '@/components/tailwind-components/TSelect'

export default {
	components: {
		TCard,
		TBadge,
		TSelect,
		InvalidFileError,
		SpreadsheetCard,
		SelectSpreadsheetButton,
		EditingSection,
		BlendingMethodSelect,
	},

	data: () => ({
		editingTitle: false,
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
