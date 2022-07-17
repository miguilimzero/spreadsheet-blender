<template>
	<div class="block w-full mb-20">
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

		<div class="divide-y">
			<EditingSection title="Primary Column">
				<TCard>
					<div class="p-4">
					</div>
				</TCard>
			</EditingSection>


			<EditingSection title="Blending Method"> 
				<BlendingMethodSelect />
			</EditingSection>

			<EditingSection title="Levenshtein Strength">
				<TCard>
					<div class="p-6 flex space-x-4">
						<div class="flex font-medium text-base text-gray-600 dark:text-gray-200 space-x-1">
							<span>1</span>
<span>/</span>
<span>100</span>
						</div>
						
						<input type="range" min="1" max="100" value="50" class="w-full" >
					</div>
				</TCard>
			</EditingSection>

			<EditingSection title="Schema Preview"> 
				<TCard class="divide-y w-full">
					<div class="flex divide-x" v-for="i in [1,2,3, 4]" :key="i">
						<div class="flex flex-1 p-4" v-for="i in [1,2,3,4,5]" :key="i">
						</div>
					</div>
				</TCard>
			</EditingSection>

			<EditingSection title="Project Summary">
				<TCard class="divide-y w-full">
					<div class="grid grid-cols-2 divide-x">
						<div class="flex items-center justify-between p-4 w-full">
							<p class="font-medium">Columns</p>
							<TBadge> 18 </TBadge>
						</div>
						<div class="flex items-center justify-between p-4">
							<p class="font-medium">Rows</p>
							<TBadge> 45748 </TBadge>
						</div>
					</div>
					<div class="flex items-center justify-between p-4">
						<p class="font-medium">Estimated Size</p>
						<TBadge color="green"> ~ 145.6 MB </TBadge>
					</div>
				</TCard>
			</EditingSection>
		</div>
	</div>
</template>

<script>
import SpreadsheetCard from '@/components/SpreadsheetCard'
import SelectSpreadsheetButton from '@/components/SelectSpreadsheetButton'

import EditingSection from '@/components/EditingSection'
import BlendingMethodSelect from '@/components/BlendingMethodSelect'

import TCard from '@/components/tailwind-components/TCard'
import TBadge from '@/components/tailwind-components/TBadge'

export default {
	components: {
		TCard,
		TBadge,
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

			if (success) {
				this.$refs.file.value = ''
			}
		},
	},
}
</script>
