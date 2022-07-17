<template>
	<div class="w-72 overflow-hidden rounded-lg border bg-white dark:bg-gray-800">
		<div class="space-y-6 py-4 px-8">
			<div class="flex justify-center">
				<div class="rounded-full bg-primary-100 p-3 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
					<TableIcon class="h-8 w-8" />
				</div>
			</div>

			<h5 class="text-center font-bold">{{ file.name }}</h5>

			<div class="flex justify-center">
				<TBadge color="green">
					{{ formattedSize }}
				</TBadge>
			</div>

			<div class="flex justify-center space-x-2">
				<TButtonPrimary> <CogIcon class="mr-2 h-4 w-4" /> Options </TButtonPrimary>
				<TButtonWhite @click="$root.removeSpreadsheet(file.path)">
					<TrashIcon class="h-4 w-4" />
				</TButtonWhite>
			</div>
		</div>
	</div>
</template>

<script>
import { CogIcon, TrashIcon } from '@heroicons/vue/solid'
import { TableIcon } from '@heroicons/vue/outline'

import TBadge from '@/components/tailwind-components/TBadge'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	props: {
		file: {
			type: Object,
			required: true,
		},
	},

	components: {
		TBadge,
		TButtonPrimary,
		TButtonWhite,

		CogIcon,
		TrashIcon,
		TableIcon,
	},

	computed: {
		formattedSize() {
			const size = this.file.size

			if (size > 1024 * 1024 * 1024) {
				return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`
			}
			if (size > 1024 * 1024) {
				return `${(size / 1024 / 1024).toFixed(2)} MB`
			}
			if (size > 1024) {
				return `${(size / 1024).toFixed(2)} KB`
			}

			return `${size} bytes`
		},
	},
}
</script>
